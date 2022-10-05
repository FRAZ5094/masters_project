import * as THREE from 'three';

export const calculateSpringForce = (position1 : THREE.Vector3, position2: THREE.Vector3, k : number, natural_length : number) : THREE.Vector3 => {
  //position1 is the vertex we want to calulate the spring force on
  //position2 is the vertex we imagine the spring is attached to

  //get distance between the two positions
  let dist = position1.sub(position2);

  //calculate the extension of the spring from the natural length
  const extension : number = dist.length() - natural_length;

  //set the length of the distance vector to the extension of the spring
  dist.setLength(extension);

  //take advantage of the distance vector being in the same direction as the spring force
  //f = -kx;
  const f = dist.multiplyScalar(-k);

  return f;
}
