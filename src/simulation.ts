import * as THREE from "three";

export const runSim = (vertices : THREE.BufferAttribute | THREE.InterleavedBufferAttribute, nTimestep : number , dt : number) : { a : Float32Array, v : Float32Array, p : Float32Array } => {
    console.log("starting simulation");

    const nVertices = vertices.count;



    //initialize the arrays for storing the accelerations, velocities and positions for each time step
    console.log("Initializing memory");

    console.time();

    const a = new Float32Array(nTimestep*nVertices*3);
    const v = new Float32Array(nTimestep*nVertices*3);
    const p = new Float32Array(nTimestep*nVertices*3);

    for (let i = 0; i<nVertices; i++) {

        let stride = i*3;

        p[stride + 0] = vertices.getX(i);
        p[stride + 1] = vertices.getY(i);
        p[stride + 2] = vertices.getZ(i);

    }

    console.timeEnd();
    console.log("Done initializing memory");

    // //main simulation loop

    // //loop over time steps
    // console.log("Starting simulation loop");
    // console.time();
    // for (let t = 1; t<nTimestep; t++){

    //     for (let i = 0; i<nVertices; i++){
    //         let a = new THREE.Vector3(0,-0.01,0);

    //         v[t][i] = v[t-1][i].clone();
    //         p[t][i] = p[t-1][i].clone();

    //         v[t][i].add(a);

    //         //remember to multiply by dt here for euler integration
    //         p[t][i].add(v[t][i]);
    //     }

    // }
    // console.log("Finished simulation loop")
    // console.timeEnd();


    // console.log({nVertices});

    return {a,v,p};
};