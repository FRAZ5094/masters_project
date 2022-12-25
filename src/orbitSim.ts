import { orbitEuler } from "./orbitFunctions/integrators";
import { mass } from "./orbitMain";
import { round } from "./softBodyFunctions/misc/misc";

interface runOrbitSimReturn {
  satOrbitData: number[];
  massesData: number[];
  nSatDataPieces: number;
}

export const runOrbitSim = (
  satP: number[],
  satV: number[],
  simulationTime: number,
  dt: number,
  dtShadow: number,
  massObjects: mass[]
): runOrbitSimReturn => {
  //contains the pos and velocity of the satellite and filled with the intial pos and velocity
  //note satellite mass is not stored, so it wont have a gravitational pull on other objects (reasonable assumption because the mass is very small)
  const satOrbitData = [satP[0], satP[1], satP[2], satV[0], satV[1], satV[2]];

  const nSatDataPieces = satOrbitData.length; //find's number of pieces of data stored for the satellite

  const massesData: number[] = [];

  const nMasses = massObjects.length;

  for (let i = 0; i < nMasses; i++) {
    massesData.push(massObjects[i].x);
    massesData.push(massObjects[i].y);
    massesData.push(massObjects[i].z);
    massesData.push(massObjects[i].vx);
    massesData.push(massObjects[i].vy);
    massesData.push(massObjects[i].vz);
    massesData.push(massObjects[i].m);
  }

  let t = 0; //t starts at 1, and dt is added to t every step in the simulation, this is because dt varies

  let iTimestep = 1;

  while (t < simulationTime) {
    if (t % (simulationTime / 100) == 0) {
      console.log(t / simulationTime);

      // const timeElapsed = performance.now() - simLoopStartTime;

      // const estimatedTotalSimTime: number =
      //   ((performance.now() - simLoopStartTime) / t) * nTimestep;
      // console.log(
      //   "Simulation progress: " +
      //     round((t / nTimestep) * 100, 0) +
      //     "% " +
      //     round((estimatedTotalSimTime - timeElapsed) / 1000, 1) +
      //     " seconds left"
      // );
    }

    //find the new pos and velocity of the satellite using the other masses
    //picked out of the sateliteOrbitData

    const massesDatat = massesData.slice(-(7 * nMasses));

    // const satellitePrevStride = (iTimestep - 1) * nSatDataPieces;

    const ptSat = satOrbitData.slice(-nSatDataPieces, -(nSatDataPieces - 3));
    const vtSat = satOrbitData.slice(-(nSatDataPieces - 3));

    const [satNewPtX, satNewPtY, satNewPtZ, satNewVX, satNewVY, satNewVZ] =
      orbitEuler(ptSat, vtSat, massesDatat, dt, dtShadow);

    satOrbitData.push(satNewPtX);
    satOrbitData.push(satNewPtY);
    satOrbitData.push(satNewPtZ);

    satOrbitData.push(satNewVX);
    satOrbitData.push(satNewVY);
    satOrbitData.push(satNewVZ);

    //find the new pos and velocity of the other masses
    //taken from the otherMasses

    for (let i = 0; i < nMasses; i++) {
      const stride = i * 7;

      const pt = [
        massesDatat[stride + 0],
        massesDatat[stride + 1],
        massesDatat[stride + 2],
      ];
      t;
      const vt = [
        massesDatat[stride + 3],
        massesDatat[stride + 4],
        massesDatat[stride + 5],
      ];

      const m = massesData[stride + 6];

      let newPtX: number,
        newPtY: number,
        newPtZ: number,
        newVX: number,
        newVY: number,
        newVZ: number,
        integrationReturn: number[];

      if (i == 0) {
        integrationReturn = pt.concat(vt);
      } else {
        integrationReturn = orbitEuler(pt, vt, massesDatat, dt, dtShadow);
      }

      massesData.push(integrationReturn[0]);
      massesData.push(integrationReturn[1]);
      massesData.push(integrationReturn[2]);

      massesData.push(integrationReturn[3]);
      massesData.push(integrationReturn[4]);
      massesData.push(integrationReturn[5]);

      massesData.push(m);
    }
    t += dt;
    iTimestep += 1;
  }

  return { satOrbitData, massesData, nSatDataPieces };
};
