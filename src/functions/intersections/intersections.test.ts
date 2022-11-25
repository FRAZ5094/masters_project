import { isVertexSelfShadowed } from "./intersections";
import * as THREE from "three";
import { calculateSurfaceNormals } from "../vertexNormals/vertexNormals";

describe("isVertexSelfShadowed", () => {
  it("should not be self shadowed when non-deformed plane", () => {
    const i = 0;

    const lightPos = [0, 0, 1];

    const geometry = new THREE.PlaneGeometry(1, 1, 10, 10);

    const vertexPosArray = geometry.attributes.position.array as Float32Array;

    const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

    const surfaceNormalsArray = calculateSurfaceNormals(
      vertexPosArray,
      triangleIndicesArray
    );

    expect(
      isVertexSelfShadowed(
        i,
        lightPos,
        vertexPosArray,
        triangleIndicesArray,
        surfaceNormalsArray
      )
    ).toBe(false);
  });
});
