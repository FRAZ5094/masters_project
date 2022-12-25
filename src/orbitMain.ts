import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { calculateGeostationaryOrbitVelocityAndRadius } from "./orbitFunctions/parameters";
import { runOrbitSim } from "./orbitSim";
import earthTexturePath from "./assets/8k_earth_daymap.jpg";
import earthNormalMapPath from "./assets/8k_earth_normal_map.jpg";
import { downloadFile } from "./orbitFunctions/misc/misc";

let t = 0;
let playing = false;
let speed = 1;
let targetFPS = 60;
const speedOptions = [1, 50, 100, 1000, 10000];
let satOrbitData: number[] | null;
let nSatDataPieces: number | null;
let nTimestep: number | null;
let massesData: number[] | null;

const oneDayInSeconds = 86400;
const oneYearInSeconds = oneDayInSeconds * 365;

const dt: number = 100; //in seconds
const dtShadow: number = 1; //in seconds
const simulationTime: number = oneYearInSeconds * 10;
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

const axesHelper = new THREE.AxesHelper(0.3);

scene.add(axesHelper);

camera.position.set(0, 1, 0).setLength(1);
controls.update();

const ambient = new THREE.AmbientLight(0xffffff, 0.2);

scene.add(ambient);

const updatePlanetPos = () => {
  const satStride = t * nSatDataPieces!;

  let satX = satOrbitData![satStride + 0];
  let satY = satOrbitData![satStride + 1];
  let satZ = satOrbitData![satStride + 2];

  satX *= distanceScale;
  satY *= distanceScale;
  satZ *= distanceScale;

  satellite.position.set(satX, satY, satZ);

  for (let i = 0; i < nMasses; i++) {
    const stride = nMasses * 7 * t + i * 7;

    let x = massesData![stride + 0];
    let y = massesData![stride + 1];
    let z = massesData![stride + 2];

    x *= distanceScale;
    y *= distanceScale;
    z *= distanceScale;

    // if (i == trailsIndex) {
    //   const sphere = new THREE.Mesh(
    //     new THREE.SphereGeometry(0.001),
    //     new THREE.MeshBasicMaterial({ color: 0xffffff })
    //   );

    //   sphere.position.set(x, y, z);

    //   scene.add(sphere);
    // }
    // console.log({ x, y, z });

    massObjects[i].mesh.position.set(x, y, z);
  }
};

const timestepSliderElement = document.getElementById(
  "timestepSlider"
) as HTMLInputElement;

timestepSliderElement.min = "0";
timestepSliderElement.value = "0";

timestepSliderElement.oninput = (e) => {
  let slider = e.target as HTMLInputElement;

  const value = parseInt(slider.value);

  t = value;
  updatePlanetPos();
  playing = false;
  playButton.innerText = ">";
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

  clearInterval(intervalId);

  intervalId = window.setInterval(intervalFunction, (1 / targetFPS) * 1000);
};

for (let i = 0; i < speedOptions.length; i++) {
  const opt = document.createElement("option");
  opt.value = speedOptions[i].toString();
  opt.innerHTML = speedOptions[i].toString();
  playbackSpeedDropdown.appendChild(opt);
}

const intervalFunction = () => {
  if (playing) {
    if (t + speed < nTimestep!) {
      t += speed;
      updatePlanetPos();
      timestepSliderElement.value = t.toString();
    }
  }
};

const simulateButton = document.getElementById(
  "simulateButton"
) as HTMLButtonElement;

simulateButton.onclick = () => {
  console.log("sim started");

  // console.log({
  //   satP,
  //   satV,
  //   simulationTime,
  //   dt,
  //   dtShadow,
  //   masses: massObjects,
  // });

  const orbitReturn = runOrbitSim(
    satP,
    satV,
    simulationTime,
    dt,
    dtShadow,
    massObjects
  );

  satOrbitData = orbitReturn.satOrbitData;
  nSatDataPieces = orbitReturn.nSatDataPieces;
  nTimestep = satOrbitData.length / nSatDataPieces;
  massesData = orbitReturn.massesData;
  timestepSliderElement.max = (satOrbitData.length / nSatDataPieces).toString();

  console.log("sim finished");
};

