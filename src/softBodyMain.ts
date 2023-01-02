import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getSpringIndicesArray } from "./softBodyFunctions/springArray/springArray";
import { integrators, simulate, SimulationParams } from "./softBodySim";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import accelerationMagFragment from "./shaders/accelerationMagFragment.glsl";
import { getTrianglesAttachedToVertexArray } from "./softBodyFunctions/vertexNormals/vertexNormals";
import {
  calculateA,
  calculateV,
  generateAccelerationHeatmap,
  handleAccelerationArrows,
  handleSurfaceNormalArrows,
  handleVelocityArrows,
  handleVertexNormalArrows,
} from "./softBodyFunctions/arrows/arrows";

console.log("ran main.ts");

let t = 0;
let speed = 1;
let playing = false;

const d = 1;
const integrator: integrators = "rk4";
const nTimestep: number = 1;

let p: Float32Array;
let nVertices: number;
let nRows: number;
let nCols: number;
let triangleIndicesArray: Uint16Array;
let trianglesAttachedToVertexArray: number[][];

const simulationParams: SimulationParams = {
  d: 1,
  AM_ratio: 1,
  nWidthSegments: 20,
  k: 1,
  dampingRatio: 0.1,
  dt: 0.01,
  lightForce: true,
  selfShadowing: false,
  selfCollision: false,
};

let showSurfaceNormals = false;
let surfaceNormalArrows: THREE.ArrowHelper[] = [];
let showVertexNormals = false;
let vertexNormalArrows: THREE.ArrowHelper[] = [];
let showAccelerationArrows = false;
let accelerationArrows: THREE.ArrowHelper[] = [];
let showVelocityArrows = false;
let velocityArrows: THREE.ArrowHelper[] = [];
let maxArrowLength: number = 0.1;

let showAccelerationHeatmap = false;
let uaMagArray: Float32Array;

//applying springs in 3x3 around point
const xDepth = 1;
const yDepth = 1;

const runSim = async () => {
  let p = geometry.attributes.position.array as Float32Array;
  let v = new Float32Array(p.length);

  nVertices = p.length / 3;

  uaMagArray = new Float32Array(nVertices);

  geometry.setAttribute("uaMag", new THREE.BufferAttribute(uaMagArray, 1));

  nCols = simulationParams.nWidthSegments + 1;
  nRows = nCols;

  const springArrays = getSpringIndicesArray(p, nRows, nCols, xDepth, yDepth);

  let springCount = 0;

  for (let i = 0; i < springArrays.length; i++) {
    springCount += springArrays[i].length;
  }

  console.log("Number of springs: " + springCount);

  timestepSliderElement.max = (nTimestep - 1).toString();

  triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

  trianglesAttachedToVertexArray = getTrianglesAttachedToVertexArray(
    triangleIndicesArray,
    nRows,
    nCols
  );

  const aMag = 0.1;

  const lightDir = [0, 0, -1];

  for (let t = 0; t < nTimestep; t++) {
    const simReturn = simulate(
      simulationParams,
      p,
      v,
      aMag,
      lightDir,
      springArrays,
      integrator,
      trianglesAttachedToVertexArray,
      triangleIndicesArray
    );

    p = simReturn.p_new;
    v = simReturn.v_new;
    console.log(simReturn.a);
  }
};

const timestepSliderElement = document.getElementById(
  "timestepSlider"
) as HTMLInputElement;

timestepSliderElement.min = "0";
timestepSliderElement.value = t.toString();

timestepSliderElement.oninput = (e) => {
  let slider = e.target as HTMLInputElement;

  const value = parseInt(slider.value);

  if (value < p.length) {
    t = value;
    updateModel();
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

const simulateButton = document.getElementById(
  "simulateButton"
) as HTMLButtonElement;

simulateButton.onclick = () => runSim();

const updateModel = (): void => {
  const pt = p.slice(t * nVertices * 3, (t + 1) * nVertices * 3);

  const pBuffer = new THREE.BufferAttribute(pt, 3);

  geometry.setAttribute("position", pBuffer);

  if (showAccelerationArrows) {
    //prettier-ignore
    const pt_minus1 = p.slice((t - 1) * nVertices * 3,t * nVertices * 3);
    //prettier-ignore
    const pt_plus1 = p.slice((t + 1) * nVertices * 3,(t + 2) * nVertices * 3);

    accelerationArrows = handleAccelerationArrows(
      accelerationArrows,
      pt_minus1,
      pt,
      pt_plus1,
      simulationParams.dt,
      scene,
      maxArrowLength
    );
  }

  if (showVelocityArrows) {
    const pt_minus1 = p.slice((t - 1) * nVertices * 3, t * nVertices * 3);
    velocityArrows = handleVelocityArrows(
      velocityArrows,
      pt_minus1,
      pt,
      simulationParams.dt,
      scene,
      maxArrowLength
    );
  }

  if (showSurfaceNormals) {
    handleSurfaceNormalArrows(
      surfaceNormalArrows,
      pt,
      triangleIndicesArray,
      scene,
      maxArrowLength
    );
  }

  if (showVertexNormals) {
    vertexNormalArrows = handleVertexNormalArrows(
      vertexNormalArrows,
      pt,
      trianglesAttachedToVertexArray,
      scene,
      maxArrowLength
    );
  }

  if (showAccelerationHeatmap) {
    //prettier-ignore
    const pt_minus1 = p.slice((t - 1) * nVertices * 3,t * nVertices * 3);
    //prettier-ignore
    const pt_plus1 = p.slice((t + 1) * nVertices * 3,(t + 2) * nVertices * 3);

    const vt = calculateV(pt, pt_minus1, simulationParams.dt);

    const vt_plus1 = calculateV(pt_plus1, pt, simulationParams.dt);

    const aVectors = calculateA(vt, vt_plus1, simulationParams.dt);

    const aMagArray = generateAccelerationHeatmap(aVectors);

    for (let i = 0; i < nVertices; i++) {
      uaMagArray[i] = aMagArray[i];
    }
    geometry.attributes.uaMag.needsUpdate = true;
  }
};

// @ts-ignore
var intervalId = window.setInterval(function () {
  if (playing) {
    if (t + speed < nTimestep) {
      t += speed;
      updateModel();
      timestepSliderElement.value = t.toString();
    }
  }
}, simulationParams.dt * 1000);

const canvas = document.getElementById("three_canvas")! as HTMLCanvasElement;

var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
// renderer.setClearColor(0xffffff);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.width / canvas.height,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);

// camera.position.set(1, 0.5, 2).setLength(1);
camera.position.set(0, 0, 1).setLength(1);
controls.update();

const geometry = new THREE.PlaneGeometry(
  d,
  d,
  simulationParams.nWidthSegments,
  simulationParams.nWidthSegments
);

// console.log(`Set up and simulation took ${endTime - startTime} milliseconds`);

const plane = new THREE.Mesh(
  geometry,
  new THREE.MeshNormalMaterial({ wireframe: true })
);

// const plane = new THREE.Mesh(
//   geometry,
//   new THREE.ShaderMaterial({
//     vertexShader,
//     fragmentShader: accelerationMagFragment,
//     side: THREE.DoubleSide,
//   })
// );

// const wireFrame = new THREE.Mesh(
//   geometry,
//   new THREE.MeshBasicMaterial({
//     color: 0x000000,
//     wireframe: true,
//   })
// );

// const scale = 1.0;

// wireFrame.scale.set(1.0, 1.0, scale);
// scene.add(wireFrame);
scene.add(plane);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

// playButton.click();

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);

// window.addEventListener('resize', function() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

document.addEventListener("keydown", (e: KeyboardEvent) => {
  const key = e.key;

  // console.log(key);

  if (key == "ArrowRight" && t < nTimestep) {
    if (playing) playButton.click();
    t += 1;
    updateModel();
  } else if (key == "ArrowLeft" && t > 0) {
    if (playing) playButton.click();
    t -= 1;
    updateModel();
  } else if (key == " ") {
    playButton.click();
  }
});
