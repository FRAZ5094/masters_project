import { isVertexSelfShadowed } from "./collisions";
import * as THREE from "three";
import { calculateSurfaceNormals } from "../vertexNormals/vertexNormals";

describe("isVertexSelfShadowed", () => {
  it("should not be self shadowed when non-deformed plane", () => {
    const lightPos = [0, 0, 1];

    const nRows = 4;
    const nCols = 4;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    const surfaceNormalsArray = calculateSurfaceNormals(
      vertexPosArray,
      triangleIndicesArray
    );

    const nVertices = nRows * nCols;

    const ans: boolean[] = [];
    const result: boolean[] = [];

    for (let i = 0; i < nVertices; i++) {
      ans.push(false);
      result.push(
        isVertexSelfShadowed(
          i,
          lightPos,
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        )
      );
    }

    // console.log(result);

    expect(result).toEqual(ans);
  });
  it("should be self shadowed when non-deformed plane", () => {
    const lightPos = [0, 0, 1];

    const nRows = 5;
    const nCols = 5;

    const geometry = new THREE.PlaneGeometry(1, 1, nCols - 1, nRows - 1);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    const surfaceNormalsArray = calculateSurfaceNormals(
      vertexPosArray,
      triangleIndicesArray
    );
    vertexPosArray[vertexPosArray.length - 3] = -0.5;
    vertexPosArray[vertexPosArray.length - 2] = 0.5;
    vertexPosArray[vertexPosArray.length - 1] = 0.5;

    const nVertices = nRows * nCols;

    const verticesThatShouldBeShadowed = [0, 6, 12, 18];

    const result: boolean[] = [];
    const ans: boolean[] = [];

    for (let i = 0; i < nVertices; i++) {
      result.push(
        isVertexSelfShadowed(
          i,
          lightPos,
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        )
      );
      if (verticesThatShouldBeShadowed.includes(i)) {
        ans.push(true);
      } else {
        ans.push(false);
      }
    }

    expect(result).toEqual(ans);
  });
});
