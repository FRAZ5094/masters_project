import { calculateSpringForce, calculateDampingForce } from "./forces";
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

describe("calculateDampingForce", () => {
  it("should should calculate a force antiparallel to the velocity when the damping coefficient is positive", () => {
    const v = new THREE.Vector3(Math.random(), Math.random(), Math.random());
    const c = 1;

    let [ax, ay, az] = calculateDampingForce(v.x, v.y, v.z, c);

    const a = new THREE.Vector3(ax, ay, az);

    expect(v.angleTo(a)).toBe(Math.PI);
  });
  it("should calculate a force parallel to the velocity when the damping coefficient is negative", () => {
    const v = new THREE.Vector3(Math.random(), Math.random(), Math.random());
    const c = -1;

    let [ax, ay, az] = calculateDampingForce(v.x, v.y, v.z, c);

    const a = new THREE.Vector3(ax, ay, az);

    expect(v.angleTo(a)).toBe(0);
  });
  it("should calculate a force of zero when the damping coefficient is zero", () => {
    const v = new THREE.Vector3(Math.random(), Math.random(), Math.random());
    const c = 0;

    let [ax, ay, az] = calculateDampingForce(v.x, v.y, v.z, c);

    const a = new THREE.Vector3(ax, ay, az);

    expect(a.length()).toBe(0);
  });
  it("should calculate the correct magnitude of force", () => {
    const vx = 1.24;
    const vy = 1.46;
    const vz = 1.3;
    const c = 2.3;

    let [fx, fy, fz] = calculateDampingForce(vx, vy, vz, c);

    const mag = Math.sqrt(fx * fx + fy * fy + fz * fz);

    expect(mag).toEqual(5.324487580979037);
  });
});
