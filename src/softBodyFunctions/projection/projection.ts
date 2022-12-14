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

export const distanceBetweenTwoParallelPlanes = (
  p0: number[],
  p1: number[],
  n: number[]
): number => {
  //p0 is the point on the plane with normal n
  //p1 is the point on the other plane
  //n is the normal vector is the plane, assuming n is normalized

  //find the vector from p0 to p1
  const px = p0[0] - p1[0];
  const py = p0[1] - p1[1];
  const pz = p0[2] - p1[2];

  //project p onto n, simplifies because n is normalized

  //p dot n
  const pn = dot(px, py, pz, n[0], n[1], n[2]);
  const proj_v_nx = pn * n[0];
  const proj_v_ny = pn * n[1];
  const proj_v_nz = pn * n[2];

  //for distance get the mag of the projected vector
  const d = Math.sqrt(
    proj_v_nx * proj_v_nx + proj_v_ny * proj_v_ny + proj_v_nx * proj_v_nz
  );

  return d;
};
