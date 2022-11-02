import { getSpringIndicesArray } from "../helperFunctions";
import * as THREE from "three";

describe("getSpringIndicesArray", () => {
  const nRows = 2;
  const nCols = 2;
  const xDepth = 1;
  const yDepth = 1;

  const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

  const vertices = geometry.attributes.position;

  const nVertices = vertices.count;

  const sqrt2 = Math.sqrt(2);

  it("should have an array for each of the vertices", () => {
    expect(
      getSpringIndicesArray(vertices, nRows, nCols, xDepth, yDepth)
    ).toHaveLength(nVertices);
  });

  it("should find the correct indices and natural lengths", () => {
    expect(
      getSpringIndicesArray(vertices, nRows, nCols, xDepth, yDepth)
    ).toEqual([
      [
        [1, 1],
        [2, 1],
        [3, sqrt2],
      ],
      [
        [0, 1],
        [2, sqrt2],
        [3, 1],
      ],
      [
        [0, 1],
        [1, sqrt2],
        [3, 1],
      ],
      [
        [0, sqrt2],
        [1, 1],
        [2, 1],
      ],
    ]);
  });
});
