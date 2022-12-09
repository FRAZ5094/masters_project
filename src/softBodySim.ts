import {
  calculateDampingForce,
  calculateSpringForce,
} from "./softBodyFunctions/forces/forces";
import {
  calculateSurfaceNormals,
  calculateVertexNormals,
} from "./softBodyFunctions/vertexNormals/vertexNormals";
import { dot } from "./softBodyFunctions/vector/vector";
import {
  isVertexSelfShadowed,
  particleTriangleCollisionResolution,
  vertexWillSelfCollide,
} from "./softBodyFunctions/collisions/collisions";
import { vertexIsInLight } from "./softBodyFunctions/projection/projection";
import { round } from "./softBodyFunctions/misc/misc";

export type integrators = "euler" | "rk4";

export interface SimulationParams {
  nTimestep: number;
  d: number;
  AM_ratio: number;
  nWidthSegments: number;
  k: number;
  dampingRatio: number;
  dt: number;
  lightForce: boolean;
  selfShadowing: boolean;
  selfCollision: boolean;
}

let selfShadowingCheck: boolean;
let selfCollisionCheck: boolean;
let lightForce: boolean;

export const simulate = (
  simulationParams: SimulationParams,
  initialVertexPosArray: Float32Array,
  springArrays: number[][][],
  integratorName: integrators,
  trianglesAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array
): Float32Array => {
  console.log("starting simulation");

  let integrator;

  if (integratorName == "euler") integrator = euler;
  else if (integratorName == "rk4") integrator = rk4;
  else integrator = euler;

  const nVertices = initialVertexPosArray.length / 3;

  selfShadowingCheck = simulationParams.selfShadowing;
  selfCollisionCheck = simulationParams.selfCollision;
  lightForce = simulationParams.lightForce;

  const nTimestep = simulationParams.nTimestep;
  const dt = simulationParams.dt;
  const k = simulationParams.k;
  const dampingRatio = simulationParams.dampingRatio;

  //this is the mass of a single particle
  const mass =
    (simulationParams.d * simulationParams.d) / simulationParams.AM_ratio;
  const massP = mass / nVertices;

  console.log(
    "p will be " +
      (Float32Array.BYTES_PER_ELEMENT * nTimestep * nVertices * 3) / 1000000 +
      "mb"
  );

  console.log("Initializing memory");

  console.time();

  const v = new Float32Array(nVertices * 3);
  const p = new Float32Array(nTimestep * nVertices * 3);

  for (let i = 0; i < nVertices; i++) {
    let stride = i * 3;
    p[stride + 0] = initialVertexPosArray[stride + 0];
    p[stride + 1] = initialVertexPosArray[stride + 1];
    p[stride + 2] = initialVertexPosArray[stride + 2];
  }

  console.timeEnd();
  console.log("Done initializing memory");

  // main simulation loop

  console.log("Starting simulation loop");
  console.time();

  const simLoopStartTime = performance.now();

  // loop over time steps
  for (let t = 1; t < nTimestep; t++) {
    if (t % (nTimestep / 100) == 0) {
      const timeElapsed = performance.now() - simLoopStartTime;

      const estimatedTotalSimTime: number =
        ((performance.now() - simLoopStartTime) / t) * nTimestep;
      console.log(
        "Simulation progress: " +
          round((t / nTimestep) * 100, 0) +
          "% " +
          round((estimatedTotalSimTime - timeElapsed) / 1000, 1) +
          " seconds left"
      );
    }

    const vertexPosArray = p.slice(nVertices * 3 * (t - 1), nVertices * 3 * t);

    const vertexNormals = calculateVertexNormals(
      trianglesAttachedToVertexArray,
      vertexPosArray
    );

    const surfaceNormalsArray = calculateSurfaceNormals(
      vertexPosArray,
      triangleIndicesArray
    );

    for (let i = 0; i < nVertices; i++) {
      //stride value for this vertex at this timestep
      let stride = i * 3 + t * (nVertices * 3);

      //stride value for this vertex in the previous timestep
      let previousStride = stride - nVertices * 3;

      let vStride = i * 3; // stride different for v because its only stored for 1 timestep at a time

      let x = p[previousStride + 0];
      let y = p[previousStride + 1];
      let z = p[previousStride + 2];

      // if (i == Math.floor(nVertices / 2)) {
      //   console.log({ x, y, z });
      // }

      let vx = v[vStride + 0];
      let vy = v[vStride + 1];
      let vz = v[vStride + 2];

      let nx = vertexNormals[i * 3 + 0];
      let ny = vertexNormals[i * 3 + 1];
      let nz = vertexNormals[i * 3 + 2];

      let [x_new, y_new, z_new, vx_new, vy_new, vz_new] = integrator(
        x,
        y,
        z,
        vx,
        vy,
        vz,
        t,
        dt,
        massP,
        k,
        springArrays[i],
        dampingRatio,
        nVertices,
        p,
        nx,
        ny,
        nz,
        i,
        vertexPosArray,
        triangleIndicesArray,
        surfaceNormalsArray
      );

      v[vStride + 0] = vx_new;
      v[vStride + 1] = vy_new;
      v[vStride + 2] = vz_new;

      p[stride + 0] = x_new;
      p[stride + 1] = y_new;
      p[stride + 2] = z_new;
    }

    if (selfCollisionCheck) {
      for (let i = 0; i < nVertices; i++) {
        //stride value for this vertex at this timestep
        let stride = i * 3 + t * (nVertices * 3);

        //stride value for this vertex in the previous timestep
        let previousStride = stride - nVertices * 3;

        const p_old = [
          p[previousStride + 0],
          p[previousStride + 1],
          p[previousStride + 2],
        ];
        const p_new = [p[stride + 0], p[stride + 1], p[stride + 2]];

        const res = vertexWillSelfCollide(
          i,
          p_old,
          p_new,
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        );

        if (res.intersected) {
          console.log("intersection", t);
          const vStride = i * 3;
          const v_new = [v[vStride + 0], v[vStride + 1], v[vStride + 2]];
          const [x_new, y_new, z_new, vx_new, vy_new, vz_new] =
            particleTriangleCollisionResolution(
              res.I!,
              p_old,
              p_new,
              v_new,
              res.n!
            );

          v[vStride + 0] = vx_new;
          v[vStride + 1] = vy_new;
          v[vStride + 2] = vz_new;

          p[stride + 0] = x_new;
          p[stride + 1] = y_new;
          p[stride + 2] = z_new;
        }
      }
    }
  }
  console.log("Finished simulation loop");
  console.timeEnd();

  return p;
};

