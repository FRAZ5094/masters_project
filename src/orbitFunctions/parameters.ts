interface calculateGeostationaryOrbitVelocityAndRadiusReturn {
  orbitVelocity: number;
  orbitRadius: number;
}

export const calculateGeostationaryOrbitVelocityAndRadius = (
  planetOrbitPeriod: number,
  planetM: number,
  G: number
): calculateGeostationaryOrbitVelocityAndRadiusReturn => {
  const omega = (2 * Math.PI) / planetOrbitPeriod;

  const r = Math.cbrt((G * planetM) / Math.pow(omega, 2));

  const v = omega * r;

  return { orbitRadius: r, orbitVelocity: v };
};
