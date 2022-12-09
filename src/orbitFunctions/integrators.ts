export const orbitEuler = (p: number[], v: number[], dt: number): number[] => {
  const a = orbitF();

  v[0] += a[0] * dt;
  v[1] += a[1] * dt;
  v[2] += a[2] * dt;

  p[0] += v[0] * dt;
  p[1] += v[1] * dt;
  p[2] += v[2] * dt;

  return [p[0], p[1], p[2], v[0], v[1], v[2]];
};

export const orbitF = () => {
  return [-9.81, 0, 0];
};
