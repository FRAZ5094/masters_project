import * as THREE from "three";
import {GridHelper} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {calculateSpringForce, findIndicesOfSpringAttachmentPoints, getPositionVectorOfVertexAtIndex} from './helperFunctions';
import {Spring} from './Spring';
import Stats from 'stats.js'
import { runSim } from "./simulation";

// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";

console.log("ran cpuMain.ts");

let t=0;
let speed = 1;
let playing = false;

let p : THREE.Vector3[][];

const timestepSliderElement = document.getElementById("timestepSlider") as HTMLInputElement;

timestepSliderElement.min = "0";
timestepSliderElement.value = t.toString();

timestepSliderElement.oninput = (e) => {
  let slider = e.target as HTMLInputElement;

  const value = parseInt(slider.value);

  if (value < p.length) {
    t = value;
  }
}



const canvas = document.getElementById("three_canvas")! as HTMLCanvasElement;

var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight/2);
// document.body.appendChild( renderer.domElement );

// const stats = new Stats();
// stats.showPanel(0);
// document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,canvas.width/canvas.height,0.1,1000);

const controls = new OrbitControls(camera,renderer.domElement);

//const gridHelper = new GridHelper(30);
//scene.add(gridHelper);

camera.position.set(1,0.5,2).setLength(10);
controls.update();


const d = 10;
const nWidthSegments = 64;
const nHeightSegments = nWidthSegments;
const nCols=nWidthSegments+1;
const nRows=nHeightSegments+1;
const k = 0.4;
const dt = 0.1;

//applying springs in 3x3 around point
const xDepth = 1;
const yDepth = 1;

const geometry = new THREE.PlaneGeometry(d,d,nWidthSegments,nHeightSegments);

const vertices = geometry.attributes.position;

const nTimesteps = 50;

timestepSliderElement.max =(nTimesteps-1).toString();

p = runSim(vertices, nTimesteps);


const plane = new THREE.Mesh(geometry, new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  wireframe: true,
}));


scene.add(plane);


let x,y,z,vertex;

const animate = async (time : number) => {



  for (let i = 0; i < p[t].length; i++){
    vertex = p[t][i];
    x = vertex.x;
    y = vertex.y;
    z = vertex.z;

    geometry.attributes.position.setXYZ(i,x,y,z);
  }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);


// window.addEventListener('resize', function() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });