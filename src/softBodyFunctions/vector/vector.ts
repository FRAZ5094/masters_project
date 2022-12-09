export const cross = (
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number[] => {
  const x = y1 * z2 - z1 * y2;
  const y = -1 * (x1 * z2 - z1 * x2);
  const z = x1 * y2 - y1 * x2;

  return [x, y, z];
};

export const dot = (
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number => {
  const ans = x1 * x2 + y1 * y2 + z1 * z2;

  return ans;
};
