import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { rayTriangleIntersection } from "./functions/intersections/intersections";

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

const d = 1;

const n = 4;

const geometry = new THREE.PlaneGeometry(d, d, n, n);

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const p0 = [d / 2 - d / n, d / 2 - (d / n) * 0.5, 1];
const p1 = [d / 2 - (d / n) * 0.5, d / 2 - (d / n) * 0.5, -1];

const dir = new THREE.Vector3(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);

const o = new THREE.Vector3(p0[0], p0[1], p0[2]);

const arrow = new THREE.ArrowHelper(dir, o, dir.length());

scene.add(arrow);

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

camera.position.set(1, 1, 1).setLength(2);
controls.update();

const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

const nTriangles = triangleIndicesArray.length / 3;

const vertexPosArray = geometry.attributes.position.array as Float32Array;

for (let i = 0; i < nTriangles; i++) {
  const a = [
    vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 0],
    vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 1],
    vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 2],
  ];
  const b = [
    vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 0],
    vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 1],
    vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 2],
  ];
  const c = [
    vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 0],
    vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 1],
    vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 2],
  ];

  if (i == 0 || i == 1) {
    console.log({ a, b, c });
  }

  const n = [0, 0, 1];

  if (rayTriangleIntersection(p0, p1, a, b, c, n)) {
    console.log("collision with line and triangle number " + i);
  }
}

// console.log(rayTriangleIntersection(p0, p1, a, b, c, [0, 0, 1]));

// if (rayTriangleIntersection(p0, p1, a, b, c, [0, 0, 1])) {
//   material.color = new THREE.Color(0xff0000);
// }

const animate = async (time: number) => {
  //remove all the arrow helpers from the previous frame
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
