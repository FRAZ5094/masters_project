import * as THREE from "three";
import { getSpringIndicesArray } from "./softBodyFunctions/springArray/springArray";
import {
  getOrbitPos,
  sunOrbitalElements,
} from "./orbitFunctions/kepler/kepler";
import { round } from "./softBodyFunctions/misc/misc";
import { SoftBodyParams } from "./softBodySim";
import { getTrianglesAttachedToVertexArray } from "./softBodyFunctions/vertexNormals/vertexNormals";
import {
  IntegratorFunction,
  orbitRK4,
  orbitSemiImplicitEuler,
} from "./orbitFunctions/integrators";
import { OrbitParams } from "./orbitMain";
import humaniseDuration from "humanize-duration";

interface runOrbitSimReturn {
  satOrbitData: number[];
  satOrbitDataFields: string[];
}

export const runOrbitSim = (
  satP: number[],
  satV: number[],
  softBodyParams: SoftBodyParams,
  orbitParams: OrbitParams,
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

  const dt = softBodyParams.dt;

  let t = dt; //t starts at dt, and dt is added to t every step in the simulation, this is because dt varies
  let iTimestep = 1;

  let orbitIntegrator: IntegratorFunction;

  if (orbitParams.integrator == "euler") {
    orbitIntegrator = orbitSemiImplicitEuler;
  } else if (orbitParams.integrator == "rk4") {
    orbitIntegrator = orbitRK4;
  } else {
    orbitIntegrator = orbitSemiImplicitEuler;
  }

  console.log("ORBIT PARAMETERS:");
  console.log(JSON.stringify(orbitParams, null, 4));
  console.log("SOFT BODY PARAMETERS:");
  console.log(JSON.stringify(softBodyParams, null, 4));

  const ptSat: number[] = [satP[0], satP[1], satP[2]];
  const vtSat: number[] = [satV[0], satV[1], satV[2]];

  const geometry = new THREE.PlaneGeometry(
    softBodyParams.d,
    softBodyParams.d,
    softBodyParams.nCols - 1,
    softBodyParams.nCols - 1
  );

  let bodyPt = geometry.attributes.position.array as Float32Array;
  let bodyVt = new Float32Array(bodyPt.length);

  const springArrays = getSpringIndicesArray(
    bodyPt,
    softBodyParams.nCols,
    softBodyParams.nCols,
    1,
    1
  );
  const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

  const trianglesAttachedToVertexArray = getTrianglesAttachedToVertexArray(
    triangleIndicesArray,
    softBodyParams.nCols,
    softBodyParams.nCols
  );

  let lastTimePrint = performance.now();
  const simLoopStartTime = performance.now();

  const oneDayInSeconds = 86400;
  const oneYearInSeconds = oneDayInSeconds * 365;

  const simulationTime =
    orbitParams.simulationYears * oneYearInSeconds +
    orbitParams.simulationDays * oneDayInSeconds;

  while (t < simulationTime) {
    if (performance.now() - lastTimePrint >= 10 * 1000) {
      lastTimePrint = performance.now();
      const fractionThroughSim = t / simulationTime;
      console.log(round(fractionThroughSim * 100, 0) + "%");
      const timeElapsed = performance.now() - simLoopStartTime;

      const estimatedTotalSimTime = timeElapsed / fractionThroughSim;

      const estimatedRemainingTime = estimatedTotalSimTime - timeElapsed;

      let date = new Date(Date.now());

      console.log(
        `Timestamp : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );

      console.log("Time elapsed: " + humaniseDuration(timeElapsed));
      console.log(
        "Estimated time remaining: " + humaniseDuration(estimatedRemainingTime)
      );
    }

    const massesData: number[] = [];

    const earthM = 5.972 * Math.pow(10, 24);
    //earth
    massesData.push(0);
    massesData.push(0);
    massesData.push(0);
    massesData.push(earthM);

    const sunPos = getOrbitPos(t, sunOrbitalElements);

    const integratorReturn = orbitIntegrator(
      ptSat,
      vtSat,
      bodyPt,
      bodyVt,
      softBodyParams,
      orbitParams,
      springArrays,
      trianglesAttachedToVertexArray,
      triangleIndicesArray,
      massesData,
      t,
      dt
    );

    if (
      Number.isNaN(integratorReturn.bodyPNew[0]) ||
      Number.isNaN(integratorReturn.bodyPNew[1]) ||
      Number.isNaN(integratorReturn.bodyPNew[2])
    ) {
      console.log("UNSTABLE!");
      break;
    }

    //update the state of the soft body

    bodyPt = integratorReturn.bodyPNew;
    bodyVt = integratorReturn.bodyVNew;

    const prevSatOrbitDataLength = satOrbitData.length;

    //only save the values to the array every saveInterval number of time steps
    if (iTimestep % saveInterval == 0) {
      satOrbitData.push(integratorReturn.pNew[0]);
      satOrbitData.push(integratorReturn.pNew[1]);
      satOrbitData.push(integratorReturn.pNew[2]);

      satOrbitData.push(integratorReturn.vNew[0]);
      satOrbitData.push(integratorReturn.vNew[1]);
      satOrbitData.push(integratorReturn.vNew[2]);

      satOrbitData.push(t);

      satOrbitData.push(sunPos[0]);
      satOrbitData.push(sunPos[1]);
      satOrbitData.push(sunPos[2]);

      const newSatOrbitDataLength = satOrbitData.length;

      if (newSatOrbitDataLength - prevSatOrbitDataLength != nFields) {
        throw Error("Not pushing the correct amount of fields each time step");
      }
    }

    ptSat[0] = integratorReturn.pNew[0];
    ptSat[1] = integratorReturn.pNew[1];
    ptSat[2] = integratorReturn.pNew[2];

    vtSat[0] = integratorReturn.vNew[0];
    vtSat[1] = integratorReturn.vNew[1];
    vtSat[2] = integratorReturn.vNew[2];

    t += dt;
    iTimestep += 1;
  }

  console.log(
    "Simulation took " +
      ((performance.now() - simLoopStartTime) / 1000).toString() +
      " s"
  );

  console.log("ORBIT PARAMETERS:");
  console.log(JSON.stringify(orbitParams, null, 4));
  console.log("SOFT BODY PARAMETERS:");
  console.log(JSON.stringify(softBodyParams, null, 4));

  return { satOrbitData, satOrbitDataFields };
};
