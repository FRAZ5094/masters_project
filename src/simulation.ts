import * as THREE from "three";
import { calculateSpringForce } from "./helperFunctions";

export const runSim = (
  verticesPosArray: Float32Array,
  springArrays: number[][][],
  nTimestep: number,
  dt: number,
  k: number
): Float32Array => {
  console.log("starting simulation");

  const nVertices = verticesPosArray.length / 3;

  console.log(
    "p will be " +
      (Float32Array.BYTES_PER_ELEMENT * nTimestep * nVertices * 3) / 1000000 +
      "mb"
  );
  console.log(
    "v will be " +
      (Float32Array.BYTES_PER_ELEMENT * nVertices * 3) / 1000000 +
      "mb"
  );

  //initialize the arrays for storing the accelerations, velocities and positions for each time step
  console.log("Initializing memory");

  console.time();

  const v = new Float32Array(nVertices * 3);
  const p = new Float32Array(nTimestep * nVertices * 3);

  for (let i = 0; i < nVertices; i++) {
    let stride = i * 3;
    p[stride + 0] = verticesPosArray[stride + 0];
    p[stride + 1] = verticesPosArray[stride + 1];
    p[stride + 2] = verticesPosArray[stride + 2];
  }

  console.timeEnd();
  console.log("Done initializing memory");

  // main simulation loop

  // loop over time steps
  console.log("Starting simulation loop");
  console.time();

  const a = new THREE.Vector3();
  const currentVertexPos = new THREE.Vector3();
  const otherVertexPos = new THREE.Vector3();

  for (let t = 1; t < nTimestep; t++) {
    for (let i = 0; i < nVertices; i++) {
      let stride = i * 3 + t * nVertices * 3;
      let previousStride = stride - nVertices * 3;

      let vStride = i * 3; // different for v because its only stored for 1 timestep at a time

      let x_previous = p[previousStride + 0];
      let y_previous = p[previousStride + 1];
      let z_previous = p[previousStride + 2];

      let vx_previous = v[vStride + 0];
      let vy_previous = v[vStride + 1];
      let vz_previous = v[vStride + 2];

      currentVertexPos.x = x_previous;
      currentVertexPos.y = y_previous;
      currentVertexPos.z = z_previous;

      a.multiplyScalar(0);

      for (let j = 0; j < springArrays[i].length; j++) {
        let otherIndex = springArrays[i][j][0];
        let springL = springArrays[i][j][1];

        console.table({ otherIndex, springL });

        let otherStride = otherIndex * 3 + (t - 1) * nVertices * 3;

        // console.log(otherStride);

        let otherX = p[otherStride + 0];
        let otherY = p[otherStride + 1];
        let otherZ = p[otherStride + 2];

        otherVertexPos.x = otherX;
        otherVertexPos.y = otherY;
        otherVertexPos.z = otherZ;

        console.log(otherVertexPos.clone().sub(currentVertexPos).length());

        let f = calculateSpringForce(
          currentVertexPos,
          otherVertexPos,
          k,
          springL
        );

        // console.log(f);

        a.add(f);

        // a.add(
        //   calculateSpringForce(
        //     currentVertexPos,
        //     new THREE.Vector3(otherX, otherY, otherZ),
        //     k,
        //     springL
        //   )
        // );
      }

      let vx = vx_previous + a.x * dt;
      let vy = vy_previous + a.y * dt;
      let vz = vz_previous + a.z * dt;

      let x = x_previous + vx * dt;
      let y = y_previous + vy * dt;
      let z = z_previous + vz * dt;

      v[vStride + 0] = vx;
      v[vStride + 1] = vy;
      v[vStride + 2] = vz;

      p[stride + 0] = x;
      p[stride + 1] = y;
      p[stride + 2] = z;
    }
  }
  console.log("Finished simulation loop");
  console.timeEnd();

  return p;
};
