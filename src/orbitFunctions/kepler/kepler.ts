import { cross, dot } from "../../softBodyFunctions/vector/vector";

export interface rvToKeplerOrbitalElementsReturn {
  a: number;
  e: number;
  i: number;
  Omega: number;
  omega: number;
  trueAnomaly: number;
}
export const rvToKeplerOrbitalElements = (
  r: number[],
  v: number[],
  planetM: number
): rvToKeplerOrbitalElementsReturn => {
  //Equations from Vallado p113-114

  //both r and v need to be relative to the earth,
  //which is easy if the earth is centred at the origin and doesn't move!

  const h = cross(r[0], r[1], r[2], v[0], v[1], v[2]);

  const K = [0, 0, 1];

  const n = cross(K[0], K[1], K[2], h[0], h[1], h[2]);

  const G = 6.6743 * Math.pow(10, -11);

  const mu = planetM * G;

  const vMagSquared = Math.abs(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

  const rMag = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);

  const rv = dot(r[0], r[1], r[2], v[0], v[1], v[2]);

  const rCoefficient = vMagSquared - mu / rMag;

  const eVectorX = (1 / mu) * (rCoefficient * r[0] - rv * v[0]);
  const eVectorY = (1 / mu) * (rCoefficient * r[1] - rv * v[1]);
  const eVectorZ = (1 / mu) * (rCoefficient * r[2] - rv * v[2]);

  const e = Math.sqrt(
    eVectorX * eVectorX + eVectorY * eVectorY + eVectorZ * eVectorZ
  );

  const xi = vMagSquared / 2 - mu / rMag;

  let a: number, p: number;

  const hMag = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);
  if (e != 1) {
    a = -mu / (2 * xi);
    p = a * (1 - e * e);
  } else {
    p = (hMag * hMag) / mu;
    a = Infinity;
  }

  const rad2Deg = 180 / Math.PI;

  const i = Math.acos(h[2] / hMag) * rad2Deg;

  const nMag = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);

  let Omega = Math.acos(n[0] / nMag) * rad2Deg;

  if (n[1] < 0) {
    Omega = 360 - Omega;
  }

  const ne = dot(n[0], n[1], n[2], eVectorX, eVectorY, eVectorZ);

  let omega = Math.acos(ne / (nMag * e)) * rad2Deg;

  if (eVectorZ < 0) {
    omega = 360 - omega;
  }

  const er = dot(eVectorX, eVectorY, eVectorZ, r[0], r[1], r[2]);

  let trueAnomaly = Math.acos(er / (e * rMag)) * rad2Deg;

  if (rv < 0) {
    trueAnomaly = 360 - trueAnomaly;
  }

  return { e, a, i, Omega, omega, trueAnomaly };
};

export interface keplerOrbitalElementsToRVReturn {
  r: number[];
  vel: number[];
}

export const keplerOrbitalElementsToRV = (
  a: number,
  e: number,
  i: number,
  Omega: number,
  omega: number,
  v: number,
  planetM: number
): keplerOrbitalElementsToRVReturn => {
  // Vallado p114
  const p = a * (1 - Math.pow(e, 2));

  //Vallado p116

  const cosV = Math.cos(v);
  const sinV = Math.sin(v);

  const rP = (p * cosV) / (1 + e * cosV);
  const rQ = (p * sinV) / (1 + e * cosV);
  const rW = 0;

  const GravConstant = 6.6743 * Math.pow(10, -11);

  const mu = planetM * GravConstant;

  const vP = -Math.sqrt(mu / p) * sinV;
  const vQ = Math.sqrt(mu / p) * (e + cosV);
  const vW = 0;

  //transform into IJK coords

  const sinOmega = Math.sin(Omega);
  const cosOmega = Math.cos(Omega);

  const sinomega = Math.sin(omega);
  const cosomega = Math.cos(omega);

  const sinI = Math.sin(i);
  const cosI = Math.cos(i);

  const A = cosOmega * cosomega - sinOmega * sinomega * cosI;
  const B = -cosOmega * sinomega - sinOmega * cosomega * cosI;
  const C = sinOmega * sinI;

  const D = sinOmega * cosomega + cosOmega * sinomega * cosI;
  const E = -sinOmega * sinomega + cosOmega * cosomega * cosI;
  const F = -cosOmega * sinI;

  const G = sinomega * sinI;
  const H = cosomega * sinI;
  const I = cosI;

  const rI = A * rP + B * rQ + C * rW;
  const vI = A * vP + B * vQ + C * vW;

  const rJ = D * rP + E * rQ + F * rW;
  const vJ = D * vP + E * vQ + F * vW;

  const rK = G * rP + H * rQ + I * rW;
  const vK = G * vP + H * vQ + I * vW;

  const r: number[] = [rI, rJ, rK];
  const vel: number[] = [vI, vJ, vK];

  return { r, vel };
};