export const f = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  t: number,
  k: number,
  springArray: number[][],
  dampingRatio: number,
  nVertices: number,
  p: Float32Array,
  mass: number,
  nx: number,
  ny: number,
  nz: number,
  vertexIndex: number,
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): number[] => {
  let fx = 0;
  let fy = 0;
  let fz = 0;

  const light = {
    x: 0.5,
    y: 0,
    z: 0.01,
    r: 0.5,
    dirX: 0.707,
    dirY: 0,
    dirZ: -0.707,
    mag: 10 / nVertices,
  };

  const nSprings = springArray.length;

  //for each spring attached to the vertex
  for (let i = 0; i < nSprings; i++) {
    let springData = springArray[i];
    let otherIndex = springData[0];
    let springL = springData[1];

    let otherStride = otherIndex * 3 + (t - 1) * nVertices * 3;

    let x_other = p[otherStride + 0];
    let y_other = p[otherStride + 1];
    let z_other = p[otherStride + 2];

    let [fSpringX, fSpringY, fSpringZ] = calculateSpringForce(
      x,
      y,
      z,
      x_other,
      y_other,
      z_other,
      k,
      springL
    );

    fx += fSpringX;
    fy += fSpringY;
    fz += fSpringZ;
  }

  let [fDamperX, fDamperY, fDamperZ] = calculateDampingForce(
    vx,
    vy,
    vz,
    dampingRatio
  );

  fx += fDamperX;
  fy += fDamperY;
  fz += fDamperZ;

  // if (vertexIndex == 0) {
  //   fy += -0.5;
  //   fx += 0.5;
  //   if (t < 20) {
  //     fz += 0.5;
  //   } else {
  //     fz -= 0.5;
  //   }
  // }

  // } else if (vertexIndex == nVertices - 1) {
  //   fy += 0.5;
  //   fx += -0.5;
  //   fz += 0.5;
  // }

  //finding out if the vertex is in the light

  if (lightForce) {
    if (
      vertexIsInLight([x, y, z], [light.x, light.y, light.z], light.r, [
        light.dirX,
        light.dirY,
        light.dirZ,
      ])
    ) {
      let applyLightForce = true;
      if (
        selfShadowingCheck &&
        isVertexSelfShadowed(
          vertexIndex,
          [light.x, light.y, light.z],
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        )
      ) {
        applyLightForce = false;
      }

      if (applyLightForce) {
        const scale = Math.abs(
          dot(light.dirX, light.dirY, light.dirZ, nx, ny, nz)
        );
        fx += light.mag * scale * light.dirX;
        fy += light.mag * scale * light.dirY;
        fz += light.mag * scale * light.dirZ;
      }
    }
  }

  const ax = fx / mass;
  const ay = fy / mass;
  const az = fz / mass;

  return [ax, ay, az];
};

