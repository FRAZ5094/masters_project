import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { calculateGeostationaryOrbitVelocityAndRadius } from "./orbitFunctions/parameters";
import { runOrbitSim } from "./orbitSim";

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

camera.position.set(1, 1, 1).setLength(10);
controls.update();

const earthR = 0.1; //in m;

console.log(earthR);

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(earthR),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide })
);

scene.add(earth);

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(earthR * 10),
  new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
);

sun.position.x += earthR * 50;

scene.add(sun);

const earthT = 86400;
const earthM = 5.972 * Math.pow(10, 24);
const G = 6.6732 * Math.pow(10, -11);

console.log(calculateGeostationaryOrbitVelocityAndRadius(earthT, earthM, G));

const { orbitRadius, orbitVelocity } =
  calculateGeostationaryOrbitVelocityAndRadius(earthT, earthM, G);

const nTimesteps: number = 10;
const dt: number = 1 * 60; //in seconds
const satelliteInitialPos: number[] = [orbitRadius, 0, 0]; //in m from earth centre;
const satelliteInitialV: number[] = [0, 0, orbitVelocity];

const p = runOrbitSim(nTimesteps, dt, satelliteInitialPos, satelliteInitialV);

console.log(p);

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
