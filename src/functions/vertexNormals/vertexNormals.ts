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
