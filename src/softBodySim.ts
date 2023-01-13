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

export interface SoftBodyParams {
  d: number;
  AMR: number;
  reflectivity: number;
  nCols: number;
  k: number;
  integrator: integrators;
  dampingRatio: number;
  dt: number;
  lightForce: boolean;
  selfShadowing: boolean;
  selfCollision: boolean;
}

export interface simulationReturn {
  p_new: Float32Array;
  v_new: Float32Array;
  a: number[];
}

//globals in this file
let selfShadowingCheck: boolean;
let selfCollisionCheck: boolean;
let lightForce: boolean;

export const simulate = (
  simulationParams: SoftBodyParams,
  p: Float32Array,
  v: Float32Array,
  aMag: number,
  lightDir: number[],
  springArrays: number[][][],
  trianglesAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array
): simulationReturn => {
  let integrator;

  if (simulationParams.integrator == "euler") integrator = euler;
  else if (simulationParams.integrator == "rk4") integrator = rk4;
  else integrator = euler;

  const nVertices = p.length / 3;

  //split the accelerations evenly between all the vertices
  const aVertMag = aMag / nVertices;

  //will be used to store the new p and v
  const p_new = new Float32Array(p.length);
  const v_new = new Float32Array(p.length);
  const a = [0, 0, 0];

  selfShadowingCheck = simulationParams.selfShadowing;
  selfCollisionCheck = simulationParams.selfCollision;
  lightForce = simulationParams.lightForce;

  const dt = simulationParams.dt;
  const k = simulationParams.k;
  const dampingRatio = simulationParams.dampingRatio;

  //this is the mass of a single particle
  const mass = (simulationParams.d * simulationParams.d) / simulationParams.AMR;
  const massP = mass / nVertices;

  const vertexNormals = calculateVertexNormals(
    trianglesAttachedToVertexArray,
    p
  );

  const surfaceNormalsArray = calculateSurfaceNormals(p, triangleIndicesArray);

  for (let i = 0; i < nVertices; i++) {
    //stride value for this vertex at this timestep
    let stride = i * 3;

    const x = p[stride + 0];
    const y = p[stride + 1];
    const z = p[stride + 2];

    const vx = v[stride + 0];
    const vy = v[stride + 1];
    const vz = v[stride + 2];

    let nx = vertexNormals[stride + 0];
    let ny = vertexNormals[stride + 1];
    let nz = vertexNormals[stride + 2];

    let [x_new, y_new, z_new, vx_new, vy_new, vz_new, ax, ay, az] = integrator(
      x,
      y,
      z,
      vx,
      vy,
      vz,
      aVertMag,
      lightDir,
      dt,
      massP,
      k,
      springArrays[i],
      dampingRatio,
      p,
      nx,
      ny,
      nz,
      i,
      p,
      triangleIndicesArray,
      surfaceNormalsArray
    );

    a[0] += ax;
    a[1] += ay;
    a[2] += az;

    v_new[stride + 0] = vx_new;
    v_new[stride + 1] = vy_new;
    v_new[stride + 2] = vz_new;

    p_new[stride + 0] = x_new;
    p_new[stride + 1] = y_new;
    p_new[stride + 2] = z_new;
  }

  // if (selfCollisionCheck) {
  //   for (let i = 0; i < nVertices; i++) {
  //     //stride value for this vertex at this timestep
  //     let stride = i * 3;

  //     //stride value for this vertex in the previous timestep
  //     let previousStride = stride - nVertices * 3;

  //     const p_old = [
  //       p[previousStride + 0],
  //       p[previousStride + 1],
  //       p[previousStride + 2],
  //     ];
  //     const p_new = [p[stride + 0], p[stride + 1], p[stride + 2]];

  //     const res = vertexWillSelfCollide(
  //       i,
  //       p_old,
  //       p_new,
  //       p,
  //       triangleIndicesArray,
  //       surfaceNormalsArray
  //     );

  //     if (res.intersected) {
  //       console.log("intersection", t);
  //       const vStride = i * 3;
  //       const v_new = [v[vStride + 0], v[vStride + 1], v[vStride + 2]];
  //       const [x_new, y_new, z_new, vx_new, vy_new, vz_new] =
  //         particleTriangleCollisionResolution(
  //           res.I!,
  //           p_old,
  //           p_new,
  //           v_new,
  //           res.n!
  //         );

  //       v[vStride + 0] = vx_new;
  //       v[vStride + 1] = vy_new;
  //       v[vStride + 2] = vz_new;

  //       p[stride + 0] = x_new;
  //       p[stride + 1] = y_new;
  //       p[stride + 2] = z_new;
  //     }
  //   }
  // }

  return { p_new, v_new, a };
};

