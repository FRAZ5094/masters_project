import * as THREE from 'three';
import {GridHelper} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {calculateSpringForce} from './helperFunctions';

export const main = (canvasId : string, canvasWidth : number, canvasHeight: number) => {

  const canvas = document.getElementById(canvasId)!;
  const renderer = new THREE.WebGLRenderer({canvas});

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

  const controls = new OrbitControls(camera,renderer.domElement);

  const gridHelper = new GridHelper(30);
  scene.add(gridHelper);

  camera.position.set(1,0.5,-1.5).setLength(15);
  controls.update();

  const d = 10;
  const nWidthSegments = 4;
  const nHeightSegments = nWidthSegments;
  const nCols=nWidthSegments+1;
  const nRows=nHeightSegments+1;
  const l = d/nWidthSegments;

  const geometry = new THREE.PlaneGeometry(d,d,nWidthSegments,nHeightSegments)
  const plane = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({wireframe: true}));
  scene.add(plane)


  const vertices = geometry.attributes.position;

  const a : THREE.Vector3[] = [];
  const v : THREE.Vector3[] = [];

  for (let i=0;i<geometry.attributes.position.count; i++){
    a.push(new THREE.Vector3(0,0,0));
    v.push(new THREE.Vector3(0,0,0));
  }

  v[0].x=-0.01;
  v[4].x=0.01;


  const animate = async (time : number) => {

    for (let i=0;i<geometry.attributes.position.count; i++){
      const forces : THREE.Vector3[] = [];

      const currentPosition = new THREE.Vector3(vertices.getX(i),vertices.getY(i),vertices.getZ(i));

      //applying springs from the 3x3 around the vertex
      const xDepth=1;
      const yDepth=1;

      for (let xOffset=-xDepth;xOffset<=xDepth;xOffset++){
        for (let yOffset=-yDepth;yOffset<=yDepth;yOffset++){
          let springPosition = new THREE.Vector3(vertices.getX(i-nRows+xOffset));
          forces.push(calculateSpringForce(currentPosition,springPosition,l))
        }
      }



      for (let force of forces){
        a[i].add(force);
      }
      v[i] = v[i].add(a[i]);
    }

    for (let i=0;i<geometry.attributes.position.count; i++){
      const x = vertices.getX(i);
      const y = vertices.getY(i);
      const z = vertices.getZ(i);
      vertices.setXYZ(i,x+v[i].x,y+v[i].y,z+v[i].z);
    }

  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);


  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

}


