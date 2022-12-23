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

  return (
    rSatelliteX_rLight / rLightMag +
      Math.sqrt(rSatelliteMagSquared - shadowingSphereR * shadowingSphereR) <=
    0
  );
};
