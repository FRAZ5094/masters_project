import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getSpringIndicesArray } from "./functions/springArray/springArray";
import { runSim } from "./simulation";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";
import {
  calculateCentroidOfTriangle,
  calculateSurfaceNormals,
} from "./functions/vertexNormals/vertexNormals";

console.log("ran main.ts");

let t = 0;
let speed = 1;
let playing = false;

const d = 1;
const AM_ratio = 0.1;
const nWidthSegments = 10;
const nHeightSegments = nWidthSegments;
const nCols = nWidthSegments + 1;
const nRows = nHeightSegments + 1;
const k = 20;
const dampingRatio = 1;
const dt = 0.01;
const playbackFPS = 24;

//applying springs in 3x3 around point
const xDepth = 1;
const yDepth = 1;

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

const updateModel = (): void => {
  const p_t = p.slice(t * vertices.count * 3, (t + 1) * vertices.count * 3);

  const pBuffer = new THREE.BufferAttribute(p_t, 3);

  geometry.setAttribute("position", pBuffer);
  geometry.computeVertexNormals();

  surfaceNormalArrows.forEach((arrow) => {
    scene.remove(arrow);
  });

  const surfaceNormals = calculateSurfaceNormals(p_t, triangleIndicesArray);

  for (let i = 0; i < nFaces; i++) {
    if (true) {
      const stride = i * 3;

      const nx = surfaceNormals[stride + 0];
      const ny = surfaceNormals[stride + 1];
      const nz = surfaceNormals[stride + 2];

      const n = new THREE.Vector3(nx, ny, nz);

      const ax = p_t[triangleIndicesArray[stride + 0] * 3 + 0];
      const ay = p_t[triangleIndicesArray[stride + 0] * 3 + 1];
      const az = p_t[triangleIndicesArray[stride + 0] * 3 + 2];

      const bx = p_t[triangleIndicesArray[stride + 1] * 3 + 0];
      const by = p_t[triangleIndicesArray[stride + 1] * 3 + 1];
      const bz = p_t[triangleIndicesArray[stride + 1] * 3 + 2];

      const cx = p_t[triangleIndicesArray[stride + 2] * 3 + 0];
      const cy = p_t[triangleIndicesArray[stride + 2] * 3 + 1];
      const cz = p_t[triangleIndicesArray[stride + 2] * 3 + 2];

      const [ox, oy, oz] = calculateCentroidOfTriangle(
        ax,
        ay,
        az,
        bx,
        by,
        bz,
        cx,
        cy,
        cz
      );

      const o = new THREE.Vector3(ox, oy, oz);

      const arrow = new THREE.ArrowHelper(n, o, 0.25);

      scene.add(arrow);

      surfaceNormalArrows.push(arrow);
    }
  }
};

var intervalId = window.setInterval(function () {
  if (playing) {
    if (t + speed < nTimestep) {
      t += speed;
      updateModel();
      timestepSliderElement.value = t.toString();
    }
  }
}, dt * 1000);

const canvas = document.getElementById("three_canvas")! as HTMLCanvasElement;

var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
// document.body.appendChild( renderer.domElement );

// const stats = new Stats();
// stats.showPanel(0);
// document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.width / canvas.height,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(1, 0.5, 2).setLength(2);
controls.update();

const geometry = new THREE.PlaneGeometry(d, d, nWidthSegments, nHeightSegments);

const vertices = geometry.attributes.position;

const vertexPosArray = vertices.array as Float32Array;

const springArrays = getSpringIndicesArray(
  vertexPosArray,
  nRows,
  nCols,
  xDepth,
  yDepth
);

let springCount = 0;

for (let i = 0; i < springArrays.length; i++) {
  springCount += springArrays[i].length;
}

console.log("Number of springs: " + springCount);

const nTimestep: number = 200;
// const nTimestep: number = 200000;

timestepSliderElement.max = (nTimestep - 1).toString();

var startTime = performance.now();

const mass = (d * d) / AM_ratio;

const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

const nFaces = triangleIndicesArray.length / 3;

const p = runSim(
  vertexPosArray,
  triangleIndicesArray,
  mass,
  k,
  dampingRatio,
  springArrays,
  nTimestep,
  dt
);

var endTime = performance.now();

console.log(`Set up and simulation took ${endTime - startTime} milliseconds`);

const plane = new THREE.Mesh(
  geometry,
  new THREE.MeshNormalMaterial({
    wireframe: true,
  })
);

scene.add(plane);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const surfaceNormalArrows: THREE.ArrowHelper[] = [];

playing = true;

const animate = async (time: number) => {
  //remove all the arrow helpers from the previous frame
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);

// window.addEventListener('resize', function() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });
