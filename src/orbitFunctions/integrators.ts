import { OrbitParams } from "../orbitMain";
import { SoftBodyParams } from "../softBodySim";
import { getOrbitPos, sunOrbitalElements } from "./kepler/kepler";
import { orbitF } from "./orbitF";

export interface IntegratorFunction {
  (
    ptSat: number[],
    vtSat: number[],
    bodyPt: Float32Array,
    bodyVt: Float32Array,
    softBodyParams: SoftBodyParams,
    orbitParams: OrbitParams,
    springArrays: number[][][],
    triangleAttachedToVertexArray: number[][],
    triangleIndicesArray: Uint16Array,
    massesData: number[],
    t: number,
    dt: number
  ): integratorReturn;
}

export interface integratorReturn {
  pNew: number[];
  vNew: number[];
  bodyPNew: Float32Array;
  bodyVNew: Float32Array;
}

export const orbitExplicitEuler: IntegratorFunction = (
  pt: number[],
  vt: number[],
  bodyPt: Float32Array,
  bodyVt: Float32Array,
  softBodyParams: SoftBodyParams,
  orbitParams: OrbitParams,
  springArrays: number[][][],
  triangleAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array,
  massesData: number[],
  t: number,
  dt: number
): integratorReturn => {
  const fReturn = orbitF(
    pt,
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const vx_new = vt[0] + fReturn.a[0] * dt;
  const vy_new = vt[1] + fReturn.a[1] * dt;
  const vz_new = vt[2] + fReturn.a[2] * dt;

  const px_new = pt[0] + vt[0] * dt;
  const py_new = pt[1] + vt[1] * dt;
  const pz_new = pt[2] + vt[2] * dt;

  const pNew = [px_new, py_new, pz_new];
  const vNew = [vx_new, vy_new, vz_new];

  return { pNew, vNew, bodyPNew: fReturn.bodyPt, bodyVNew: fReturn.bodyVt };
};

export const orbitSemiImplicitEuler: IntegratorFunction = (
  pt: number[],
  vt: number[],
  bodyPt: Float32Array,
  bodyVt: Float32Array,
  softBodyParams: SoftBodyParams,
  orbitParams: OrbitParams,
  springArrays: number[][][],
  triangleAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array,
  massesData: number[],
  t: number,
  dt: number
): integratorReturn => {
  const fReturn = orbitF(
    pt,
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const vx_new = vt[0] + fReturn.a[0] * dt;
  const vy_new = vt[1] + fReturn.a[1] * dt;
  const vz_new = vt[2] + fReturn.a[2] * dt;

  const px_new = pt[0] + vx_new * dt;
  const py_new = pt[1] + vy_new * dt;
  const pz_new = pt[2] + vz_new * dt;

  const pNew = [px_new, py_new, pz_new];
  const vNew = [vx_new, vy_new, vz_new];

  return { pNew, vNew, bodyPNew: fReturn.bodyPt, bodyVNew: fReturn.bodyVt };
};

export const orbitRK4: IntegratorFunction = (
  pt: number[],
  vt: number[],
  bodyPt: Float32Array,
  bodyVt: Float32Array,
  softBodyParams: SoftBodyParams,
  orbitParams: OrbitParams,
  springArrays: number[][][],
  triangleAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array,
  massesData: number[],
  t: number,
  dt: number
): integratorReturn => {
  const x = pt[0];
  const y = pt[1];
  const z = pt[2];

  const k1rx = vt[0];
  const k1ry = vt[1];
  const k1rz = vt[2];

  const fReturn1 = orbitF(
    pt,
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const k1vx = fReturn1.a[0];
  const k1vy = fReturn1.a[1];
  const k1vz = fReturn1.a[2];

  const k2rx = vt[0] + 0.5 * dt * k1vx;
  const k2ry = vt[1] + 0.5 * dt * k1vy;
  const k2rz = vt[2] + 0.5 * dt * k1vz;

  const fReturn2 = orbitF(
    [x + 0.5 * dt * k1rx, y + 0.5 * dt * k1ry, z + 0.5 * dt * k1rz],
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const k2vx = fReturn2.a[0];
  const k2vy = fReturn2.a[1];
  const k2vz = fReturn2.a[2];

  const k3rx = vt[0] + 0.5 * dt * k2vx;
  const k3ry = vt[1] + 0.5 * dt * k2vy;
  const k3rz = vt[2] + 0.5 * dt * k2vz;

  const fReturn3 = orbitF(
    [x + 0.5 * dt * k2rx, y + 0.5 * dt * k2ry, z + 0.5 * dt * k2rz],
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const k3vx = fReturn3.a[0];
  const k3vy = fReturn3.a[1];
  const k3vz = fReturn3.a[2];

  const k4rx = vt[0] + dt * k3vx;
  const k4ry = vt[1] + dt * k3vy;
  const k4rz = vt[2] + dt * k3vz;

  const fReturn4 = orbitF(
    [x + dt * k3rx, y + dt * k3ry, z + dt * k3rz],
    massesData,
    softBodyParams,
    orbitParams,
    bodyPt,
    bodyVt,
    springArrays,
    triangleAttachedToVertexArray,
    triangleIndicesArray,
    t
  );

  const k4vx = fReturn4.a[0];
  const k4vy = fReturn4.a[1];
  const k4vz = fReturn4.a[2];

  const px_new = pt[0] + dt * (1 / 6) * (k1rx + 2 * k2rx + 2 * k3rx + k4rx);
  const py_new = pt[1] + dt * (1 / 6) * (k1ry + 2 * k2ry + 2 * k3ry + k4ry);
  const pz_new = pt[2] + dt * (1 / 6) * (k1rz + 2 * k2rz + 2 * k3rz + k4rz);

  const vx_new = vt[0] + dt * (1 / 6) * (k1vx + 2 * k2vx + 2 * k3vx + k4vx);
  const vy_new = vt[1] + dt * (1 / 6) * (k1vy + 2 * k2vy + 2 * k3vy + k4vy);
  const vz_new = vt[2] + dt * (1 / 6) * (k1vz + 2 * k2vz + 2 * k3vz + k4vz);

  const pNew = [px_new, py_new, pz_new];
  const vNew = [vx_new, vy_new, vz_new];

  //assume that the new state is the one produced by the calculation of k4v

  return { pNew, vNew, bodyPNew: fReturn4.bodyPt, bodyVNew: fReturn4.bodyVt };
};
