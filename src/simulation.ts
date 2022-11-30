import {
  calculateDampingForce,
  calculateSpringForce,
} from "./functions/forces/forces";
import {
  calculateSurfaceNormals,
  calculateVertexNormals,
} from "./functions/vertexNormals/vertexNormals";
import { dot } from "./functions/vector/vector";
import { isVertexSelfShadowed } from "./functions/intersections/intersections";
import { round } from "./functions/misc/misc";

export type integrators = "euler" | "rk4";

export const simulate = (
  initialVertexPosArray: Float32Array,
  mass: number,
  k: number,
  dampingRatio: number,
  springArrays: number[][][],
  nTimestep: number,
  dt: number,
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

  //this is the mass of a single particle
  const massP = mass / nVertices;

  console.log(
    "p will be " +
      (Float32Array.BYTES_PER_ELEMENT * nTimestep * nVertices * 3) / 1000000 +
      "mb"
  );
  // console.log(
  //   "v will be " +
  //     (Float32Array.BYTES_PER_ELEMENT * nVertices * 3) / 1000000 +
  //     "mb"
  // );

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

      let vx = v[vStride + 0];
      let vy = v[vStride + 1];
      let vz = v[vStride + 2];

      let nx = vertexNormals[i * 3 + 0];
      let ny = vertexNormals[i * 3 + 1];
      let nz = vertexNormals[i * 3 + 2];

      const [x_new, y_new, z_new, vx_new, vy_new, vz_new] = integrator(
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
    x: 0,
    y: 0,
    z: 1,
    r: 0.25,
    dirx: 0,
    diry: 0,
    dirz: -1,
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

  // if (vertexIndex == nVertices - 1) {
  //   fy += 0.5;
  //   fx += -0.5;
  //   fz += 0.5;
  // }

  //finding out if the vertex is in the light

  if (
    !isVertexSelfShadowed(
      vertexIndex,
      [light.x, light.y, light.z],
      vertexPosArray,
      triangleIndicesArray,
      surfaceNormalsArray
    )
  ) {
    const dxl = x - light.x;
    const dyl = y - light.y;

    const scale = Math.abs(dot(light.dirx, light.diry, light.dirz, nx, ny, nz));

    if (Math.sqrt(dxl * dxl + dyl * dyl) < light.r) {
      fx += light.mag * scale * light.dirx;
      fy += light.mag * scale * light.diry;
      fz += light.mag * scale * light.dirz;
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
