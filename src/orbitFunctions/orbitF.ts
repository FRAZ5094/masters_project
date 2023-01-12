import { gravitationalA, solarRadiationA } from "./forces/forces";
import { getOrbitPos, sunOrbitalElements } from "./kepler/kepler";
import { isSatelliteInCylindricalUmbra } from "./shadowFunction/shadowFunction";

export const orbitF = (
  pt: number[],
  massesData: number[],
  t: number
): number[] => {
  let applyGravity = true;
  let applySRP = false;
  let applyShadow = false;

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
    const dx = sunPos[0] - pt[0];
    const dy = sunPos[1] - pt[1];
    const dz = sunPos[2] - pt[2];

    const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const satToSunNormalized = [dx / mag, dy / mag, dz / mag];

    const AM_ratio = 5;

    const area = 1; //m^2
    const mass = area / AM_ratio;
    const reflectivity = 0.993;

    const aSrp = solarRadiationA(satToSunNormalized, area, mass, reflectivity);

    a[0] += aSrp[0];
    a[1] += aSrp[1];
    a[2] += aSrp[2];
  }

  return a;
};
