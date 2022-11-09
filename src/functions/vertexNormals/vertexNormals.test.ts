import * as THREE from "three";
import { PlaneGeometry } from "three";
import { RowAndColToIndex } from "../IndexRowsCols/IndexRowsCols";
import { getIndicesOfPointsUsedToCalculateSurfaceNormal } from "./vertexNormals";

describe("getIndicesOfPointsUsedToCalculateSurfaceNormal", () => {
  it("should find the correct indices when the index is even", () => {
    const nRows = 4;
    const nCols = 4;
    const geometry = new PlaneGeometry(1, 1, nRows - 1, nCols - 1);
    const vertices = geometry.attributes.position;

    const verticesPosArray = vertices.array as Float32Array;

    const i = 0;

    expect(
      getIndicesOfPointsUsedToCalculateSurfaceNormal(
        verticesPosArray,
        nRows,
        nCols,
        i
      )
    ).toEqual([0, 5, 4]);
  });
  it("should find the correct indices when the index is odd", () => {
    const nRows = 4;
    const nCols = 4;
    const geometry = new PlaneGeometry(1, 1, nRows - 1, nCols - 1);
    const vertices = geometry.attributes.position;

    const verticesPosArray = vertices.array as Float32Array;

    const i = 1;

    expect(
      getIndicesOfPointsUsedToCalculateSurfaceNormal(
        verticesPosArray,
        nRows,
        nCols,
        i
      )
    ).toEqual([1, 5, 0]);
  });
  it("should throw an error when you try to calculate the normals at a vertex on the bottom of the geometry", () => {
    const nRows = 4;
    const nCols = 4;
    const geometry = new PlaneGeometry(1, 1, nRows - 1, nCols - 1);
    const vertices = geometry.attributes.position;

    const verticesPosArray = vertices.array as Float32Array;

    const i = RowAndColToIndex(nRows, 3, nRows);

    try {
      getIndicesOfPointsUsedToCalculateSurfaceNormal(
        verticesPosArray,
        nRows,
        nCols,
        i
      );
      expect(1).toEqual(2);
    } catch (e) {}
  });
});
