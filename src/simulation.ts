import * as THREE from "three";

export const runSim = (vertices : THREE.BufferAttribute | THREE.InterleavedBufferAttribute, nTimestep : number) : THREE.Vector3[][] => {

    const nVertices = vertices.count;

    const p : THREE.Vector3[][] = [];

    //initialize the arrays for storing the accelerations, velocities and positions for each time step
    for (let i = 0; i<nTimestep; i++){
        const tempP : THREE.Vector3[] = [];
        for (let j = 0; j<nVertices; j++) {
            tempP.push(new THREE.Vector3(vertices.getX(j)+i*0.1, vertices.getY(j),vertices.getZ(j)));
        }
        p.push(tempP);
    }


    return p;

    // const a : THREE.Vector3[] = [];
    // const v : THREE.Vector3[] = [];
    // const springs : Spring[] = [];

    // for (let i=0;i<geometry.attributes.position.count; i++){
    // //create arrays for velocity and acceleration of the geometry
    // a.push(new THREE.Vector3(0,0,0));
    // v.push(new THREE.Vector3(0,0,0));

    // //for each vertex the indices of the points that it needs to be attached to with springs are found
    // const attachementPointIndices = findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth);

    // //this indices are then looped over and then the springs are attached to it
    // for (let attachementPointIndex of attachementPointIndices) {
    //     let l : number = getPositionVectorOfVertexAtIndex(i,vertices).sub(getPositionVectorOfVertexAtIndex(attachementPointIndex,vertices)).length();
    //     springs.push(new Spring(i,attachementPointIndex,k,l));
    // }
    // }

//   //apply forces from springs
//   for (let i=0;i<springs.length; i++) {
//     springs[i].applyForce(a,vertices);
//   }

//   //add acceleration to velocity and calculate new positions
//   for (let i=0;i<geometry.attributes.position.count; i++){

//     const x = vertices.getX(i);
//     const y = vertices.getY(i);
//     const z = vertices.getZ(i);

//     v[i] = v[i].add(a[i]);

//     //gravity term
//     // v[i] = v[i].add(new THREE.Vector3(0,-0.0001,0));

//     //set the acceleration to 0 for the next frame
//     a[i].multiplyScalar(0);

//     //"damping" term
//     // v[i] = v[i].multiplyScalar(0.98);

//     v[0].z+=0.000001;

//     //euler integration
//     vertices.setXYZ(i,x+v[i].x,y+v[i].y,z+v[i].z);
//   }
};