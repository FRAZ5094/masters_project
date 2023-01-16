import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { rayTriangleIntersection } from "../softBodyFunctions/collisions/collisions";
import { GUI } from "dat.gui";
import { cross } from "../softBodyFunctions/vector/vector";

let arrow: THREE.ArrowHelper;
const intersectedTriangles: THREE.Mesh[] = [];
const p0 = new THREE.Vector3(0.25, 0.25, 1);
const p1 = new THREE.Vector3(0.25, 0.25, 0);

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

// const axis = new THREE.AxesHelper();

// scene.add(axis);

// const geometry = new THREE.SphereGeometry(d, n, n);

const n = 4;
// const geometry = new THREE.CylinderGeometry(1, 1, 2, n, n, true);

// const material = new THREE.MeshNormalMaterial({
//   side: THREE.DoubleSide,
//   wireframe: true,
// });
// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

const onLineChange = () => {
  scene.remove(arrow);

  const dir = p1.clone().sub(p0.clone());

  arrow = new THREE.ArrowHelper(dir.clone().normalize(), p0, dir.length());

  scene.add(arrow);

  checkIntersections();
};

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

axesHelper.position.add(new THREE.Vector3(-1, -1, -1));

camera.position.set(1.2, 0.9, 1);
camera.position.setLength(2.5);
controls.update();

// const triangleIndicesArray = geometry.getIndex()!.array as Uint16Array;

// const nTriangles = triangleIndicesArray.length / 3;

// const vertexPosArray = geometry.attributes.position.array as Float32Array;

const checkIntersections = () => {
  intersectedTriangles.forEach((tri) => scene.remove(tri));
  //   for (let i = 0; i < nTriangles; i++) {
  //     const a = [
  //       vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 0],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 1],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 0] * 3 + 2],
  //     ];
  //     const b = [
  //       vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 0],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 1],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 1] * 3 + 2],
  //     ];
  //     const c = [
  //       vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 0],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 1],
  //       vertexPosArray[triangleIndicesArray[i * 3 + 2] * 3 + 2],
  //     ];
  //     // const n = [0,0,1];
  //     const n = cross(
  //       a[0] - b[0],
  //       a[1] - b[1],
  //       a[2] - b[2],
  //       a[0] - c[0],
  //       a[1] - c[1],
  //       a[2] - c[2]
  //     );
  //     const mag = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  //     n[0] /= mag;
  //     n[1] /= mag;
  //     n[2] /= mag;
  //     if (
  //       rayTriangleIntersection(
  //         [p0.x, p0.y, p0.z],
  //         [p1.x, p1.y, p1.z],
  //         a,
  //         b,
  //         c,
  //         n
  //       ).intersected
  //     ) {
  // const geo = new THREE.BufferGeometry();
  // //prettier-ignore
  // const vertices = new Float32Array([
  //       a[0],a[1],a[2],
  //       b[0],b[1],b[2],
  //       c[0],c[1],c[2],
  //   ])
  // geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // const triangle = new THREE.Mesh(
  //   geo,
  //   new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
  // );
  // intersectedTriangles.push(triangle);
  // scene.add(triangle);
  //     }
  //   }

  if (
    rayTriangleIntersection(
      [p0.x, p0.y, p0.z],
      [p1.x, p1.y, p1.z],
      tri1A,
      tri1B,
      tri1C,
      [0, 0, -1]
    ).intersected
  ) {
    const geo = new THREE.BufferGeometry();
    //prettier-ignore
    const vertices = new Float32Array([
        tri1A[0],tri1A[1],tri1A[2],
        tri1B[0],tri1B[1],tri1B[2],
        tri1C[0],tri1C[1],tri1C[2],
    ])
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const triangle = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
    );
    intersectedTriangles.push(triangle);
    scene.add(triangle);
  }
  if (
    rayTriangleIntersection(
      [p0.x, p0.y, p0.z],
      [p1.x, p1.y, p1.z],
      tri2A,
      tri2B,
      tri2C,
      [0, 0, -1]
    ).intersected
  ) {
    const geo = new THREE.BufferGeometry();
    //prettier-ignore
    const vertices = new Float32Array([
        tri2A[0],tri2A[1],tri2A[2],
        tri2B[0],tri2B[1],tri2B[2],
        tri2C[0],tri2C[1],tri2C[2],
    ])
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const triangle = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide })
    );
    intersectedTriangles.push(triangle);
    scene.add(triangle);
  }
};
const tri1A = [0, 0, 0];
const tri1B = [0, 1, 0];
const tri1C = [1, 0, 0];
//prettier-ignore
const tri1Verts = new Float32Array([
  tri1A[0],tri1A[1],tri1A[2],
  tri1B[0],tri1B[1],tri1B[2],
  tri1C[0],tri1C[1],tri1C[2],
]);

const tri1Geo = new THREE.BufferGeometry();

tri1Geo.setAttribute("position", new THREE.BufferAttribute(tri1Verts, 3));
const tri1 = new THREE.Mesh(
  tri1Geo,
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
    side: THREE.DoubleSide,
  })
);

scene.add(tri1);

const tri2A = [tri1A[0], tri1A[1], tri1A[2] - 1];
const tri2B = [tri1B[0], tri1B[1], tri1B[2] - 1];
const tri2C = [tri1C[0], tri1C[1], tri1C[2] - 1];

const tri2Verts = new Float32Array([
  tri2A[0],
  tri2A[1],
  tri2A[2],
  tri2B[0],
  tri2B[1],
  tri2B[2],
  tri2C[0],
  tri2C[1],
  tri2C[2],
]);

const tri2Geo = new THREE.BufferGeometry();

tri2Geo.setAttribute("position", new THREE.BufferAttribute(tri2Verts, 3));
const tri2 = new THREE.Mesh(
  tri2Geo,
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
    side: THREE.DoubleSide,
  })
);

scene.add(tri2);

// gui.add(p1, "x", -0.5, 0.5).name("p1.x").onChange(onLineChange);
// gui.add(p1, "y", -0.5, 0.5).name("p1.y").onChange(onLineChange);

onLineChange();

const animate = async () => {
  //remove all the arrow helpers from the previous frame
  // console.log(camera.position);
  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
