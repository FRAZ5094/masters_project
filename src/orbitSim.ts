import {
  orbitExplicitEuler,
  orbitRK4,
  orbitSemiImplicitEuler,
} from "./orbitFunctions/integrators";
import { mass } from "./orbitMain";
import { round } from "./softBodyFunctions/misc/misc";

interface runOrbitSimReturn {
  satOrbitData: number[];
  massesData: number[];
  satOrbitDataFields: string[];
}

export const runOrbitSim = (
  satP: number[],
  satV: number[],
  simulationTime: number,
  dt: number,
  massObjects: mass[]
): runOrbitSimReturn => {
  //contains the pos and velocity of the satellite and filled with the intial pos and velocity
  //note satellite mass is not stored, so it wont have a gravitational pull on other objects (reasonable assumption because the mass is very small)
  const t0 = 0; //time at the start of the simulation
  const satOrbitData = [
    satP[0],
    satP[1],
    satP[2],
    satV[0],
    satV[1],
    satV[2],
    t0,
  ];

  const satOrbitDataFields: string[] = ["x", "y", "z", "vx", "vy", "vz", "t"];
  const nFields = satOrbitDataFields.length;

  if (nFields != satOrbitData.length) {
    throw Error("satOrbitData names doesn't match saved data!");
  }

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

  let t = dt; //t starts at dt, and dt is added to t every step in the simulation, this is because dt varies
  let iTimestep = 1;

  const integrator = orbitRK4;

  while (t < simulationTime) {
    if (t % (simulationTime / 100) == 0) {
      console.log(round((t / simulationTime) * 100, 0) + "%");

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

    const massesDatat = massesData.slice(-(7 * nMasses));

    const ptSat = satOrbitData.slice(-nSatDataPieces, -(nSatDataPieces - 3));
    const vtSat = satOrbitData.slice(-(nSatDataPieces - 3));

    const [satNewPtX, satNewPtY, satNewPtZ, satNewVX, satNewVY, satNewVZ] =
      integrator(ptSat, vtSat, massesDatat, dt, true);

    const prevSatOrbitDataLength = satOrbitData.length;

    satOrbitData.push(satNewPtX);
    satOrbitData.push(satNewPtY);
    satOrbitData.push(satNewPtZ);

    satOrbitData.push(satNewVX);
    satOrbitData.push(satNewVY);
    satOrbitData.push(satNewVZ);

    satOrbitData.push(t);

    const newSatOrbitDataLength = satOrbitData.length;

    if (newSatOrbitDataLength - prevSatOrbitDataLength != nFields) {
      throw Error("Not pushing the correct amount of fields each time step");
    }

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

      let integrationReturn: number[];

      if (i == 0) {
        integrationReturn = pt.concat(vt);
      } else {
        integrationReturn = integrator(pt, vt, massesDatat, dt, false);
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

  return { satOrbitData, massesData, satOrbitDataFields };
};
