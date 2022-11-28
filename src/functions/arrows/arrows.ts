import * as THREE from "three";
import {
  calculateSurfaceNormals,
  calculateCentroidOfTriangle,
  calculateVertexNormals,
} from "../vertexNormals/vertexNormals";

export const calculateV = (
  pt: Float32Array,
  pt_minus1: Float32Array,
  dt: number
): Float32Array => {
  const nVertices = pt.length / 3;
  const v = new Float32Array(nVertices * 3);

  for (let i = 0; i < nVertices; i++) {
    const stride = i * 3;

    v[stride + 0] = (pt[stride + 0] - pt_minus1[stride + 0]) / dt;
    v[stride + 1] = (pt[stride + 1] - pt_minus1[stride + 1]) / dt;
    v[stride + 2] = (pt[stride + 2] - pt_minus1[stride + 2]) / dt;
  }

  return v;
};

export const calculateA = (
  vt: Float32Array,
  vt_plus1: Float32Array,
  dt: number
): Float32Array => {
  const nVertices = vt.length / 3;
  const a = new Float32Array(nVertices * 3);

  for (let i = 0; i < nVertices; i++) {
    const stride = i * 3;

    a[stride + 0] = (vt_plus1[stride + 0] - vt[stride + 0]) / dt;
    a[stride + 1] = (vt_plus1[stride + 1] - vt[stride + 1]) / dt;
    a[stride + 2] = (vt_plus1[stride + 2] - vt[stride + 2]) / dt;
  }

  return a;
};

export const handleArrows = (
  arrowsArray: THREE.ArrowHelper[],
  arrowPositions: Float32Array,
  arrowDirections: Float32Array,
  maxArrowLength: number,
  scene: THREE.Scene
): THREE.ArrowHelper[] => {
  const nArrows = arrowPositions.length / 3;

  if (arrowsArray.length == 0) {
    for (let i = 0; i < nArrows; i++) {
      const arrow = new THREE.ArrowHelper();
      scene.add(arrow);
      arrowsArray.push(arrow);
    }
  }

  //find max acceleration
  let dirMagMax = 0;
  const dirMags: number[] = [];
  for (let i = 0; i < nArrows; i++) {
    const stride = i * 3;

    const dirArrow = arrowsArray[i];

    const dirX = arrowDirections[stride + 0];
    const dirY = arrowDirections[stride + 1];
    const dirZ = arrowDirections[stride + 2];

    const dirMag = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ);

    dirMags.push(dirMag);

    if (dirMag > dirMagMax) dirMagMax = dirMag;

    dirArrow.setDirection(new THREE.Vector3(dirX, dirY, dirZ));
    const x = arrowPositions[stride + 0];
    const y = arrowPositions[stride + 1];
    const z = arrowPositions[stride + 2];
    dirArrow.position.set(x, y, z);
  }

  //max arrow mag has now been found so the arrow lengths can now be found

  for (let i = 0; i < nArrows; i++) {
    const arrow = arrowsArray[i];
    arrow.setLength((dirMags[i] / dirMagMax) * maxArrowLength);
  }

  return arrowsArray;
};

export const handleAccelerationArrows = (
  accelerationArrows: THREE.ArrowHelper[],
  pt_minus1: Float32Array,
  pt: Float32Array,
  pt_plus1: Float32Array,
  dt: number,
  scene: THREE.Scene,
  maxArrowLength: number
): THREE.ArrowHelper[] => {
  const vt = calculateV(pt, pt_minus1, dt);
  const vt_plus1 = calculateV(pt_plus1, pt, dt);

  const a = calculateA(vt, vt_plus1, dt);

  accelerationArrows = handleArrows(
    accelerationArrows,
    pt,
    a,
    maxArrowLength,
    scene
  );

  return accelerationArrows;
};

export const handleVelocityArrows = (
  velocityArrows: THREE.ArrowHelper[],
  pt_minus1: Float32Array,
  pt: Float32Array,
  dt: number,
  scene: THREE.Scene,
  maxArrowLength: number
): THREE.ArrowHelper[] => {
  const vt = calculateV(pt, pt_minus1, dt);

  velocityArrows = handleArrows(velocityArrows, pt, vt, maxArrowLength, scene);

  return velocityArrows;
};

export const handleSurfaceNormalArrows = (
  surfaceNormalArrows: THREE.ArrowHelper[],
  pt: Float32Array,
  triangleIndicesArray: Uint16Array,
  scene: THREE.Scene,
  maxArrowLength: number
): THREE.ArrowHelper[] => {
  const surfaceNormals = calculateSurfaceNormals(pt, triangleIndicesArray);

  const nFaces = triangleIndicesArray.length / 3;
  const arrowPositions = new Float32Array(nFaces * 3);

  for (let i = 0; i < nFaces; i++) {
    const stride = i * 3;

    const ax = pt[triangleIndicesArray[stride + 0] * 3 + 0];
    const ay = pt[triangleIndicesArray[stride + 0] * 3 + 1];
    const az = pt[triangleIndicesArray[stride + 0] * 3 + 2];

    const bx = pt[triangleIndicesArray[stride + 1] * 3 + 0];
    const by = pt[triangleIndicesArray[stride + 1] * 3 + 1];
    const bz = pt[triangleIndicesArray[stride + 1] * 3 + 2];

    const cx = pt[triangleIndicesArray[stride + 2] * 3 + 0];
    const cy = pt[triangleIndicesArray[stride + 2] * 3 + 1];
    const cz = pt[triangleIndicesArray[stride + 2] * 3 + 2];

    const [ox, oy, oz] = calculateCentroidOfTriangle(
      ax,
      ay,
      az,
      bx,
      by,
      bz,
      cx,
      cy,
      cz
    );

    arrowPositions[stride + 0] = ox;
    arrowPositions[stride + 1] = oy;
    arrowPositions[stride + 2] = oz;
  }

  surfaceNormalArrows = handleArrows(
    surfaceNormalArrows,
    arrowPositions,
    surfaceNormals,
    maxArrowLength,
    scene
  );

  return surfaceNormalArrows;
};

export const handleVertexNormalArrows = (
  vertexNormalArrows: THREE.ArrowHelper[],
  pt: Float32Array,
  trianglesAttachedToVertexArray: number[][],
  scene: THREE.Scene,
  maxArrowLength: number
): THREE.ArrowHelper[] => {
  const vertexNormals = calculateVertexNormals(
    trianglesAttachedToVertexArray,
    pt
  );

  vertexNormalArrows = handleArrows(
    vertexNormalArrows,
    pt,
    vertexNormals,
    maxArrowLength,
    scene
  );

  return vertexNormalArrows;
};
