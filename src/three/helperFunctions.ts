import * as THREE from 'three';

export const calculateSpringForce = (position1 : THREE.Vector3, position2: THREE.Vector3, natural_length : number) : THREE.Vector3 => {

  const k = 0.0001;

  let dist = position1.sub(position2);
  const extension : number = dist.length() - natural_length;
  dist.setLength(extension);

  const f = dist.multiplyScalar(k);

  return f;
}
