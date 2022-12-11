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
