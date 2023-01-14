import { dot } from "../../softBodyFunctions/vector/vector";

export const isSatelliteInCylindricalUmbra = (
  lightPos: number[],
  shadowingSpherePos: number[],
  shadowingSphereR: number,
  satellitePos: number[]
): boolean => {
  //vector from the shadowing sphere to the light source pos
  const rLightX = lightPos[0] - shadowingSpherePos[0];
  const rLightY = lightPos[1] - shadowingSpherePos[1];
  const rLightZ = lightPos[2] - shadowingSpherePos[2];

  //vector from the shadowing sphere to the satellite pos
  const rSatelliteX = satellitePos[0] - shadowingSpherePos[0];
  const rSatelliteY = satellitePos[1] - shadowingSpherePos[1];
  const rSatelliteZ = satellitePos[2] - shadowingSpherePos[2];

  const rSatelliteMagSquared = Math.abs(
    rSatelliteX * rSatelliteX +
      rSatelliteY * rSatelliteY +
      rSatelliteZ * rSatelliteZ
  );

  const rLightMag = Math.sqrt(
    rLightX * rLightX + rLightY * rLightY + rLightZ * rLightZ
  );

  const rSatelliteX_rLight = dot(
    rSatelliteX,
    rSatelliteY,
    rSatelliteZ,
    rLightX,
    rLightY,
    rLightZ
  );

  const val =
    rSatelliteX_rLight / rLightMag +
    Math.sqrt(rSatelliteMagSquared - shadowingSphereR * shadowingSphereR);

  return val <= 0;
};

export const shadowFunction = (
  r: number[],
  sunPos: number[],
  sunR: number,
  earthR: number
): number => {
  const dx = sunPos[0] - r[0];
  const dy = sunPos[1] - r[1];
  const dz = sunPos[2] - r[2];

  const dMag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const s = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);

  const a = Math.asin(sunR / dMag);

  const b = Math.asin(earthR / s);

  const s_d = dot(-r[0], -r[1], -r[2], dx, dy, dz);

  const c = Math.acos(s_d / (s * dMag));

  const x = (c ** 2 + a ** 2 - b ** 2) / (2 * c);

  if (x >= a) {
    return 1;
  }

  const y = Math.sqrt(a ** 2 - x ** 2);

  if (x / a > 1 || x / a < -1) {
    return 0;
  }

  const A = a ** 2 * Math.acos(x / a) + b ** 2 * Math.acos((c - x) / b) - c * y;

  return 1 - A / (Math.PI * a ** 2);
};
