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
import { round } from "./softBodyFunctions/misc/misc";
import { IndexToRowAndCol } from "./softBodyFunctions/IndexRowsCols/IndexRowsCols";

console.log("ran main.ts");

let t = 0;
let speed = 1;
let playing = false;

const d = 1;
const nTimestep: number = 1000;

let p: Float32Array;
let nVertices: number;
let nRows: number;
let nCols: number;
let triangleIndicesArray: Uint16Array;
let trianglesAttachedToVertexArray: number[][];
const speedOptions = [1, 50, 100, 1000, 10000];

const simulationParams: SimulationParams = {
  d: 1,
  AM_ratio: 1,
  nWidthSegments: 19,
  k: 80,
  dampingRatio: 0,
  dt: 20,
  integrator: "rk4",
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
  //pt will hold the positions for the current time step
  let pt = geometry.attributes.position.array as Float32Array;
  nVertices = pt.length / 3;

  console.log("Number of vertices: ", nVertices);

  //vt will hold the velocities for the current time step
  let vt = new Float32Array(pt.length);

  //p will hold the positions of all the vertices for all the time steps
  p = new Float32Array(nVertices * 3 * nTimestep);

  uaMagArray = new Float32Array(nVertices);

  geometry.setAttribute("uaMag", new THREE.BufferAttribute(uaMagArray, 1));

  nCols = simulationParams.nWidthSegments + 1;
  nRows = nCols;

  const springArrays = getSpringIndicesArray(pt, nRows, nCols, xDepth, yDepth);

  let springCount = 0;
  let verticalSpringCount = 0;
  let horizontalSpringCount = 0;
  let diagonalSpringCount = 0;

  for (let i = 0; i < springArrays.length; i++) {
    const springArray = springArrays[i];
    springCount += springArray.length;
    const [rowForI, colForI] = IndexToRowAndCol(i, nRows, nCols);
    for (let j = 0; j < springArray.length; j++) {
      const [rowForJ, colForJ] = IndexToRowAndCol(
        springArray[j][0],
        nRows,
        nCols
      );
      if (rowForI - rowForJ == 0) {
        horizontalSpringCount += 1;
      } else if (colForI - colForJ == 0) {
        verticalSpringCount += 1;
      } else {
        diagonalSpringCount += 1;
      }
    }
  }

  console.log("Number of springs: " + springCount);
  console.log("Number of vertical springs: " + verticalSpringCount);
  console.log("Number of horizontal springs: " + horizontalSpringCount);
  console.log("Number of diagonal springs: " + diagonalSpringCount);

  timestepSliderElement.max = (nTimestep - 1).toString();

  triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

  trianglesAttachedToVertexArray = getTrianglesAttachedToVertexArray(
    triangleIndicesArray,
    nRows,
    nCols
  );

  const aMag = 4.57 * Math.pow(10, -6);

  const lightDir = [0, 0, -1];

  const start = performance.now();

  //copy initial pos of all vertices into p
  for (let i = 0; i < nVertices; i++) {
    const stride = i * 3;
    p[stride + 0] = pt[stride + 0];
    p[stride + 1] = pt[stride + 1];
    p[stride + 2] = pt[stride + 2];
  }

  const simLoopStartTime = performance.now();

  for (let t = 1; t < nTimestep + 1; t++) {
    if (t % (nTimestep / 100) == 0) {
      const timeElapsed = performance.now() - simLoopStartTime;

      const estimatedTotalSimTime: number =
        ((performance.now() - simLoopStartTime) / t) * nTimestep;
      console.log(
        "Simulation progress: " +
          round((t / nTimestep) * 100, 0) +
          "% " +
          round((estimatedTotalSimTime - timeElapsed) / 1000, 1) +
          " seconds left"
      );
    }
    const simReturn = simulate(
      simulationParams,
      pt,
      vt,
      aMag,
      lightDir,
      springArrays,
      trianglesAttachedToVertexArray,
      triangleIndicesArray
    );

    pt = simReturn.p_new;
    vt = simReturn.v_new;

    const returnA = simReturn.a;
    const aReturnMag = Math.sqrt(
      returnA[0] * returnA[0] +
        returnA[1] * returnA[1] +
        returnA[2] * returnA[2]
    );

    if (Number.isNaN(aReturnMag)) {
      console.log("UNSTABLE!");
      console.log(t);
      break;
    }

    for (let i = 0; i < nVertices; i++) {
      const pStride = nVertices * 3 * t + i * 3;
      const stride = i * 3;

      p[pStride + 0] = pt[stride + 0];
      p[pStride + 1] = pt[stride + 1];
      p[pStride + 2] = pt[stride + 2];
    }
  }

  const delta_t = (performance.now() - start) / 1000; //in seconds

  const timeStepPerSecond = nTimestep / delta_t;

  const orbitdt = 60 * 20; //20 mins

  const orbitNtimesteps = (60 * 60 * 24 * 365 * 30) / orbitdt;

  console.log({ orbitNtimesteps });

  console.log("Estimated time to complete 30 year sim (seconds):");
  console.log(orbitNtimesteps / timeStepPerSecond);

  console.log({ timeStepPerSecond });

  console.log("sim done");
  console.log(p);
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

for (let i = 0; i < speedOptions.length; i++) {
  const opt = document.createElement("option");
  opt.value = speedOptions[i].toString();
  opt.innerHTML = speedOptions[i].toString();
  playbackSpeedDropdown.appendChild(opt);
}

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
