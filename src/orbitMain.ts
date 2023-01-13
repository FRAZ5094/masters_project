import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { calculateGeostationaryOrbitVelocityAndRadius } from "./orbitFunctions/parameters";
import { runOrbitSim } from "./orbitSim";
import earthTexturePath from "./assets/8k_earth_daymap.jpg";
import earthNormalMapPath from "./assets/8k_earth_normal_map.jpg";
import { downloadFile } from "./orbitFunctions/misc/misc";
import { orbitRK4 } from "./orbitFunctions/integrators";
import { IntegratorFunction } from "./orbitFunctions/integrators";
import { SoftBodyParams } from "./softBodySim";
import { GUI } from "dat.gui";
const gui = new GUI({ autoPlace: true, width: 300 });

let t = 0;
let playing = false;
let speed = 1;
let targetFPS = 60;
const speedOptions = [1, 50, 100, 1000, 10000];
let satOrbitData: number[] | null;
let satOrbitDataFields: string[] | null;
let nDataFields: number | null;
let nTimestep: number | null;

const oneDayInSeconds = 86400;
const oneYearInSeconds = oneDayInSeconds * 365;

const integrator: IntegratorFunction = orbitRK4;
// const dt: number = 5 * 60; //in seconds
// const simulationTime: number = oneYearInSeconds * 0.1;
const saveInterval: number = 100;
const softBodyParams: SoftBodyParams = {
  AMR: 1,
  k: 0,
  dampingRatio: 0,
  reflectivity: 0.993,
  dt: 5 * 60,
  d: 1,
  nCols: 20,
  integrator: "rk4",
  lightForce: true,
  selfShadowing: false,
  selfCollision: false,
};

const orbitParams = {
  applyGravity: true,
  applySRP: true,
  applyShadow: true,
  useSoftBody: true,
  simulationDays: 0,
  simulationYears: 5,
};

export type OrbitParams = typeof orbitParams;

gui.add(softBodyParams, "AMR", 1, 100).name("Area to mass ratio");
gui.add(softBodyParams, "nCols", 1, 100).name("nCols");
gui.add(softBodyParams, "dt").name("Time step size (s)");
gui
  .add(orbitParams, "simulationDays", 0, 365)
  .step(1)
  .name("Number of days in simulation");
gui
  .add(orbitParams, "simulationYears", 0, 100)
  .step(1)
  .name("Number of years in simulation");
gui.add(softBodyParams, "lightForce").name("Apply light force?");
gui.add(softBodyParams, "selfShadowing").name("Use self-shadowing?");

gui.add(orbitParams, "applyGravity").name("Apply gravity?");
gui.add(orbitParams, "applySRP").name("Apply solar radiation pressure?");
gui.add(orbitParams, "applyShadow").name("Apply Earth shadow?");
gui.add(orbitParams, "useSoftBody").name("Use soft body model?");

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
camera.up = new THREE.Vector3(0, 0, 1);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(0.3);

scene.add(axesHelper);

camera.position.set(0, 0, 1).setLength(1);
controls.update();

const ambient = new THREE.AmbientLight(0xffffff, 0.2);

scene.add(ambient);

const updatePlanetPos = () => {
  const satStride = t * nDataFields!;

  let satX = satOrbitData![satStride + 0];
  let satY = satOrbitData![satStride + 1];
  let satZ = satOrbitData![satStride + 2];

  satX *= distanceScale;
  satY *= distanceScale;
  satZ *= distanceScale;

  satellite.position.set(satX, satY, satZ);
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.001),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );

  sphere.position.set(satX, satY, satZ);

  scene.add(sphere);
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
      timeStepIText.innerHTML = `Time step index = ${t}`;
      timeDisplayText.innerHTML = `Time from start of sim (s) = 0`;
    }
  }
};

const simulateButton = document.getElementById(
  "simulateButton"
) as HTMLButtonElement;

simulateButton.onclick = () => {
  console.log("sim started");

  gui.domElement.style.opacity = "0.5";
  gui.domElement.style.pointerEvents = "none";

  const orbitReturn = runOrbitSim(
    satP,
    satV,
    integrator,
    softBodyParams,
    orbitParams,
    saveInterval
  );

  satOrbitData = orbitReturn.satOrbitData;
  satOrbitDataFields = orbitReturn.satOrbitDataFields;
  nDataFields = satOrbitDataFields.length;
  nTimestep = satOrbitData.length / nDataFields;
  timestepSliderElement.max = (satOrbitData.length / nDataFields).toString();

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

  for (let i = 0; i < nDataFields!; i++) {
    satDataToSave += satOrbitDataFields![i] + ",";
  }
  satDataToSave += "\n";

  for (let t = 0; t < nTimestep!; t++) {
    const stride = t * nDataFields!;

    for (let i = 0; i < nDataFields!; i++) {
      satDataToSave += `${satOrbitData[stride + i]},`;
    }
  }
  satDataToSave = satDataToSave.slice(0, -1);

  console.log("downloading data...");

  const satFileName = "sat_" + baseFileName + ".txt";

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
    nDataFields = null;
    nTimestep = null;
  }
};

const timeStepIText = document.getElementById("timeStepDisplay")!;
const timeDisplayText = document.getElementById("timeDisplay")!;
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

earth.rotateX(Math.PI / 2);

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

satellite.rotateY(Math.PI / 2);

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
  x: moonOrbitR,
  y: 0,
  z: 0,
  vx: 0,
  vy: moonOrbitV,
  vz: 0,
  m: moonM,
  mesh: moon,
});
moon.position.z = moonOrbitR * distanceScale;

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
