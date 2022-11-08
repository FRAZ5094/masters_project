import { cross } from "../helperFunctions";

describe("cross", () => {
  it("should calculate the correct vector", () => {
    const x1 = 1;
    const y1 = 6;
    const z1 = -2;

    const x2 = -9;
    const y2 = 2;
    const z2 = 10.25;

    expect(cross(x1, y1, z1, x2, y2, z2)).toEqual([65.5, 7.75, 56]);
  });
});
