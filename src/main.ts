import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getSpringIndicesArray } from "./functions/springArray/springArray";
import { integrators, runSim } from "./simulation";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";
import {
  calculateVertexNormals,
  getTrianglesAttachedToVertexArray,
} from "./functions/vertexNormals/vertexNormals";
import {
  handleAccelerationArrows,
  handleSurfaceNormalArrows,
  handleVelocityArrows,
  handleVertexNormalArrows,
} from "./functions/arrows/arrows";

console.log("ran main.ts");

let t = 0;
let speed = 1;
let playing = false;

const nTimestep: number = 20;
const d = 1;
const AM_ratio = 1;
const nWidthSegments = 20;
const nHeightSegments = nWidthSegments;
const nCols = nWidthSegments + 1;
const nRows = nHeightSegments + 1;
const k = 0.1;
const dampingRatio = 0.1;
const dt = 0.05;
const integrator: integrators = "rk4";

let showSurfaceNormals = false;
let surfaceNormalArrows: THREE.ArrowHelper[] = [];
let showVertexNormals = true;
let vertexNormalArrows: THREE.ArrowHelper[] = [];
let showAccelerationArrows = false;
let accelerationArrows: THREE.ArrowHelper[] = [];
let showVelocityArrows = false;
let velocityArrows: THREE.ArrowHelper[] = [];
let maxArrowLength: number = 0.1;

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
  const pt = p.slice(t * vertices.count * 3, (t + 1) * vertices.count * 3);

  const pBuffer = new THREE.BufferAttribute(pt, 3);

  geometry.setAttribute("position", pBuffer);

  if (showAccelerationArrows) {
    //prettier-ignore
    const pt_minus1 = p.slice((t - 1) * vertices.count * 3,t * vertices.count * 3);
    //prettier-ignore
    const pt_plus1 = p.slice((t + 1) * vertices.count * 3,(t + 2) * vertices.count * 3);

    accelerationArrows = handleAccelerationArrows(
      accelerationArrows,
      pt_minus1,
      pt,
      pt_plus1,
      dt,
      scene,
      maxArrowLength
    );
  }

  if (showVelocityArrows) {
    const pt_minus1 = p.slice(
      (t - 1) * vertices.count * 3,
      t * vertices.count * 3
    );
    velocityArrows = handleVelocityArrows(
      velocityArrows,
      pt_minus1,
      pt,
      dt,
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
