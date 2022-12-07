import { vertexWillSelfCollide, isVertexSelfShadowed } from "./collisions";
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

describe("isVertexSelfColliding", () => {
  it("should not find any self-collisions for plane geometry with no deformations", () => {
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
      const stride = i * 3;

      const p = [
        vertexPosArray[stride + 0],
        vertexPosArray[stride + 1],
        vertexPosArray[stride + 2],
      ];
      const p_new = [
        vertexPosArray[stride + 0],
        vertexPosArray[stride + 1],
        vertexPosArray[stride + 2] + 1,
      ];
      ans.push(false);
      result.push(
        vertexWillSelfCollide(
          i,
          p,
          p_new,
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        ).intersected
      );
    }

    expect(result).toEqual(ans);
  });
  it("should find 1 self-collision for the first vertex", () => {
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
      const stride = i * 3;

      let p: number[];
      let p_new: number[];

      if (i == 0) {
        p = [0.05, 0.1, 1];
        p_new = [0.05, 0.1, -9];
        ans.push(true);
      } else {
        p = [
          vertexPosArray[stride + 0],
          vertexPosArray[stride + 1],
          vertexPosArray[stride + 2],
        ];
        p_new = [
          vertexPosArray[stride + 0],
          vertexPosArray[stride + 1],
          vertexPosArray[stride + 2] + 1,
        ];
        ans.push(false);
      }

      result.push(
        vertexWillSelfCollide(
          i,
          p,
          p_new,
          vertexPosArray,
          triangleIndicesArray,
          surfaceNormalsArray
        ).intersected
      );
    }

    expect(result).toEqual(ans);
  });
});
