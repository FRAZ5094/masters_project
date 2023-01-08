import { getOrbitPos, sunOrbitalElements } from "./kepler/kepler";
import { orbitF } from "./orbitF";

export const orbitExplicitEuler = (
  pt: number[],
  vt: number[],
  massesData: number[],
  t: number,
  dt: number
): number[] => {
  const a = orbitF(pt, massesData, t);

  const vx_new = vt[0] + a[0] * dt;
  const vy_new = vt[1] + a[1] * dt;
  const vz_new = vt[2] + a[2] * dt;

  const px_new = pt[0] + vt[0] * dt;
  const py_new = pt[1] + vt[1] * dt;
  const pz_new = pt[2] + vt[2] * dt;

  return [px_new, py_new, pz_new, vx_new, vy_new, vz_new];
};

export const orbitSemiImplicitEuler = (
  pt: number[],
  vt: number[],
  massesData: number[],
  t: number,
  dt: number
): number[] => {
  const a = orbitF(pt, massesData, t);

  const vx_new = vt[0] + a[0] * dt;
  const vy_new = vt[1] + a[1] * dt;
  const vz_new = vt[2] + a[2] * dt;

  const px_new = pt[0] + vx_new * dt;
  const py_new = pt[1] + vy_new * dt;
  const pz_new = pt[2] + vz_new * dt;

  return [px_new, py_new, pz_new, vx_new, vy_new, vz_new];
};

export const orbitRK4 = (
  pt: number[],
  vt: number[],
  massesData: number[],
  t: number,
  dt: number
): number[] => {
  const x = pt[0];
  const y = pt[1];
  const z = pt[2];

  const k1rx = vt[0];
  const k1ry = vt[1];
  const k1rz = vt[2];

  const [k1vx, k1vy, k1vz] = orbitF(pt, massesData, t);

  const k2rx = vt[0] + 0.5 * dt * k1vx;
  const k2ry = vt[1] + 0.5 * dt * k1vy;
  const k2rz = vt[2] + 0.5 * dt * k1vz;

  const [k2vx, k2vy, k2vz] = orbitF(
    [x + 0.5 * dt * k1rx, y + 0.5 * dt * k1ry, z + 0.5 * dt * k1rz],
    massesData,
    t
  );

  const k3rx = vt[0] + 0.5 * dt * k2vx;
  const k3ry = vt[1] + 0.5 * dt * k2vy;
  const k3rz = vt[2] + 0.5 * dt * k2vz;

  const [k3vx, k3vy, k3vz] = orbitF(
    [x + 0.5 * dt * k2rx, y + 0.5 * dt * k2ry, z + 0.5 * dt * k2rz],
    massesData,
    t
  );

  const k4rx = vt[0] + dt * k3vx;
  const k4ry = vt[1] + dt * k3vy;
  const k4rz = vt[2] + dt * k3vz;

  const [k4vx, k4vy, k4vz] = orbitF(
    [x + dt * k3rx, y + dt * k3ry, z + dt * k3rz],
    massesData,
    t
  );

  const px_new = pt[0] + dt * (1 / 6) * (k1rx + 2 * k2rx + 2 * k3rx + k4rx);
  const py_new = pt[1] + dt * (1 / 6) * (k1ry + 2 * k2ry + 2 * k3ry + k4ry);
  const pz_new = pt[2] + dt * (1 / 6) * (k1rz + 2 * k2rz + 2 * k3rz + k4rz);

  const vx_new = vt[0] + dt * (1 / 6) * (k1vx + 2 * k2vx + 2 * k3vx + k4vx);
  const vy_new = vt[1] + dt * (1 / 6) * (k1vy + 2 * k2vy + 2 * k3vy + k4vy);
  const vz_new = vt[2] + dt * (1 / 6) * (k1vz + 2 * k2vz + 2 * k3vz + k4vz);

  return [px_new, py_new, pz_new, vx_new, vy_new, vz_new];
};
