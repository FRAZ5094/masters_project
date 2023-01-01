import { gravitationalA, solarRadiationA } from "./forces/forces";
import { isSatelliteInCylindricalUmbra } from "./shadowFunction/shadowFunction";

export const orbitF = (
  pt: number[],
  massesData: number[],
  isSat: boolean
): number[] => {
  let applyGravity = false;
  let applySRP = true;
  let applyShadow = true;

  const a = [0, 0, 0];

  //gravitational forces
  if (applyGravity) {
    const nMasses = massesData.length / 7;
    for (let i = 0; i < nMasses; i++) {
      const stride = i * 7;

      const ptOther = [
        massesData[stride + 0],
        massesData[stride + 1],
        massesData[stride + 2],
      ];
      const mOther = massesData[stride + 6];

      const aGravity = gravitationalA(pt, ptOther, mOther);

      a[0] += aGravity[0];
      a[1] += aGravity[1];
      a[2] += aGravity[2];
    }
  }
  const sunPos = [147.13 * Math.pow(10, 9), 0, 0];
  const earthR = 6371 * 1000;

  if (applyShadow) {
    applySRP = !isSatelliteInCylindricalUmbra(sunPos, [0, 0, 0], earthR, pt);
  }

  if (applySRP && isSat) {
    const dx = sunPos[0] - pt[0];
    const dy = sunPos[1] - pt[1];
    const dz = sunPos[2] - pt[2];

    const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const satToSunNormalized = [dx / mag, dy / mag, dz / mag];

    const areaExposedToSun = 1;
    const mass = 1.2; //using 1.2kg/m^2
    const reflectivity = 0.993;

    const aSrp = solarRadiationA(
      satToSunNormalized,
      areaExposedToSun,
      mass,
      reflectivity
    );

    a[0] += aSrp[0];
    a[1] += aSrp[1];
    a[2] += aSrp[2];
  }

  return a;
};
