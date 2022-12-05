import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { Octree } from "../functions/Octree/Octree";
import { f } from "../simulation";

const boxes: THREE.Mesh[] = [];

const canvas = document.getElementById("three_canvas")! as HTMLCanvasElement;

var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight * 0.9);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.width / canvas.height,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

camera.position.set(1, 1, 1).setLength(3);
controls.update();

const octDimensions = [1, 1, 1];

const octPos = [
  octDimensions[0] * 0.5,
  octDimensions[1] * 0.5,
  octDimensions[2] * 0.5,
];

const octree = new Octree(octPos, octDimensions, 2, scene);

const insertPoint = () => {
  const x = Math.random() * octDimensions[0];
  const y = Math.random() * octDimensions[1];
  const z = Math.random() * octDimensions[2];

  const particle = new THREE.Mesh(
    new THREE.SphereGeometry(0.01),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );

  particle.position.set(x, y, z);

  scene.add(particle);

  octree.insert(x, y, z);
};

console.log("after octree");

const maxParticleCount = 50;
let particleCount = 0;
console.time();
while (particleCount < maxParticleCount) {
  insertPoint();
  particleCount++;
}
console.timeEnd();

console.log(octree);

const animate = async () => {
  if (particleCount < maxParticleCount) {
    insertPoint();
    particleCount++;
    console.log(particleCount);
  }
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
