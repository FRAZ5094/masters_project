import {
  vertexIsInLight,
  projectPointOnToPlane,
  distanceBetweenTwoParallelPlanes,
} from "./projection";
describe("projectPointOnToPlane", () => {
  it("should get the correct point when the plane is in the xy axis", () => {
    const p = [1, 1, 1];

    const n = [0, 0, 1];

    const s = [0, 0, 0];

    expect(projectPointOnToPlane(p, n, s)).toEqual([1, 1, 0]);
  });
});
describe("projectPointOnToPlane", () => {
  it("should get the correct point when the plane is in the xy axis", () => {
    const p = [1, 1, 1];

    const n = [0, 0, 1];

    const s = [0, 0, 0];

    expect(vertexIsInLight(p, s, 2, n)).toEqual(true);
  });
});

// describe("distanceBetweenTwoParallelPlanes", () => {
//   it("should find the correct value for points along the z axis", () => {
//     const p0 = [0, 0, 10];
//     const p1 = [0, 0, -10];

//     const n = [0, 0, -1];

//     expect(distanceBetweenTwoParallelPlanes(p0, p1, n)).toEqual(10);
//   });
// });
