import * as THREE from "three";
import {
  calculateDampingForce,
  calculateSpringForce,
} from "./functions/forces/forces";

export const runSim = (
  verticesPosArray: Float32Array,
  mass: number,
  dampingRatio: number,
  springArrays: number[][][],
  nTimestep: number,
  dt: number,
  k: number
): Float32Array => {
  console.log("starting simulation");

  const nVertices = verticesPosArray.length / 3;

  //this is the mass of a single particle
  const massP = mass / nVertices;

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

  const light = { x: 0, y: 0, z: 2, r: 0.5, mag: 1 };

  console.log("Starting simulation loop");
  console.time();

  // loop over time steps
  for (let t = 1; t < nTimestep; t++) {
    for (let i = 0; i < nVertices; i++) {
      //stride value for this vertex at this timestep
      let stride = i * 3 + t * (nVertices * 3);

      //stride value for this vertex in the previous timestep
      let previousStride = stride - nVertices * 3;

      let vStride = i * 3; // stride different for v because its only stored for 1 timestep at a time

      let x = p[previousStride + 0];
      let y = p[previousStride + 1];
      let z = p[previousStride + 2];

      let vx = v[vStride + 0];
      let vy = v[vStride + 1];
      let vz = v[vStride + 2];

      let fx = 0;
      let fy = 0;
      let fz = 0;

      const nSprings = springArrays[i].length;

      //for each spring attached to the vertex
      for (let j = 0; j < nSprings; j++) {
        let springData = springArrays[i][j];
        let otherIndex = springData[0];
        let springL = springData[1];

        let otherStride = otherIndex * 3 + (t - 1) * nVertices * 3;

        let x_other = p[otherStride + 0];
        let y_other = p[otherStride + 1];
        let z_other = p[otherStride + 2];

        let [fSpringX, fSpringY, fSpringZ] = calculateSpringForce(
          x,
          y,
          z,
          x_other,
          y_other,
          z_other,
          k,
          springL
        );

        fx += fSpringX;
        fy += fSpringY;
        fz += fSpringZ;
      }

      let [fDamperX, fDamperY, fDamperZ] = calculateDampingForce(
        vx,
        vy,
        vz,
        dampingRatio
      );

      fx += fDamperX;
      fy += fDamperY;
      fz += fDamperZ;

      //finding out if the vertex is in the light

      const dxl = x - light.x;
      const dyl = y - light.y;

      if (Math.sqrt(dxl * dxl + dyl * dyl) < light.r) {
        fz -= light.mag;
      }

      const ax = fx / massP;
      const ay = fy / massP;
      const az = fz / massP;

      let vx_new = vx + ax * dt;
      let vy_new = vy + ay * dt;
      let vz_new = vz + az * dt;

      let x_new = x + vx_new * dt;
      let y_new = y + vy_new * dt;
      let z_new = z + vz_new * dt;

      v[vStride + 0] = vx_new;
      v[vStride + 1] = vy_new;
      v[vStride + 2] = vz_new;

      p[stride + 0] = x_new;
      p[stride + 1] = y_new;
      p[stride + 2] = z_new;
    }
  }
  console.log("Finished simulation loop");
  console.timeEnd();

  return p;
};