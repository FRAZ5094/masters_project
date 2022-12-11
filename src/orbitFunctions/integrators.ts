import { gravitationalA } from "./forces/forces";

export const orbitEuler = (
  pt: number[],
  vt: number[],
  ptOthers: Float32Array,
  massArray: Float32Array,
  dt: number
): number[] => {
  const a = orbitF(pt, ptOthers, massArray);

  vt[0] += a[0] * dt;
  vt[1] += a[1] * dt;
  vt[2] += a[2] * dt;

  pt[0] += vt[0] * dt;
  pt[1] += vt[1] * dt;
  pt[2] += vt[2] * dt;

  return [pt[0], pt[1], pt[2], vt[0], vt[1], vt[2]];
};

export const orbitF = (
  pt: number[],
  ptOthers: Float32Array,
  massArray: Float32Array
): number[] => {
  const a = [0, 0, 0];

  const nMasses = ptOthers.length / 3;

  for (let i = 0; i < nMasses; i++) {
    const stride = i * 3;

    const ptOther = [
      ptOthers[stride + 0],
      ptOthers[stride + 1],
      ptOthers[stride + 2],
    ];
    const mOther = massArray[i];

    const aGrav = gravitationalA(pt, ptOther, mOther);

    a[0] += aGrav[0];
    a[1] += aGrav[1];
    a[2] += aGrav[2];
  }

  return a;
};
