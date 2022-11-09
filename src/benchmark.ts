import * as THREE from "three";
import {
  calculateSpringForce,
  calculateSpringForceVector,
} from "./functions/forces/forces";

const fn1 = calculateSpringForce;
const fn2 = calculateSpringForceVector;

console.log("starting benchmark");

const n = 1000000000;

let i = 0;

let start = performance.now();

while (i < n) {
  const r = fn1(1, 1, 1, 2, 2, 2, 1, 1);
  i++;
}

let end = performance.now();

console.log(end - start);

const fn1_persec = n / ((end - start) / 1000);

i = 0;

const a = new THREE.Vector3(1, 1, 1);
const b = new THREE.Vector3(2, 2, 2);

start = performance.now();
while (i < n) {
  const r = fn2(a, b, 1, 1);
  i++;
}
end = performance.now();

const fn2_persec = n / ((end - start) / 1000);

console.log(fn1.name);
console.log(fn1_persec.toLocaleString() + " operations per second");
console.log(fn2.name);
console.log(fn2_persec.toLocaleString() + " operations per second");

if (fn1_persec > fn2_persec) {
  console.log(
    fn1.name + " is " + (fn1_persec / fn2_persec).toFixed(2) + " times faster"
  );
} else {
  console.log(
    fn2.name + " is " + (fn2_persec / fn1_persec).toFixed(2) + " times faster"
  );
}
