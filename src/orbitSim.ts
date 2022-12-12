import { orbitEuler } from "./orbitFunctions/integrators";
import { mass } from "./orbitMain";
import { round } from "./softBodyFunctions/misc/misc";

export const runOrbitSim = (
  nTimestep: number,
  dt: number,
  masses: mass[]
): Float32Array => {
  const nMasses = masses.length;

  //contains the positions of all the masses in the simulation
  const p = new Float32Array(nMasses * 3 * nTimestep);
  //contains the velocity of all the masses for this timestep
  const v = new Float32Array(nMasses * 3);

  //contains all the masses of the objects in the simulation
  const massArray = new Float32Array(nMasses);

  for (let i = 0; i < nMasses; i++) {
    const stride = i * 3;

    p[stride + 0] = masses[i].x;
    p[stride + 1] = masses[i].y;
    p[stride + 2] = masses[i].z;

    v[stride + 0] = masses[i].vx;
    v[stride + 1] = masses[i].vy;
    v[stride + 2] = masses[i].vz;

    massArray[i] = masses[i].m;
  }

  const simLoopStartTime = performance.now();

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
    const ptOthers = p.slice((t - 1) * nMasses * 3, t * nMasses * 3);
    for (let i = 0; i < nMasses; i++) {
      const stride = i * 3 + t * nMasses * 3;
      const prevStride = stride - nMasses * 3;
      const vStride = i * 3;

      const pt = [p[prevStride + 0], p[prevStride + 1], p[prevStride + 2]];

      const vt = [v[vStride + 0], v[vStride + 1], v[vStride + 2]];

      if (t == 1) console.log(ptOthers);

      const [px_new, py_new, pz_new, vx_new, vy_new, vz_new] = orbitEuler(
        pt,
        vt,
        ptOthers,
        massArray,
        dt
      );

      p[stride + 0] = px_new;
      p[stride + 1] = py_new;
      p[stride + 2] = pz_new;

      v[vStride + 0] = vx_new;
      v[vStride + 1] = vy_new;
      v[vStride + 2] = vz_new;
    }
  }

  return p;
};
