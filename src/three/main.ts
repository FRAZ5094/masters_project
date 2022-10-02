import * as THREE from 'three';
import {GridHelper} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const main = (canvas : any) => {
  console.log("lol");

  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

  const controls = new OrbitControls(camera,renderer.domElement);

  const gridHelper = new GridHelper(30);
  scene.add(gridHelper);

  camera.position.set(-10,30,30);
  //make sure to change update the orbit controls every time you change the position of the camera
  controls.update();

  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
  scene.add(directionalLight);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.bottom=-12;


  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
  scene.add(directionalLightHelper);
  directionalLight.position.set(-30,50,0);


  const directionalLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
  scene.add(directionalLightShadowHelper);

  const boxGeomerty = new THREE.BoxGeometry();
  const boxMaterial = new THREE.MeshStandardMaterial({
    color: 0x00FF00,
    wireframe: false,
  })
  const box = new THREE.Mesh(boxGeomerty,boxMaterial)
  scene.add(box)
  box.position.y+=1
  box.castShadow = true;


  const plane = new THREE.Mesh(new THREE.PlaneGeometry(30,30), new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}));
  scene.add(plane)
  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI;


  const animate = (time : number) => {
    const n=1000;

    box.rotation.y=time/n;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
}

