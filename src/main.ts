import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getSpringIndicesArray } from "./functions/springArray/springArray";
import { integrators, runSim } from "./simulation";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";
import {
  calculateCentroidOfTriangle,
  calculateSurfaceNormals,
  calculateVertexNormals,
  getTrianglesAttachedToVertexArray,
} from "./functions/vertexNormals/vertexNormals";

console.log("ran main.ts");

let t = 0;
let speed = 1;
let playing = false;

const nTimestep: number = 600;
const d = 1;
const AM_ratio = 1;
const nWidthSegments = 20;
const nHeightSegments = nWidthSegments;
const nCols = nWidthSegments + 1;
const nRows = nHeightSegments + 1;
const k = 0.1;
const dampingRatio = 0.1;
const dt = 0.05;
let showSurfaceNormals = false;
let showVertexNormals = false;

const integrator: integrators = "rk4";

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

playbackSpeedDropdown.onchange = (e) => {
  let dropDown = e.target as HTMLSelectElement;

  speed = parseInt(dropDown.value);
};

const updateModel = (): void => {
  const p_t = p.slice(t * vertices.count * 3, (t + 1) * vertices.count * 3);

  const pBuffer = new THREE.BufferAttribute(p_t, 3);

  geometry.setAttribute("position", pBuffer);
  geometry.computeVertexNormals();

  if (showSurfaceNormals) {
    surfaceNormalArrows.forEach((arrow) => {
      scene.remove(arrow);
    });

    surfaceNormalArrows = [];

    const surfaceNormals = calculateSurfaceNormals(p_t, triangleIndicesArray);

    for (let i = 0; i < nFaces; i++) {
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

      const arrow = new THREE.ArrowHelper(n, o, 0.05);

      scene.add(arrow);

      surfaceNormalArrows.push(arrow);
    }
  }

  if (showVertexNormals) {
    vertexNormalArrows.forEach((arrow) => {
      scene.remove(arrow);
    });

    vertexNormalArrows = [];

    const vertexNormals = calculateVertexNormals(
      trianglesAttachedToVertexArray,
      p_t
    );

    const nVertices = nRows * nCols;

    for (let i = 0; i < nVertices; i++) {
      const stride = i * 3;

      const dir = new THREE.Vector3(
        vertexNormals[stride + 0],
        vertexNormals[stride + 1],
        vertexNormals[stride + 2]
      );

      const origin = new THREE.Vector3(
        p_t[stride + 0],
        p_t[stride + 1],
        p_t[stride + 2]
      );

      const arrow = new THREE.ArrowHelper(dir, origin, 0.05);

      scene.add(arrow);

      vertexNormalArrows.push(arrow);
    }
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
}, dt * 1000);

const canvas = document.getElementById("three_canvas")! as HTMLCanvasElement;

var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
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

// camera.position.set(1, 0.5, 2).setLength(1);
camera.position.set(0, 0, 1).setLength(1);
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

timestepSliderElement.max = (nTimestep - 1).toString();

const mass = (d * d) / AM_ratio;

const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

const trianglesAttachedToVertexArray = getTrianglesAttachedToVertexArray(
  triangleIndicesArray,
  nRows,
  nCols
);

const nFaces = triangleIndicesArray.length / 3;

const p = runSim(
  vertexPosArray,
  mass,
  k,
  dampingRatio,
  springArrays,
  nTimestep,
  dt,
  integrator,
  trianglesAttachedToVertexArray,
  triangleIndicesArray
);

// console.log(`Set up and simulation took ${endTime - startTime} milliseconds`);

const plane = new THREE.Mesh(
  geometry,
  new THREE.MeshNormalMaterial({
    wireframe: true,
  })
);

scene.add(plane);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

let surfaceNormalArrows: THREE.ArrowHelper[] = [];
let vertexNormalArrows: THREE.ArrowHelper[] = [];

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
