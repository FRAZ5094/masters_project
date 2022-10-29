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

    //loop over time steps
    console.log("Starting simulation loop");
    console.time();
    for (let t = 1; t<nTimestep; t++){

        for (let i = 0; i<nVertices; i++){
            let stride = i*3 + (t * nVertices*3);
            let previousStride = stride - nVertices*3;

            let x_previous = p[previousStride + 0];
            let y_previous = p[previousStride + 1];
            let z_previous = p[previousStride + 2];

            let vx_previous = v[previousStride + 0];
            let vy_previous = v[previousStride + 1];
            let vz_previous = v[previousStride + 2];

            let ax = 0;
            let ay = -0.01;
            let az = 0;

            let vx = vx_previous + ax;
            let vy = vy_previous + ay;
            let vz = vz_previous + az;

            let x = x_previous + vx;
            let y = y_previous + vy;
            let z = z_previous + vz;

            v[stride + 0] = vx;
            v[stride + 1] = vy;
            v[stride + 2] = vz;

            p[stride + 0] = x;
            p[stride + 1] = y;
            p[stride + 2] = z;

        }

    }
    console.log("Finished simulation loop")
    console.timeEnd();


    // console.log({nVertices});

    return {a,v,p};
};