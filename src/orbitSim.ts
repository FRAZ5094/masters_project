import { orbitEuler } from "./orbitFunctions/integrators";
import { euler } from "./softBodySim";

export const runOrbitSim = (
  nTimesteps: number,
  dt: number,
  satelliteInitialPos: number[],
  satelliteInitialV: number[]
): Float32Array => {
  const p = new Float32Array(nTimesteps * 3);

  p[0] = satelliteInitialPos[0];
  p[1] = satelliteInitialPos[1];
  p[2] = satelliteInitialPos[2];

  let vx = satelliteInitialV[0];
  let vy = satelliteInitialV[1];
  let vz = satelliteInitialV[2];

  for (let t = 1; t < nTimesteps; t++) {
    const stride = t * 3;

    const pt = [p[stride + 0], p[stride + 1], p[stride + 2]];

    let px_new: number, py_new: number, pz_new: number;

    [px_new, py_new, pz_new, vx, vy, vz] = orbitEuler(pt, [vx, vy, vz], dt);

    p[stride + 0] = px_new;
    p[stride + 1] = py_new;
    p[stride + 2] = pz_new;
  }

  return p;
};
