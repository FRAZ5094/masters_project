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

const triangleGeometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
// const vertices = new Float32Array([
//   -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

//   1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
// ]);

const a = [-0.5, 0, 1];
const b = [-0.5, 1, 1];
const c = [0.5, 0, 1];

//prettier-ignore
triangleGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([
    a[0],a[1],a[2],
    b[0],b[1],b[2],
    c[0],c[1],c[2],
]), 3));

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
  wireframe: true,
});
const mesh = new THREE.Mesh(triangleGeometry, material);

scene.add(mesh);

const p0 = [0, 0.25, 2];
const p1 = [0, 0.25, 0];

const dir = new THREE.Vector3(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);

const o = new THREE.Vector3(p0[0], p0[1], p0[2]);

const arrow = new THREE.ArrowHelper(dir, o, dir.length());

scene.add(arrow);

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

camera.position.set(1, 1, 1).setLength(5);
controls.update();

console.log(rayTriangleIntersection(p0, p1, a, b, c, [0, 0, 1]));

// if (rayTriangleIntersection(p0, p1, a, b, c, [0, 0, 1])) {
//   material.color = new THREE.Color(0xff0000);
// }

const animate = async (time: number) => {
  //remove all the arrow helpers from the previous frame
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