export const f = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  aVertMag: number,
  lightDir: number[],
  k: number,
  springArray: number[][],
  dampingRatio: number,
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

  const nSprings = springArray.length;

  //for each spring attached to the vertex
  for (let i = 0; i < nSprings; i++) {
    let springData = springArray[i];
    let otherIndex = springData[0];
    let springL = springData[1];

    let otherStride = otherIndex * 3;

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

  //place light source 100m away from the vertex
  const l = 100;

  const lightX = x - l * lightDir[0];
  const lightY = y - l * lightDir[1];
  const lightZ = z - l * lightDir[2];

  let aLightX = 0;
  let aLightY = 0;
  let aLightZ = 0;

  if (lightForce) {
    let applyLightForce = true;
    if (
      selfShadowingCheck &&
      isVertexSelfShadowed(
        vertexIndex,
        [lightX, lightY, lightZ],
        vertexPosArray,
        triangleIndicesArray,
        surfaceNormalsArray
      )
    ) {
      applyLightForce = false;
    }

    if (applyLightForce) {
      const scale = Math.abs(
        dot(lightDir[0], lightDir[1], lightDir[2], nx, ny, nz)
      );
      aLightX = aVertMag * scale * lightDir[0];
      aLightY = aVertMag * scale * lightDir[1];
      aLightZ = aVertMag * scale * lightDir[2];
      fx += aLightX * mass;
      fy += aLightY * mass;
      fz += aLightZ * mass;
    }
  }

  const ax = fx / mass;
  const ay = fy / mass;
  const az = fz / mass;

  return [ax, ay, az, aLightX, aLightY, aLightZ];
};

export const euler = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  aVertMag: number,
  lightDir: number[],
  dt: number,
  massP: number,
  k: number,
  springArray: number[][],
  dampingRatio: number,
  p: Float32Array,
  nx: number,
  ny: number,
  nz: number,
  vertexIndex: number,
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): number[] => {
  //this is semi-implicit euler
  const [ax, ay, az, aLightX, aLightY, aLightZ] = f(
    x,
    y,
    z,
    vx,
    vy,
    vz,
    aVertMag,
    lightDir,
    k,
    springArray,
    dampingRatio,
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

  //need to multiply the aLight by dt so that it is correct acceleration for the step size, based on how euler method handles this

  return [
    x_new,
    y_new,
    z_new,
    vx_new,
    vy_new,
    vz_new,
    aLightX * dt,
    aLightY * dt,
    aLightZ * dt,
  ];
};

export const rk4 = (
  x: number,
  y: number,
  z: number,
  vx: number,
  vy: number,
  vz: number,
  aVertMag: number,
  lightDir: number[],
  dt: number,
  massP: number,
  k: number,
  springArray: number[][],
  dampingRatio: number,
  p: Float32Array,
  nx: number,
  ny: number,
  nz: number,
  vertexIndex: number,
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): number[] => {
  const [k1vx, k1vy, k1vz, k1ALightX, k1ALightY, k1ALightZ] = f(
    x,
    y,
    z,
    vx,
    vy,
    vz,
    aVertMag,
    lightDir,
    k,
    springArray,
    dampingRatio,
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

  const [k2vx, k2vy, k2vz, k2ALightX, k2ALightY, k2ALightZ] = f(
    x + dt * (k1x / 2),
    y + dt * (k1y / 2),
    z + dt * (k1z / 2),
    vx + dt * (k1vx / 2),
    vy + dt * (k1vy / 2),
    vz + dt * (k1vz / 2),
    aVertMag,
    lightDir,
    k,
    springArray,
    dampingRatio,
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

  const [k3vx, k3vy, k3vz, k3ALightX, k3ALightY, k3ALightZ] = f(
    x + dt * (k2x / 2),
    y + dt * (k2y / 2),
    z + dt * (k2z / 2),
    vx + dt * (k2vx / 2),
    vy + dt * (k2vy / 2),
    vz + dt * (k2vz / 2),
    aVertMag,
    lightDir,
    k,
    springArray,
    dampingRatio,
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

  const [k4vx, k4vy, k4vz, k4ALightX, k4ALightY, k4ALightZ] = f(
    x + dt * k3x,
    y + dt * k3y,
    z + dt * k3z,
    vx + dt * k3vx,
    vy + dt * k3vy,
    vz + dt * k3vz,
    aVertMag,
    lightDir,
    k,
    springArray,
    dampingRatio,
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

  const aLightX =
    (dt * (k1ALightX + 2 * k2ALightX + 2 * k3ALightX + k4ALightX)) / 6;
  const aLightY =
    (dt * (k1ALightY + 2 * k2ALightY + 2 * k3ALightY + k4ALightY)) / 6;
  const aLightZ =
    (dt * (k1ALightZ + 2 * k2ALightZ + 2 * k3ALightZ + k4ALightZ)) / 6;

  x += (dt * (k1x + 2 * k2x + 2 * k3x + k4x)) / 6;
  y += (dt * (k1y + 2 * k2y + 2 * k3y + k4y)) / 6;
  z += (dt * (k1z + 2 * k2z + 2 * k3z + k4z)) / 6;

  return [x, y, z, vx, vy, vz, aLightX, aLightY, aLightZ];
};
