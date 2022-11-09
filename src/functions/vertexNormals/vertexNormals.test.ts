import * as THREE from "three";
import { PlaneGeometry } from "three";
import { getIndicesOfPointsUsedToCalculateSurfaceNormal } from "./vertexNormals";

describe("getIndicesOfPointsUsedToCalculateSurfaceNormal", () => {
  it("should find the correct indices for vertex 0", () => {
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
    ).toEqual([5, 4, 0]);
  });
});
