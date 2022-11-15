import * as THREE from "three";
import { RowAndColToIndex } from "../IndexRowsCols/IndexRowsCols";
import {
  calculateCentroidOfTriangle,
  calculateSurfaceNormals,
  calculateVertexNormals,
  findTrianglesConnectedToVertex,
  getTrianglesAttachedToVertexArray,
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

describe("findTrianglesConnectedToVertex", () => {
  it("should find the correct triangle indices for vertex 0", () => {
    const nRows = 5;
    const nCols = nRows;

    const i = 0;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const triangleIndices = geometry.getIndex()!.array as Uint16Array;

    expect(findTrianglesConnectedToVertex(i, triangleIndices)).toEqual([
      0, 5, 1,
    ]);
  });
  it("should find the indices of 8 triangles for a vertex in the middle", () => {
    const nRows = 5;
    const nCols = nRows;

    const i = 12;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const triangleIndices = geometry.getIndex()!.array as Uint16Array;

    expect(findTrianglesConnectedToVertex(i, triangleIndices).length).toEqual(
      18
    );
  });
  it("should find the correct indices for a vertex in the middle", () => {
    const nRows = 5;
    const nCols = nRows;

    const i = 12;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const triangleIndices = geometry.getIndex()!.array as Uint16Array;

    expect(findTrianglesConnectedToVertex(i, triangleIndices)).toEqual([
      11, 12, 7, 7, 12, 8, 12, 13, 8, 11, 16, 12, 16, 17, 12, 12, 17, 13,
    ]);
  });
});

describe("calculateVertexNormals", () => {
  it("should have a normal for each of the vertices", () => {
    const nRows = 10;
    const nCols = 10;

    const geometry = new THREE.PlaneGeometry(1, 1, nRows - 1, nCols - 1);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    const trianglesAttachedToVertexArray = getTrianglesAttachedToVertexArray(
      triangleIndicesArray,
      nRows,
      nCols
    );

    let ans = new Float32Array(nCols * nRows).map((value, i) =>
      i % 3 == 2 ? 1 : 0
    );

    expect(
      calculateVertexNormals(trianglesAttachedToVertexArray, vertexPosArray)
    ).toEqual(ans);
  });
});