export const euler = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  t: number,
  dt: number,
  massP: number,
  k: number,
  springArray: number[][],
  dampingRatio: number,
  nVertices: number,
  p: Float32Array,
  nx: number,
  ny: number,
  nz: number,
  vertexIndex: number,
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): number[] => {
  const [ax, ay, az] = f(
    x,
    y,
    z,
    vx,
    vy,
    vz,
    t,
    k,
    springArray,
    dampingRatio,
    nVertices,
    p,
    massP,
    nx,
    ny,
    nz,
    vertexIndex,
    vertexPosArray,
    triangleIndicesArray,
    surfaceNormalsArray
  );

  let vx_new = vx + ax * dt;
  let vy_new = vy + ay * dt;
  let vz_new = vz + az * dt;

  let x_new = x + vx_new * dt;
  let y_new = y + vy_new * dt;
  let z_new = z + vz_new * dt;

  return [x_new, y_new, z_new, vx_new, vy_new, vz_new];
};

export const rk4 = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  t: number,
  dt: number,
  massP: number,
  k: number,
  springArray: number[][],
  dampingRatio: number,
  nVertices: number,
  p: Float32Array,
  nx: number,
  ny: number,
  nz: number,
  vertexIndex: number,
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): number[] => {
  const [k1vx, k1vy, k1vz] = f(
    x,
    y,
    z,
    vx,
    vy,
    vz,
    t,
    k,
    springArray,
    dampingRatio,
    nVertices,
    p,
    massP,
    nx,
    ny,
    nz,
    vertexIndex,
    vertexPosArray,
    triangleIndicesArray,
    surfaceNormalsArray
  );

  const k1x = vx;
  const k1y = vy;
  const k1z = vz;

  const [k2vx, k2vy, k2vz] = f(
    x + dt * (k1x / 2),
    y + dt * (k1y / 2),
    z + dt * (k1z / 2),
    vx + dt * (k1vx / 2),
    vy + dt * (k1vy / 2),
    vz + dt * (k1vz / 2),
    t,
    k,
    springArray,
    dampingRatio,
    nVertices,
    p,
    massP,
    nx,
    ny,
    nz,
    vertexIndex,
    vertexPosArray,
    triangleIndicesArray,
    surfaceNormalsArray
  );

  const k2x = vx + dt * (k1vx / 2);
  const k2y = vy + dt * (k1vy / 2);
  const k2z = vz + dt * (k1vz / 2);

  const [k3vx, k3vy, k3vz] = f(
    x + dt * (k2x / 2),
    y + dt * (k2y / 2),
    z + dt * (k2z / 2),
    vx + dt * (k2vx / 2),
    vy + dt * (k2vy / 2),
    vz + dt * (k2vz / 2),
    t,
    k,
    springArray,
    dampingRatio,
    nVertices,
    p,
    massP,
    nx,
    ny,
    nz,
    vertexIndex,
    vertexPosArray,
    triangleIndicesArray,
    surfaceNormalsArray
  );

  const k3x = vx + dt * (k2vx / 2);
  const k3y = vy + dt * (k2vy / 2);
  const k3z = vz + dt * (k2vz / 2);

  const [k4vx, k4vy, k4vz] = f(
    x + dt * k3x,
    y + dt * k3y,
    z + dt * k3z,
    vx + dt * k3vx,
    vy + dt * k3vy,
    vz + dt * k3vz,
    t,
    k,
    springArray,
    dampingRatio,
    nVertices,
    p,
    massP,
    nx,
    ny,
    nz,
    vertexIndex,
    vertexPosArray,
    triangleIndicesArray,
    surfaceNormalsArray
  );

  const k4x = vx + dt * k3vx;
  const k4y = vy + dt * k3vy;
  const k4z = vz + dt * k3vz;

  vx += (dt * (k1vx + 2 * k2vx + 2 * k3vx + k4vx)) / 6;
  vy += (dt * (k1vy + 2 * k2vy + 2 * k3vy + k4vy)) / 6;
  vz += (dt * (k1vz + 2 * k2vz + 2 * k3vz + k4vz)) / 6;

  x += (dt * (k1x + 2 * k2x + 2 * k3x + k4x)) / 6;
  y += (dt * (k1y + 2 * k2y + 2 * k3y + k4y)) / 6;
  z += (dt * (k1z + 2 * k2z + 2 * k3z + k4z)) / 6;

  return [x, y, z, vx, vy, vz];
};
