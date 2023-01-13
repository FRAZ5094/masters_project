import { gravitationalA, solarRadiationAMag } from "./forces/forces";
import { getOrbitPos, sunOrbitalElements } from "./kepler/kepler";
import { isSatelliteInCylindricalUmbra } from "./shadowFunction/shadowFunction";
import { SoftBodyParams, simulate } from "../softBodySim";

export interface orbitFReturn {
  a: number[];
  bodyPt: Float32Array;
  bodyVt: Float32Array;
}

export const orbitF = (
  pt: number[],
  massesData: number[],
  softBodyParams: SoftBodyParams,
  bodyPt: Float32Array,
  bodyVt: Float32Array,
  springArrays: number[][][],
  trianglesAttachedToVertexArray: number[][],
  triangleIndicesArray: Uint16Array,
  t: number
): orbitFReturn => {
  let applyGravity = true;
  let applySRP = true;
  let applyShadow = true;
  let useSoftBody = false;

  const a = [0, 0, 0];

  //gravitational forces
  if (applyGravity) {
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

  const sunPos = getOrbitPos(t, sunOrbitalElements);

  if (applyShadow) {
    applySRP = !isSatelliteInCylindricalUmbra(sunPos, [0, 0, 0], earthR, pt);
  }

  if (applySRP) {
    const dx = pt[0] - sunPos[0];
    const dy = pt[1] - sunPos[1];
    const dz = pt[2] - sunPos[2];

    const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const lightDir = [dx / mag, dy / mag, dz / mag];

    // console.log("lightDir: ", lightDir);

    const aMag = solarRadiationAMag(softBodyParams);

    let aSrp = [lightDir[0] * aMag, lightDir[1] * aMag, lightDir[2] * aMag];

    if (useSoftBody) {
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

      // console.log(simReturn.a);
      aSrp = [simReturn.a[2], simReturn.a[0], simReturn.a[1]];

      // const aSrpMag = Math.sqrt(
      //   aSrp[0] * aSrp[0] + aSrp[1] * aSrp[1] + aSrp[2] * aSrp[2]
      // );
      // const srpNormalized = [
      //   aSrp[0] / aSrpMag,
      //   aSrp[1] / aSrpMag,
      //   aSrp[2] / aSrpMag,
      // ];

      // console.log("SRP normalised: ", srpNormalized);
    }

    a[0] += aSrp[0];
    a[1] += aSrp[1];
    a[2] += aSrp[2];
  }

  return { a, bodyPt, bodyVt };
};
