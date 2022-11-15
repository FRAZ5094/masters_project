import {
  IndexToRowAndCol,
  RowAndColToIndex,
} from "../IndexRowsCols/IndexRowsCols";
import { cross } from "../vector/vector";

export const getNumberOfFaces = (nRows: number, nCols: number): number => {
  return (2 * (nRows - 2) + 2) * (nCols - 1);
};

export const calculateSurfaceNormals = (
  vertexPosArray: Float32Array,
  triangleIndicesArray: Uint16Array
): Float32Array => {
  const triangleIndicesArrayLength = triangleIndicesArray.length;

  const nFaces = triangleIndicesArrayLength / 3;

  const surfaceNormals = new Float32Array(triangleIndicesArrayLength);

  for (let i = 0; i < nFaces; i++) {
    const stride = i * 3;

    const ax = vertexPosArray[triangleIndicesArray[stride + 0] * 3 + 0];
    const ay = vertexPosArray[triangleIndicesArray[stride + 0] * 3 + 1];
    const az = vertexPosArray[triangleIndicesArray[stride + 0] * 3 + 2];

    const bx = vertexPosArray[triangleIndicesArray[stride + 1] * 3 + 0];
    const by = vertexPosArray[triangleIndicesArray[stride + 1] * 3 + 1];
    const bz = vertexPosArray[triangleIndicesArray[stride + 1] * 3 + 2];

    const cx = vertexPosArray[triangleIndicesArray[stride + 2] * 3 + 0];
    const cy = vertexPosArray[triangleIndicesArray[stride + 2] * 3 + 1];
    const cz = vertexPosArray[triangleIndicesArray[stride + 2] * 3 + 2];

    let [nx, ny, nz] = cross(
      ax - bx,
      ay - by,
      az - bz,
      ax - cx,
      ay - cy,
      az - cz
    );

    const mag = Math.sqrt(nx * nx + ny * ny + nz * nz);

    nx /= mag;
    ny /= mag;
    nz /= mag;

    surfaceNormals[stride + 0] = nx;
    surfaceNormals[stride + 1] = ny;
    surfaceNormals[stride + 2] = nz;
  }

  return surfaceNormals;
};

export const calculateCentroidOfTriangle = (
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  cx: number,
  cy: number,
  cz: number
): number[] => {
  const x = (ax + bx + cx) / 3;
  const y = (ay + by + cy) / 3;
  const z = (az + bz + cz) / 3;

  return [x, y, z];
};

export const findTrianglesConnectedToVertex = (
  vertexIndex: number,
  triangleIndices: Uint16Array
): number[] => {
  //
  const indices: number[] = [];

  for (let i = 0; i < triangleIndices.length; i++) {
    if (triangleIndices[i] == vertexIndex) {
      if (i % 3 == 0) {
        indices.push(triangleIndices[i]);
        indices.push(triangleIndices[i + 1]);
        indices.push(triangleIndices[i + 2]);
      } else if (i % 3 == 1) {
        indices.push(triangleIndices[i - 1]);
        indices.push(triangleIndices[i]);
        indices.push(triangleIndices[i + 1]);
      } else if (i % 3 == 2) {
        indices.push(triangleIndices[i - 2]);
        indices.push(triangleIndices[i - 1]);
        indices.push(triangleIndices[i]);
      }
    }
  }

  return indices;
};

export const getTrianglesAttachedToVertexArray = (
  triangleIndices: Uint16Array,
  nRows: number,
  nCols: number
): number[][] => {
  const nVertices = nRows * nCols;

  const array: number[][] = [];

  for (let i = 0; i < nVertices; i++) {
    array.push(findTrianglesConnectedToVertex(i, triangleIndices));
  }

  return array;
};

export const calculateVertexNormals = (
  trianglesAttachedToVertexArray: number[][],
  vertexPosArray: Float32Array
): Float32Array => {
  const nVertices: number = trianglesAttachedToVertexArray.length;

  const vertexNormals = new Float32Array(nVertices);

  for (let i = 0; i < nVertices; i++) {
    const nTriangles = trianglesAttachedToVertexArray[i].length / 3;

    const stride = i * 3;

    let nx_total = 0;
    let ny_total = 0;
    let nz_total = 0;

    for (let j = 0; j < nTriangles; j++) {
      const innerStride = j * 3;

      const aIndex = trianglesAttachedToVertexArray[i][innerStride + 0];
      const bIndex = trianglesAttachedToVertexArray[i][innerStride + 1];
      const cIndex = trianglesAttachedToVertexArray[i][innerStride + 2];
      const ax = vertexPosArray[aIndex * 3 + 0];
      const ay = vertexPosArray[aIndex * 3 + 1];
      const az = vertexPosArray[aIndex * 3 + 2];

      const bx = vertexPosArray[bIndex * 3 + 0];
      const by = vertexPosArray[bIndex * 3 + 1];
      const bz = vertexPosArray[bIndex * 3 + 2];

      const cx = vertexPosArray[cIndex * 3 + 0];
      const cy = vertexPosArray[cIndex * 3 + 1];
      const cz = vertexPosArray[cIndex * 3 + 2];

      let [nx, ny, nz] = cross(
        ax - bx,
        ay - by,
        az - bz,
        ax - cx,
        ay - cy,
        az - cz
      );

      nx_total += nx;
      ny_total += ny;
      nz_total += nz;
    }

    nx_total /= nTriangles;
    ny_total /= nTriangles;
    nz_total /= nTriangles;

    const mag = Math.sqrt(
      nx_total * nx_total + ny_total * ny_total + nz_total * nz_total
    );

    nx_total /= mag;
    ny_total /= mag;
    nz_total /= mag;

    vertexNormals[stride + 0] = nx_total;
    vertexNormals[stride + 1] = ny_total;
    vertexNormals[stride + 2] = nz_total;
  }

  return vertexNormals;
};
