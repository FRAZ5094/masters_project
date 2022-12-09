import { dot } from "../vector/vector";

export const projectPointOnToPlane = (
  p: number[],
  n: number[],
  s: number[]
): number[] => {
  // p is the point that is being projected on to the plane
  // n is the normal vector of the plane (normalized)
  // s is a point on the plane

  const vX = p[0] - s[0];
  const vY = p[1] - s[1];
  const vZ = p[2] - s[2];

  const vn = dot(vX, vY, vZ, n[0], n[1], n[2]);

  const projX = p[0] - vn * n[0];
  const projY = p[1] - vn * n[1];
  const projZ = p[2] - vn * n[2];

  return [projX, projY, projZ];
};

export const vertexIsInLight = (
  p: number[],
  lightCentre: number[],
  lightR: number,
  lightDir: number[]
): boolean => {
  const [projX, projY, projZ] = projectPointOnToPlane(p, lightDir, lightCentre);

  const dx = projX - lightCentre[0];
  const dy = projY - lightCentre[1];
  const dz = projZ - lightCentre[2];

  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  return dist <= lightR;
};
