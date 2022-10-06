import * as THREE from 'three';
import {GridHelper} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {calculateSpringForce, findIndicesOfSpringAttachmentPoints, getPositionVectorOfVertexAtIndex} from './helperFunctions';
import {Spring} from './Spring';
import Stats from 'stats.js'


export const main = (canvasId : string, canvasWidth : number, canvasHeight: number) => {

  //fps counter
  const stats = new Stats()
  stats.showPanel(0);
  document.body.appendChild(stats.dom)

  const canvas = document.getElementById(canvasId)!;
  const renderer = new THREE.WebGLRenderer({canvas});

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

  const controls = new OrbitControls(camera,renderer.domElement);

  const gridHelper = new GridHelper(30);
  scene.add(gridHelper);

  camera.position.set(1,0.5,2).setLength(10);
  controls.update();

  const d = 10;
  const nWidthSegments = 10;
  const nHeightSegments = nWidthSegments;
  const nCols=nWidthSegments+1;
  const nRows=nHeightSegments+1;
  const k = 0.1;

  //applying springs in 3x3 around point
  const xDepth = 1;
  const yDepth = 1;

  const geometry = new THREE.PlaneGeometry(d,d,nWidthSegments,nHeightSegments)
  const plane = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({wireframe: true}));
  scene.add(plane)


  const vertices = geometry.attributes.position;


  const a : THREE.Vector3[] = [];
  const v : THREE.Vector3[] = [];
  const springs : Spring[] = [];

  for (let i=0;i<geometry.attributes.position.count; i++){
    //create arrays for velocity and acceleration of the geometry
    a.push(new THREE.Vector3(0,0,0));
    v.push(new THREE.Vector3(0,0,0));

    //for each vertex the indices of the points that it needs to be attached to with springs are found
    const attachementPointIndices = findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth);

    //this indices are then looped over and then the springs are attached to it
    for (let attachementPointIndex of attachementPointIndices) {
      let l : number = getPositionVectorOfVertexAtIndex(i,vertices).sub(getPositionVectorOfVertexAtIndex(attachementPointIndex,vertices)).length();
        springs.push(new Spring(i,attachementPointIndex,k,l));
    }
  }

  //give a vertex some initial velocity
  v[0].z+=0.2;


  const animate = async (time : number) => {

    stats.begin();

    //apply forces from springs
    for (let i=0;i<springs.length; i++) {
      springs[i].applyForce(a,vertices);
    }

    //add acceleration to velocity and calculate new positions
    for (let i=0;i<geometry.attributes.position.count; i++){

      //lock top left and right corners
      //if (i!==0 && i !== nCols - 1){
        const x = vertices.getX(i);
        const y = vertices.getY(i);
        const z = vertices.getZ(i);

        v[i] = v[i].add(a[i]);

        //gravity term
        //v[i] = v[i].add(new THREE.Vector3(0,-0.01,0));

        //set the acceleration to 0 for the next frame
        a[i].multiplyScalar(0);

        //"damping" term
        //v[i] = v[i].multiplyScalar(0.98);


        //euler integration
        vertices.setXYZ(i,x+v[i].x,y+v[i].y,z+v[i].z);
      //}
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    renderer.render(scene, camera);
    stats.end();
  }
  renderer.setAnimationLoop(animate);


  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

}


