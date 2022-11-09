import * as THREE from "three";

//functions related to calculating forces

export const calculateSpringForce = (
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  k: number,
  natural_length: number
): number[] => {
  //this function takes two positions,k value and natural length and calculates the spring force between those two points on the point position 1

  //position1 is the vertex we want to calculate the spring force on
  //position2 is the vertex we imagine the spring is attached to

  //get distance between the two positions

  let dx = x1 - x2;
  let dy = y1 - y2;
  let dz = z1 - z2;

  //calculate the extension of the spring from the natural length

  const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const extension = mag - natural_length;

  //set the length of the distance vector to the extension of the spring
  dx /= mag;
  dy /= mag;
  dz /= mag;

  //take advantage of the distance vector being in the same direction as the spring force
  //f = -kx;

  dx *= -k * extension;
  dy *= -k * extension;
  dz *= -k * extension;

  return [dx, dy, dz];
};

export const calculateSpringForceVector = (
  position1: THREE.Vector3,
  position2: THREE.Vector3,
  k: number,
  natural_length: number
): THREE.Vector3 => {
  let dist = position1.sub(position2);

  const extension: number = dist.length() - natural_length;

  const f = dist.multiplyScalar(-k);

  return f;
};

export const calculateDampingForce = (
  vx: number,
  vy: number,
  vz: number,
  c: number
): number[] => {
  const fx = -c * vx;
  const fy = -c * vy;
  const fz = -c * vz;

  return [fx, fy, fz];
};
