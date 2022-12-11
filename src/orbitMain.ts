import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { calculateGeostationaryOrbitVelocityAndRadius } from "./orbitFunctions/parameters";
import { runOrbitSim } from "./orbitSim";

let t = 0;
let playing = false;
let speed = 1;

const nTimestep: number = 86400;
const dt: number = 1; //in seconds
const satelliteM: number = 1;

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

camera.position.set(1, 1, 1).setLength(1);
controls.update();

const updatePlanetPos = () => {
  const pt = p.slice(t * nMasses * 3, (t + 1) * nMasses * 3);

  // console.log({ t });

  for (let i = 0; i < nMasses; i++) {
    const stride = i * 3;

    let x = pt[stride + 0];
    let y = pt[stride + 1];
    let z = pt[stride + 2];

    // console.log({ x, y, z });

    x *= distanceScale;
    y *= distanceScale;
    z *= distanceScale;

    masses[i].mesh.position.set(x, y, z);
  }
};

const timestepSliderElement = document.getElementById(
  "timestepSlider"
) as HTMLInputElement;

timestepSliderElement.min = "0";
timestepSliderElement.value = t.toString();
timestepSliderElement.max = (nTimestep - 1).toString();

timestepSliderElement.oninput = (e) => {
  let slider = e.target as HTMLInputElement;

  const value = parseInt(slider.value);

  if (value < p.length) {
    t = value;
    updatePlanetPos();
    playing = false;
    playButton.innerText = ">";
  }
};

const playButton = document.getElementById("playButton") as HTMLButtonElement;

playButton.onclick = () => {
  playing = !playing;

  if (playing) {
    playButton.innerText = "||";
  } else {
    playButton.innerText = ">";
  }
};

const playbackSpeedDropdown = document.getElementById(
  "playbackSpeedDropdown"
) as HTMLSelectElement;

playbackSpeedDropdown.value = speed.toString();

playbackSpeedDropdown.onchange = (e) => {
  let dropDown = e.target as HTMLSelectElement;

  speed = parseInt(dropDown.value);
};

const speedOptions = [1, 100, 1000];

for (let i = 0; i < speedOptions.length; i++) {
  const opt = document.createElement("option");
  opt.value = speedOptions[i].toString();
  opt.innerHTML = speedOptions[i].toString();
  playbackSpeedDropdown.appendChild(opt);
}

// @ts-ignore
var intervalId = window.setInterval(function () {
  if (playing) {
    if (t + speed < nTimestep) {
      t += speed;
      updatePlanetPos();
      timestepSliderElement.value = t.toString();
    }
  }
}, 10);
const earthR = 6371 * 1000; //in m;

const distanceScale = 0.00000001;

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(earthR * distanceScale),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide })
);

scene.add(earth);

const d = earthR * distanceScale * 0.5;

const satellite = new THREE.Mesh(
  new THREE.SphereGeometry(d),
  new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide })
);

scene.add(satellite);

// const sun = new THREE.Mesh(
//   new THREE.SphereGeometry(earthR * 10),
//   new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
// );

// sun.position.x += earthR * 50;

// scene.add(sun);

const earthT = 86400;
const earthM = 5.972 * Math.pow(10, 24);
const G = 6.6732 * Math.pow(10, -11);

const { orbitRadius, orbitVelocity } =
  calculateGeostationaryOrbitVelocityAndRadius(earthT, earthM, G);

satellite.position.set(
  orbitRadius * distanceScale,
  0 * distanceScale,
  0 * distanceScale
);

export interface mass {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  m: number;
  mesh: THREE.Mesh;
}

const masses: mass[] = [];

//satellite
console.log({ orbitRadius, orbitVelocity });
masses.push({
  x: orbitRadius,
  y: 0,
  z: 0,
  vx: 0,
  vy: 0,
  vz: orbitVelocity,
  m: satelliteM,
  mesh: satellite,
});
//earth
masses.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, m: earthM, mesh: earth });

const nMasses = masses.length;

console.log("started sim");

console.log(masses);

const p = runOrbitSim(nTimestep, dt, masses);

console.log("stopped sim");

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
