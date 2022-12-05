import { particleInBox } from "./octree";
describe("particleInBox", () => {
  it("should return true when particle is in the middle of the box", () => {
    const boxCentre = [0, 0, 0];
    const boxDimensions = [1, 1, 1];

    const particlePos = boxCentre;

    expect(particleInBox(particlePos, boxCentre, boxDimensions)).toBe(true);
  });
  it("should return true when particle is on edge of x of box", () => {
    const boxCentre = [0, 0, 0];
    const boxDimensions = [4, 6, 9];

    const particlePos = [2, -2, 3];

    expect(particleInBox(particlePos, boxCentre, boxDimensions)).toBe(true);
  });
  it("should return false when particle is outside of box in x", () => {
    const boxCentre = [4, 10, 2];
    const boxDimensions = [4, 8, 2];

    const particlePos = [-9, 2.3, 5];

    expect(particleInBox(particlePos, boxCentre, boxDimensions)).toBe(false);
  });
  it("should return false when particle is outside of box in y", () => {
    const boxCentre = [0, 0, 0];
    const boxDimensions = [2, 1, 3];

    const particlePos = [1, 6, -1];

    expect(particleInBox(particlePos, boxCentre, boxDimensions)).toBe(false);
  });
  it("should return false when particle is outside of box in z", () => {
    const boxCentre = [0, 0, 0];
    const boxDimensions = [1, 3, 5];

    const particlePos = [-0.1, 1, -90];

    expect(particleInBox(particlePos, boxCentre, boxDimensions)).toBe(false);
  });
});
