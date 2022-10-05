import { calculateSpringForce } from "../helperFunctions";
import * as THREE from 'three';

describe("calculateSpringForce", () => {
  it("should calculate a force of 0 when spring is at its natural length", () => {
    const position1 = new THREE.Vector3(Math.random(),Math.random(),Math.random());
    const position2 = new THREE.Vector3(Math.random(),Math.random(),Math.random());
    const natural_length : number = position1.clone().sub(position2).length();
    expect(calculateSpringForce(position1,position2,1,natural_length).length()).toEqual(0);
  });
  it("should calculate magnitude of force correctly", () => {
    const position1 = new THREE.Vector3(12,6,2);
    const position2 = new THREE.Vector3(9,-8,2);
    const k = 23.5;
    const natural_length = 11;

    expect(calculateSpringForce(position1,position2,k,natural_length).length()).toEqual(77.9687949869943);
  });
  it("should calculate correctly when positive spring force", () => {
    const position1 = new THREE.Vector3(2,0,0);
    const position2 = new THREE.Vector3(10,0,0);
    const natural_length : number = position1.clone().sub(position2).length() - Math.random();
    const k = Math.random();
    expect(calculateSpringForce(position1,position2,k,natural_length).x).toBeGreaterThan(0);
  });
  it("should calculate correctly when negative spring force", () => {
    const position1 = new THREE.Vector3(2,0,0);
    const position2 = new THREE.Vector3(10,0,0);
    const natural_length : number = position1.clone().sub(position2).length() + Math.random();
    const k = Math.random();
    expect(calculateSpringForce(position1,position2,k,natural_length).x).toBeLessThan(0);
  });
});
