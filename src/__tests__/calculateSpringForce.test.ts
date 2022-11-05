import { calculateSpringForce } from "../helperFunctions";
import * as THREE from "three";

describe("calculateSpringForce", () => {
  it("should calculate a force of 0 when spring is at its natural length", () => {
    const position1 = new THREE.Vector3(
      Math.random(),
      Math.random(),
      Math.random()
    );
    const position2 = new THREE.Vector3(
      Math.random(),
      Math.random(),
      Math.random()
    );
    const natural_length: number = position1.clone().sub(position2).length();
    expect(
      calculateSpringForce(
        position1.x,
        position1.y,
        position1.z,
        position2.x,
        position2.y,
        position2.z,
        1,
        natural_length
      ).map((x) => Math.abs(x)) //make sure that 0 and -0 are the same thing
    ).toEqual([0, 0, 0]);
  });
  it("should calculate magnitude of force correctly", () => {
    const x1 = 12;
    const y1 = 6;
    const z1 = 2;
    const x2 = 9;
    const y2 = -8;
    const z2 = 2;
    const k = 23.5;
    const natural_length = 11;

    const [x, y, z] = calculateSpringForce(
      x1,
      y1,
      z1,
      x2,
      y2,
      z2,
      k,
      natural_length
    );

    expect(Math.sqrt(x * x + y * y + z * z)).toEqual(77.96879498699431);
  });
  it("should calculate correctly when positive spring force", () => {
    const position1 = new THREE.Vector3(2, 0, 0);
    const position2 = new THREE.Vector3(10, 0, 0);
    const natural_length: number =
      position1.clone().sub(position2).length() - Math.random();
    const k = Math.random();
    expect(
      calculateSpringForce(
        position1.x,
        position1.y,
        position1.y,
        position2.x,
        position2.y,
        position2.z,
        k,
        natural_length
      )[0]
    ).toBeGreaterThan(0);
  });
  it("should calculate correctly when negative spring force", () => {
    const position1 = new THREE.Vector3(2, 0, 0);
    const position2 = new THREE.Vector3(10, 0, 0);
    const natural_length: number =
      position1.clone().sub(position2).length() + Math.random();
    const k = Math.random();
    expect(
      calculateSpringForce(
        position1.x,
        position1.y,
        position1.z,
        position2.x,
        position2.y,
        position2.z,
        k,
        natural_length
      )[0]
    ).toBeLessThan(0);
  });
});
