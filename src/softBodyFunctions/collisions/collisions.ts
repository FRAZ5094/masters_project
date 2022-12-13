import { dot } from "../vector/vector";

interface intersectionReturn {
  intersected: boolean;
  I?: number[];
}

export const rayTriangleIntersection = (
  p0: number[],
  p1: number[],
  Ta: number[],
  Tb: number[],
  Tc: number[],
  n: number[]
): intersectionReturn => {
  // Copyright 2001, 2012, 2021 Dan Sunday
  // This code may be freely used and modified for any purpose
  // providing that this copyright notice is included with it.
  // There is no warranty for this code, and the author of it cannot
  // be held liable for any real or imagined damage from its use.
  // Users of this code must verify correctness for their application.

  //p0 will be the position of the light source
  //p1 will be the position of the vertex
  //Ta will be the a vertex of the triangle
  //Tb will be the b vertex of the triangle
  //Tc will be the c vertex of the triangle

  //can't be cached
  const rayDirX = p1[0] - p0[0];
  const rayDirY = p1[1] - p0[1];
  const rayDirZ = p1[2] - p0[2];

  //can be cached
  const w0x = p0[0] - Ta[0];
  const w0y = p0[1] - Ta[1];
  const w0z = p0[2] - Ta[2];

  //can't be cached
  const a = -1 * dot(n[0], n[1], n[2], w0x, w0y, w0z);

  //can't be cached
  const b = dot(n[0], n[1], n[2], rayDirX, rayDirY, rayDirZ);

  const SMALL_NUM = 0.00000001;

  if (Math.abs(b) < SMALL_NUM) {
    return { intersected: false };
  }

  //can't be cached
  const r = a / b;

  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const dz = p1[2] - p0[2];

  //added by me to make sure that if the triangle is not between the two points that it won't count as an intersection
  const rayMag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  if (r < 0 || r > rayMag) {
    return { intersected: false };
  }

  //can't be cached
  const Ix = p0[0] + r * rayDirX;
  const Iy = p0[1] + r * rayDirY;
  const Iz = p0[2] + r * rayDirZ;

  //can be cached
  const ux = Tb[0] - Ta[0];
  const uy = Tb[1] - Ta[1];
  const uz = Tb[2] - Ta[2];

  //can be cached
  const vx = Tc[0] - Ta[0];
  const vy = Tc[1] - Ta[1];
  const vz = Tc[2] - Ta[2];

  //can be cached
  const uu = dot(ux, uy, uz, ux, uy, uz);
  const uv = dot(ux, uy, uz, vx, vy, vz);
  const vv = dot(vx, vy, vz, vx, vy, vz);

  //can't be cached
  const wx = Ix - Ta[0];
  const wy = Iy - Ta[1];
  const wz = Iz - Ta[2];

  //can't be cached
  const wu = dot(wx, wy, wz, ux, uy, uz);
  const wv = dot(wx, wy, wz, vx, vy, vz);

  //can be cached
  const denom = uv * uv - uu * vv;

  //can't cache
  const s = (uv * wv - vv * wu) / denom;

  if (s < 0 || s > 1) {
    return { intersected: false };
  }
  const t = (uv * wu - uu * wv) / denom;

  if (t < 0 || s + t > 1) {
    return { intersected: false };
  }

  const I = [Ix, Iy, Iz];

  return { intersected: true, I };
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

    if (rayTriangleIntersection(p0, lightPos, a, b, c, n).intersected) {
      return true;
    }
  }
  return false;
};

interface vertexWillSelfCollideReturn {
  intersected: boolean;
  I?: number[];
  n?: number[];
}

export const vertexWillSelfCollide = (
  vertexIndex: number,
  p: number[],
  p_new: number[],
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array,
  surfaceNormalsArray: Float32Array
): vertexWillSelfCollideReturn => {
  const nTriangles = triangleIndicesArray.length / 3;

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

    const res = rayTriangleIntersection(p, p_new, a, b, c, n);

    if (res.intersected) {
      return { ...res, n };
    }
  }

  return { intersected: false };
};

export const particleTriangleCollisionResolution = (
  I: number[],
  p0: number[],
  p1: number[],
  v: number[],
  n: number[]
): number[] => {
  const dx = p1[0] - I[0];
  const dy = p1[1] - I[1];
  const dz = p1[1] - I[2];

  //this is magnitude of the amount of velocity "left over" after the collision
  const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  //dot product of the incidence vector with the normal of the plane, this is used to make sure Vp is the correct length
  const Vp_scale = dot(
    I[0] - p0[0],
    I[1] - p0[1],
    I[2] - p0[2],
    n[0],
    n[1],
    n[2]
  );

  //vector of v projected onto the normal of the plane
  const Vpx = n[0] * Vp_scale;
  const Vpy = n[1] * Vp_scale;
  const Vpz = n[2] * Vp_scale;

  let Vrx = I[0] - 2 * Vpx - p0[0];
  let Vry = I[1] - 2 * Vpy - p0[1];
  let Vrz = I[2] - 2 * Vpz - p0[2];

  const VrMag = Math.sqrt(Vrx * Vrx + Vry * Vry + Vrz * Vrz);

  Vrx *= mag / VrMag;
  Vry *= mag / VrMag;
  Vrz *= mag / VrMag;

  //new position of vertex is the intersection point vector add the reflected velocity vector
  const x_new = I[0] + Vrx;
  const y_new = I[1] + Vrz;
  const z_new = I[2] + Vry;

  const vMag = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

  //new velocity of vertex is the reflected velocity vector but with the magnitude of the vertex's velocity
  const vx_new = (Vrx / VrMag) * vMag;
  const vy_new = (Vry / VrMag) * vMag;
  const vz_new = (Vrz / VrMag) * vMag;

  return [x_new, y_new, z_new, vx_new, vy_new, vz_new];
};

export const raySphereIntersection = (
  p0: number[],
  p1: number[],
  circleCenter: number[],
  r: number
): boolean => {
  //immersive math 3.12

  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const dz = p1[2] - p0[2];

  //a = dd;
  const a = dot(dx, dy, dz, dy, dx, dz);

  const s_minus_c_x = p0[0] - circleCenter[0];
  const s_minus_c_y = p0[1] - circleCenter[1];
  const s_minus_c_z = p0[2] - circleCenter[2];

  const b = dot(dx, dy, dz, s_minus_c_x, s_minus_c_y, s_minus_c_z);

  const c =
    dot(
      s_minus_c_x,
      s_minus_c_y,
      s_minus_c_z,
      s_minus_c_x,
      s_minus_c_y,
      s_minus_c_z
    ) -
    r * r;

  const determinant = b * b - a * c;

  if (determinant < 0) return false;

  const rMag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  if (determinant == 0) {
    const t = -b / a;

    return t <= rMag;
  }

  const t1 = (-b + determinant) / a;
  const t2 = (-b - determinant) / a;

  return t1 <= rMag && t2 <= rMag;
};
