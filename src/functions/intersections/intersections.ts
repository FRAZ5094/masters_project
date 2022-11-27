import { dot } from "../vector/vector";

export const rayTriangleIntersection = (
  p0: number[],
  p1: number[],
  Ta: number[],
  Tb: number[],
  Tc: number[],
  n: number[]
): boolean => {
  // Copyright 2001, 2012, 2021 Dan Sunday
  // This code may be freely used and modified for any purpose
  // providing that this copyright notice is included with it.
  // There is no warranty for this code, and the author of it cannot
  // be held liable for any real or imagined damage from its use.
  // Users of this code must verify correctness for their application.

  //p0 will be the positions of the light source
  //p1 will be  the position of the vertex
  //Ta will be the a vertex of the

  const rayDirX = p1[0] - p0[0];
  const rayDirY = p1[1] - p0[1];
  const rayDirZ = p1[2] - p0[2];

  const w0x = p0[0] - Ta[0];
  const w0y = p0[1] - Ta[1];
  const w0z = p0[2] - Ta[2];

  const a = -1 * dot(n[0], n[1], n[2], w0x, w0y, w0z);
  const b = dot(n[0], n[1], n[2], rayDirX, rayDirY, rayDirZ);

  const SMALL_NUM = 0.00000001;

  if (Math.abs(b) < SMALL_NUM) {
    // console.log("failed on abs check");
    return false;
  }

  const r = a / b;

  if (r < 0.0) {
    // console.log("failed on r < 0.0");
    return false;
  }

  const Ix = p0[0] + r * rayDirX;
  const Iy = p0[1] + r * rayDirY;
  const Iz = p0[2] + r * rayDirZ;

  // console.log({ Ix, Iy, Iz });

  //correct up to here

  const ux = Tb[0] - Ta[0];
  const uy = Tb[1] - Ta[1];
  const uz = Tb[2] - Ta[2];

  const vx = Tc[0] - Ta[0];
  const vy = Tc[1] - Ta[1];
  const vz = Tc[2] - Ta[2];

  // console.log(cross(ux, uy, uz, vx, vy, vz));

  const uu = dot(ux, uy, uz, ux, uy, uz);
  const uv = dot(ux, uy, uz, vx, vy, vz);
  const vv = dot(vx, vy, vz, vx, vy, vz);

  const wx = Ix - Ta[0];
  const wy = Iy - Ta[1];
  const wz = Iz - Ta[2];

  const wu = dot(wx, wy, wz, ux, uy, uz);
  const wv = dot(wx, wy, wz, vx, vy, vz);

  const denom = uv * uv - uu * vv;

  const s = (uv * wv - vv * wu) / denom;

  if (s < 0 || s > 1) {
    // console.log("failed on s < 0 || s > 1");
    // console.log({ s });
    return false;
  }
  const t = (uv * wu - uu * wv) / denom;

  if (t < 0 || s + t > 1) {
    // console.log("failed on t < 0 || s + t > 1");
    // console.log({ t });
    return false;
  }

  return true;
};

export const isVertexSelfShadowed = (
  vertexIndex: number,
  lightPos: number[],
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): boolean => {
  const nTriangles = triangleIndicesArray.length / 3;

  const p0 = [
    vertexPosArray[vertexIndex * 3 + 0],
    vertexPosArray[vertexIndex * 3 + 1],
    vertexPosArray[vertexIndex * 3 + 2],
  ];

  for (let i = 0; i < nTriangles; i++) {
    const ai = triangleIndicesArray[i * 3 + 0];
    const bi = triangleIndicesArray[i * 3 + 1];
    const ci = triangleIndicesArray[i * 3 + 2];

    // check to make sure not to test triangles that the vertex is part of
    // this is because it will always think it is intersecting with these triangles
    if (vertexIndex == ai || vertexIndex == bi || vertexIndex == ci) continue;

    const a = [
      vertexPosArray[ai * 3 + 0],
      vertexPosArray[ai * 3 + 1],
      vertexPosArray[ai * 3 + 2],
    ];
    const b = [
      vertexPosArray[bi * 3 + 0],
      vertexPosArray[bi * 3 + 1],
      vertexPosArray[bi * 3 + 2],
    ];
    const c = [
      vertexPosArray[ci * 3 + 0],
      vertexPosArray[ci * 3 + 1],
      vertexPosArray[ci * 3 + 2],
    ];

    const n = [
      surfaceNormalsArray[i * 3 + 0],
      surfaceNormalsArray[i * 3 + 1],
      surfaceNormalsArray[i * 3 + 2],
    ];

    if (rayTriangleIntersection(p0, lightPos, a, b, c, n)) {
      return true;
    }
  }
  return false;
};
