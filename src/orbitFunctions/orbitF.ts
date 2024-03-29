import { gravitationalA, solarRadiationAMag } from "./forces/forces";
import { getOrbitPos, sunOrbitalElements } from "./kepler/kepler";
import {
  isSatelliteInCylindricalUmbra,
  shadowFunction,
} from "./shadowFunction/shadowFunction";
import { SoftBodyParams, simulate } from "../softBodySim";
import { OrbitParams } from "../orbitMain";

export interface orbitFReturn {
  a: number[];
  bodyPt: Float32Array;
  bodyVt: Float32Array;
}

export const orbitF = (
  pt: number[],
  massesData: number[],
  softBodyParams: SoftBodyParams,
  orbitParams: OrbitParams,
  bodyPt: Float32Array,
  bodyVt: Float32Array,
  springArrays: number[][][],
  trianglesAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array,
  t: number
): orbitFReturn => {
  const a = [0, 0, 0];

  //gravitational forces
  if (orbitParams.applyGravity) {
    const nMasses = massesData.length / 4;
    for (let i = 0; i < nMasses; i++) {
      const stride = i * 4;

      const ptOther = [
        massesData[stride + 0],
        massesData[stride + 1],
        massesData[stride + 2],
      ];
      const mOther = massesData[stride + 3];

      const aGravity = gravitationalA(pt, ptOther, mOther);

      a[0] += aGravity[0];
      a[1] += aGravity[1];
      a[2] += aGravity[2];
    }
  }

  const earthR = 6371 * 1000;
  const sunR = 696340 * 1000;

  const sunPos = getOrbitPos(t, sunOrbitalElements);

  if (orbitParams.applySRP) {
    const dx = pt[0] - sunPos[0];
    const dy = pt[1] - sunPos[1];
    const dz = pt[2] - sunPos[2];

    const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const lightDir = [dx / mag, dy / mag, dz / mag];

    //apply shadow function here
    const v = shadowFunction(pt, sunPos, sunR, earthR);
    const aMag = v * solarRadiationAMag(softBodyParams);

    let aSrp = [lightDir[0] * aMag, lightDir[1] * aMag, lightDir[2] * aMag];

    if (orbitParams.useSoftBody) {
      //transform light dir from orbit reference frame to soft body reference frame
      const lightDirTransformed = [lightDir[1], lightDir[2], lightDir[0]];
      const simReturn = simulate(
        softBodyParams,
        bodyPt,
        bodyVt,
        aMag,
        lightDirTransformed,
        springArrays,
        trianglesAttachedToVertexArray,
        triangleIndicesArray
      );

      bodyPt = simReturn.p_new;
      bodyVt = simReturn.v_new;

      //transform the values back to the orbit reference frame
      aSrp = [simReturn.a[2], simReturn.a[0], simReturn.a[1]];
    }

    a[0] += aSrp[0];
    a[1] += aSrp[1];
    a[2] += aSrp[2];
  }

  return { a, bodyPt, bodyVt };
};
