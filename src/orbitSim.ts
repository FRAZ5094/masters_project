import {
  orbitExplicitEuler,
  orbitRK4,
  orbitSemiImplicitEuler,
} from "./orbitFunctions/integrators";
import {
  getOrbitPos,
  sunOrbitalElements,
} from "./orbitFunctions/kepler/kepler";
import { mass } from "./orbitMain";
import { round } from "./softBodyFunctions/misc/misc";
import { rk4 } from "./softBodySim";

interface runOrbitSimReturn {
  satOrbitData: number[];
  satOrbitDataFields: string[];
}

export interface IntegratorFunction {
  (
    ptSat: number[],
    vtSat: number[],
    massesData: number[],
    t: number,
    dt: number
  ): number[];
}

export const runOrbitSim = (
  satP: number[],
  satV: number[],
  simulationTime: number,
  dt: number,
  integrator: IntegratorFunction,
  massObjects: mass[],
  saveInterval: number
): runOrbitSimReturn => {
  //contains the pos and velocity of the satellite and filled with the intial pos and velocity
  //note satellite mass is not stored, so it wont have a gravitational pull on other objects (reasonable assumption because the mass is very small)
  const t0 = 0; //time at the start of the simulation

  const sunPos = getOrbitPos(t0, sunOrbitalElements);

  const satOrbitData = [
    satP[0],
    satP[1],
    satP[2],
    satV[0],
    satV[1],
    satV[2],
    t0,
    sunPos[0],
    sunPos[1],
    sunPos[2],
  ];

  const satOrbitDataFields: string[] = [
    "x",
    "y",
    "z",
    "vx",
    "vy",
    "vz",
    "t",
    "sunPosX",
    "sunPosY",
    "sunPosZ",
  ];
  const nFields = satOrbitDataFields.length;

  if (nFields != satOrbitData.length) {
    throw Error("satOrbitData names doesn't match saved data!");
  }

  let t = dt; //t starts at dt, and dt is added to t every step in the simulation, this is because dt varies
  let iTimestep = 1;

  // const integrator = orbitRK4;

  const ptSat: number[] = [satP[0], satP[1], satP[2]];
  const vtSat: number[] = [satV[0], satV[1], satV[2]];

  while (t < simulationTime) {
    if (t % (simulationTime / 100) == 0) {
      console.log(round((t / simulationTime) * 100, 0) + "%");
    }

    const massesData: number[] = [];

    const earthM = 5.972 * Math.pow(10, 24);
    //earth
    massesData.push(0);
    massesData.push(0);
    massesData.push(0);
    massesData.push(earthM);

    const sunPos = getOrbitPos(t, sunOrbitalElements);

    const [satNewPtX, satNewPtY, satNewPtZ, satNewVX, satNewVY, satNewVZ] =
      integrator(ptSat, vtSat, massesData, t, dt);

    const prevSatOrbitDataLength = satOrbitData.length;

    //only save the values to the array every saveInterval number of time steps
    if (iTimestep % saveInterval == 0) {
      satOrbitData.push(satNewPtX);
      satOrbitData.push(satNewPtY);
      satOrbitData.push(satNewPtZ);

      satOrbitData.push(satNewVX);
      satOrbitData.push(satNewVY);
      satOrbitData.push(satNewVZ);

      satOrbitData.push(t);

      satOrbitData.push(sunPos[0]);
      satOrbitData.push(sunPos[1]);
      satOrbitData.push(sunPos[2]);

      const newSatOrbitDataLength = satOrbitData.length;

      if (newSatOrbitDataLength - prevSatOrbitDataLength != nFields) {
        throw Error("Not pushing the correct amount of fields each time step");
      }
    }

    ptSat[0] = satNewPtX;
    ptSat[1] = satNewPtY;
    ptSat[2] = satNewPtZ;

    vtSat[0] = satNewVX;
    vtSat[1] = satNewVY;
    vtSat[2] = satNewVZ;

    t += dt;
    iTimestep += 1;
  }

  return { satOrbitData, satOrbitDataFields };
};
