import * as THREE from "three";
import { RowAndColToIndex } from "../IndexRowsCols/IndexRowsCols";
import {
  calculateCentroidOfTriangle,
  calculateSurfaceNormals,
} from "./vertexNormals";

describe("calculateSurfaceNormals", () => {
  it("calculated a normal for each face", () => {
    const nRows = 4;
    const nCols = 4;

    const nFaces = 18;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    expect(
      calculateSurfaceNormals(vertexPosArray, triangleIndicesArray).length
    ).toEqual(nFaces * 3);
  });
  it("calculates the correct values when its a flat plane", () => {
    const nRows = 4;
    const nCols = 4;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    let surfaceNormals = calculateSurfaceNormals(
      vertexPosArray,
      triangleIndicesArray
    );

    surfaceNormals = surfaceNormals.map((a) => (a == -0 ? 0 : a));

    expect(surfaceNormals.slice(0, 3)).toEqual(new Float32Array([0, 0, 1]));
  });
});

describe("getCentroidOfTriangle", () => {
  it("should calculate the correct centroid", () => {
    const ax = 5;
    const ay = 3;
    const az = 1;
    const bx = 9;
    const by = 6;
    const bz = 1;
    const cx = 10;
    const cy = 6;
    const cz = 1;

    expect(
      calculateCentroidOfTriangle(ax, ay, az, bx, by, bz, cx, cy, cz)
    ).toEqual([8, 5, 1]);
  });
});
