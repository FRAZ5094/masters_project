import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { rayTriangleIntersection } from "../functions/collisions/collisions";
import { cross, dot } from "../functions/vector/vector";
import { calculateCentroidOfTriangle } from "../functions/vertexNormals/vertexNormals";
import { GUI } from "dat.gui";

const gui = new GUI();

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

camera.position.set(1, 1, 1).setLength(2);
controls.update();

const triangleGeo = new THREE.BufferGeometry();

let a = [-0.5, -0.5, 0];
let b = [0.5, -0.5, 0];
let c = [0, 0.5, 0];

//prettier-ignore
const triangleVertices = new Float32Array([
    a[0], a[1], a[2],
    b[0], b[1], b[2],
    c[0], c[1], c[2],
]);

triangleGeo.setAttribute(
  "position",
  new THREE.BufferAttribute(triangleVertices, 3)
);

const triangle = new THREE.Mesh(
  triangleGeo,
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);

scene.add(triangle);

const particle = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 10, 10),
  new THREE.MeshBasicMaterial({ color: 0x00ffff })
);

particle.position.z = 1;

scene.add(particle);

const p0 = [0, 0, 1];

const l = 100;

const vDir = [0, 0, -1];

const p1 = [p0[0] + vDir[0], p0[1] + vDir[1], p0[2] + vDir[2]];

const incidenceArrow = new THREE.ArrowHelper(
  new THREE.Vector3(vDir[0], vDir[1], vDir[2]),
  new THREE.Vector3(p0[0], p0[1], p0[2])
);

let [nx, ny, nz] = cross(
  a[0] - b[0],
  a[1] - b[1],
  a[2] - a[2],
  a[0] - c[0],
  a[1] - c[1],
  a[2] - c[2]
);

let nMag = Math.sqrt(nx * nx + ny * ny + nz * nz);

nx /= nMag;
ny /= nMag;
nz /= nMag;

let { intersected, I } = rayTriangleIntersection(p0, p1, a, b, c, [nx, ny, nz]);

console.log(intersected, I);

let dx: number, dy: number, dz: number;

if (intersected) {
  dx = p0[0] - I![0];
  dy = p0[1] - I![1];
  dz = p0[2] - I![2];
  incidenceArrow.setLength(Math.sqrt(dx * dx + dy * dy + dz * dz));
}

incidenceArrow.setColor(0xfffffff);

scene.add(incidenceArrow);

const centroid = calculateCentroidOfTriangle(
  a[0],
  a[1],
  a[2],
  b[0],
  b[1],
  b[2],
  c[0],
  c[1],
  c[2]
);

const n_v = new THREE.Vector3(nx, ny, nz);

console.log(n_v);

const V_p_scale = dot(I![0] - p0[0], I![1] - p0[1], I![2] - p0[2], nx, ny, nz);

console.log(V_p_scale);

const V_px = nx * V_p_scale;
const V_py = ny * V_p_scale;
const V_pz = nz * V_p_scale;

console.log({ V_px, V_py, V_pz });

const V_rx = I![0] - 2 * V_px - p0[0];
const V_ry = I![1] - 2 * V_py - p0[1];
const V_rz = I![2] - 2 * V_pz - p0[2];

const reflectionArrow = new THREE.ArrowHelper(
  new THREE.Vector3(V_rx, V_ry, V_rz).normalize(),
  new THREE.Vector3(I![0], I![1], I![2])
);

reflectionArrow.setColor(0xff0000);

scene.add(reflectionArrow);

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
