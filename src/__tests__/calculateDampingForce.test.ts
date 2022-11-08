import { calculateDampingForce } from "../helperFunctions";
import * as THREE from "three";

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
