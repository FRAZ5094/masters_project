import * as THREE from "three";
import { Spring } from "./Spring";

export const runSim = (vertices : THREE.BufferAttribute | THREE.InterleavedBufferAttribute, nTimestep : number , dt : number) : { a : THREE.Vector3[][], v : THREE.Vector3[][], p : THREE.Vector3[][] } => {
    console.log("starting simulation");

    const nVertices = vertices.count;

    const a : THREE.Vector3[][] = [];
    const v : THREE.Vector3[][] = [];
    const p : THREE.Vector3[][] = [];

    //initialize the arrays for storing the accelerations, velocities and positions for each time step
    console.log("Initializing memory")

    console.time();
    for (let t = 0; t<nTimestep; t++){
        const tempA : THREE.Vector3[] = [];
        const tempV : THREE.Vector3[] = [];
        const tempP : THREE.Vector3[] = [];
        for (let j = 0; j<nVertices; j++) {

            //start off with zero values in acceleration and velocity for all time steps
            tempA.push(new THREE.Vector3());
            tempV.push(new THREE.Vector3());


            if (t == 0){
                //if its the first timestep store the values from the staring position of the plane geometry in the positions for the first timestep
                tempP.push(new THREE.Vector3(vertices.getX(j), vertices.getY(j),vertices.getZ(j)));
            } else {
                tempP.push(new THREE.Vector3());
            }
        }
        a.push(tempA);
        v.push(tempV);
        p.push(tempP);
    }

    console.timeEnd();
    console.log("Done initializing memory");


    //main simulation loop

    //loop over time steps
    console.log("Starting simulation loop");
    console.time();
    for (let t = 1; t<nTimestep; t++){

        for (let i = 0; i<nVertices; i++){
            let a = new THREE.Vector3(0,-0.01,0);

            v[t][i] = v[t-1][i].clone();
            p[t][i] = p[t-1][i].clone();

            v[t][i].add(a);

            //remember to multiply by dt here for euler integration
            p[t][i].add(v[t][i]);
        }

    }
    console.log("Finished simulation loop")
    console.timeEnd();

    return {a,v,p};
};