const saveSimDataButton = document.getElementById(
  "saveSimButton"
) as HTMLButtonElement;

saveSimDataButton.onclick = () => {
  if (satOrbitData == null) {
    console.log("no simulation data yet!");
    return;
  }

  const baseFileName = window.prompt("What do you want to name the file");

  if (baseFileName == null) {
    //cancel button as pressed;
    return;
  }

  let satDataToSave: string = "";

  for (let t = 0; t < nTimestep!; t++) {
    const stride = t * nSatDataPieces!;

    for (let i = 0; i < nSatDataPieces!; i++) {
      satDataToSave += `${satOrbitData[stride + i]},`;
    }
  }
  satDataToSave = satDataToSave.slice(0, -1);

  console.log("downloading data...");

  const satFileName = "sat_" + baseFileName + "_" + Date.now() + ".txt";

  downloadFile(satFileName, satDataToSave);
};

const clearSimDataButton = document.getElementById(
  "clearSimDataButton"
) as HTMLButtonElement;

clearSimDataButton.onclick = () => {
  const toClear = window.confirm(
    "Are you sure you want to clear the sim data?"
  );

  if (toClear) {
    satOrbitData = null;
    nSatDataPieces = null;
    nTimestep = null;
    massesData = null;
  }
};

// @ts-ignore
let intervalId = window.setInterval(intervalFunction, (1 / targetFPS) * 1000);

const earthR = 6371 * 1000; //in m;

const distanceScale = 0.00000001;

const earthTexture = new THREE.TextureLoader().load(earthTexturePath);
const earthNormalMap = new THREE.TextureLoader().load(earthNormalMapPath);

const normalScale = 20;

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(earthR * distanceScale),
  new THREE.MeshPhongMaterial({
    shininess: 50,
    map: earthTexture,
    normalMap: earthNormalMap,
    normalScale: new THREE.Vector2(normalScale, normalScale),
    side: THREE.DoubleSide,
  })
);

earth.castShadow = true;
earth.receiveShadow = true;

scene.add(earth);

const d = earthR * distanceScale * 1;

const satellite = new THREE.Mesh(
  new THREE.PlaneGeometry(d, d, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
);

satellite.castShadow = true;
satellite.receiveShadow = true;

scene.add(satellite);

const sunR = earthR * distanceScale * 10;

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(sunR),
  new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
);

sun.position.x += earthR * distanceScale * 50;

scene.add(sun);

const moonR = 1737.4 * 1000;

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(moonR * distanceScale),
  new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
);

scene.add(moon);

const sunLight = new THREE.PointLight(0xffffff, 1, sunR * 50);

sunLight.position.x = sun.position.x;
sunLight.position.y = sun.position.y;
sunLight.position.z = sun.position.z;

sunLight.castShadow = true;

scene.add(sunLight);

const earthT = 86400;
const earthM = 5.972 * Math.pow(10, 24);
const G = 6.6732 * Math.pow(10, -11);

const { orbitRadius, orbitVelocity } =
  calculateGeostationaryOrbitVelocityAndRadius(earthT, earthM, G);

console.log(orbitRadius);

satellite.position.set(
  orbitRadius * distanceScale,
  0 * distanceScale,
  0 * distanceScale
);

export interface mass {
  name: string;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  m: number;
  mesh: THREE.Mesh;
}

const satP = [orbitRadius, 0, 0];
const satV = [0, orbitVelocity, 0];

const massObjects: mass[] = [];

massObjects.push({
  name: "earth",
  x: 0,
  y: 0,
  z: 0,
  vx: 0,
  vy: 0,
  vz: 0,
  m: earthM,
  mesh: earth,
});

const moonOrbitR = 384400 * 1000;
const moonOrbitV = 1.1 * 1000;
const moonM = 7.34767309 * Math.pow(10, 22);
massObjects.push({
  name: "moon",
  x: 0,
  y: moonOrbitR,
  z: 0,
  vx: 0,
  vy: moonOrbitV,
  vz: 0,
  m: moonM,
  mesh: moon,
});
moon.position.z = moonOrbitR * distanceScale;

const nMasses = massObjects.length;

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
