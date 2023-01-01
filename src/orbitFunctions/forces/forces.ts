export const gravitationalA = (
  p: number[],
  pOther: number[],
  mOther: number
): number[] => {
  const dx = pOther[0] - p[0];
  const dy = pOther[1] - p[1];
  const dz = pOther[2] - p[2];

  if (dx == 0 && dy == 0 && dz == 0) return [0, 0, 0];

  const rMag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const rx_hat = dx / rMag;
  const ry_hat = dy / rMag;
  const rz_hat = dz / rMag;

  const G = 6.6732 * Math.pow(10, -11);

  const aMag = (G * mOther) / (rMag * rMag);

  const ax = rx_hat * aMag;
  const ay = ry_hat * aMag;
  const az = rz_hat * aMag;

  return [ax, ay, az];
};

export const solarRadiationA = (
  satToSunNormalized: number[],
  areaExposedToSun: number,
  mass: number,
  reflectivity: number
): number[] => {
  //formula from Vallado p581

  const SF = 1367; //W/m^2

  const c = 299792458; //m/s

  const p_srp = SF / c;

  const ax =
    -((p_srp * reflectivity * areaExposedToSun) / mass) * satToSunNormalized[0];
  const ay =
    -((p_srp * reflectivity * areaExposedToSun) / mass) * satToSunNormalized[1];
  const az =
    -((p_srp * reflectivity * areaExposedToSun) / mass) * satToSunNormalized[2];

  return [ax, ay, az];
};
