import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { rayTriangleIntersection } from "../functions/intersections/intersections";
import { cross } from "../functions/vector/vector";
import { calculateCentroidOfTriangle } from "../functions/vertexNormals/vertexNormals";

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
let c = [0, 0.5, -0.5];

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

// const intersectionPoint = new THREE.Mesh(
//   new THREE.SphereGeometry(0.01, 10, 10),
//   new THREE.MeshBasicMaterial({ color: 0x00ffff })
// );

// scene.add(intersectionPoint);

const p0 = [0, 0, 1];

const l = 5;

const v = [0, 0, -1];

const p1 = [p0[0] + l * v[0], p0[1] + l * v[1], p0[2] + l * v[2]];

const incidenceArrow = new THREE.ArrowHelper(
  new THREE.Vector3(v[0], v[1], v[2]),
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

let { intersected, Ix, Iy, Iz } = rayTriangleIntersection(p0, p1, a, b, c, [
  nx,
  ny,
  nz,
]);

console.log(intersected, Ix, Iy, Iz);

if (intersected) {
  let dx = p0[0] - Ix!;
  let dy = p0[1] - Iy!;
  let dz = p0[2] - Iz!;

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

const normalArrow = new THREE.ArrowHelper(
  new THREE.Vector3(nx, ny, nz),
  new THREE.Vector3(Ix, Iy, Iz)
  //   new THREE.Vector3(centroid[0], centroid[1], centroid[2])
);

normalArrow.setColor(0xff00ff);

scene.add(normalArrow);

//need to change rayTriangleIntersection to return the point of intersection

const animate = async () => {
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
