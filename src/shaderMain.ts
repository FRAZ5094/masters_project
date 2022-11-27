import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0, 0.3, 0.8));
document.body.appendChild(renderer.domElement);

const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(1, 0.5, 2).setLength(10);
controls.update();

const d = 10;
const nWidthSegments = 64;
const nHeightSegments = nWidthSegments;

const geometry = new THREE.PlaneGeometry(d, d, nWidthSegments, nHeightSegments);

let oldPos = new Float32Array(geometry.attributes.position.count * 3);

geometry.setAttribute("oldPos", new THREE.BufferAttribute(oldPos, 3));

const plane = new THREE.Mesh(
  geometry,
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    wireframe: true,
    uniforms: {
      maxVMag: { value: 0 },
    },
  })
);

scene.add(plane);

const animate = async () => {
  stats.begin();
  renderer.render(scene, camera);

  stats.end();
};
renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
