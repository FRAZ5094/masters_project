//functions related to finding the springArray, this holds the data of the indices of where the springs are attached to and their natural lengths

//define the return type for the function findXYOffsetMaxAndMins
interface findXYOffsetMaxAndMinsReturnType {
  xOffsetMin: number;
  xOffsetMax: number;
  yOffsetMin: number;
  yOffsetMax: number;
}

export const findXYOffsetMaxAndMins = (
  i: number,
  xDepth: number,
  yDepth: number,
  nRows: number,
  nCols: number
): findXYOffsetMaxAndMinsReturnType => {
  //this function takes, the index of the current vertex, an xDepth,yDepth, the number of Rows in the geometry and the number of columns in the goemetry and calculates the min and max of the x and y offsets for the findIndicesOfSpringAttachmentPoints function

  //this function assures that none of the indices of the vertices returned by the findIndicesOfSpringAttachmentPoints function are off the goemetry
  //this is achieved by finding the furthest indices in the positive and negative x and y directions that will be looped over

  let yOffsetMin = -yDepth;
  let yOffsetMax = yDepth;

  let xOffsetMin = -xDepth;
  let xOffsetMax = xDepth;

  //row number that the vertex with the index i is in, starting at 0
  const currentRow = Math.floor(i / nCols);

  if (currentRow - yDepth < 0) {
    yOffsetMin = currentRow;
  }
  if (currentRow + yDepth > nRows - 1) {
    yOffsetMax = nRows - 1 - currentRow;
  }

  //column number that the vertex with the index i is in, starting at 0
  const currentCol = i % nRows;

  if (currentCol - xDepth < 0) {
    xOffsetMin = currentCol;
  }
  if (currentCol + xDepth > nCols - 1) {
    xOffsetMax = nCols - 1 - currentCol;
  }

  return { xOffsetMin, xOffsetMax, yOffsetMin, yOffsetMax };
};

export const findIndicesOfSpringAttachmentPoints = (
  i: number,
  nRows: number,
  nCols: number,
  xDepth: number,
  yDepth: number
): number[] => {
  //this function finds all the indices of the points that the current vertex should be attached to with springs, using the index of the current vertex in the geometry, the total number of rows and columns in the geometry and the x and y Depth that the springs should be

  //the xDepth and yDepth refers to how levels of vertices around the current vertex (with index i) that will be attached to it with springs, as long as they are not off the side of the geometry
  //eg xDepth = 1 and yDepth = 1 connects the surrounding 3x3 grid of vertices to the current vertex
  //xDepth = 2 and yDepth = 2 connects the surrounding 5x5 grid of vertices to the current vertex

  const { xOffsetMin, xOffsetMax, yOffsetMin, yOffsetMax } =
    findXYOffsetMaxAndMins(i, xDepth, yDepth, nRows, nCols);

  const indices: number[] = [];

  for (let yOffset = yOffsetMin; yOffset <= yOffsetMax; yOffset++) {
    for (let xOffset = xOffsetMin; xOffset <= xOffsetMax; xOffset++) {
      //skip if the current point aka no offset in x or y
      if (xOffset === 0 && yOffset === 0) continue;

      let index = i + nCols * yOffset + xOffset;

      indices.push(index);
    }
  }

  return indices;
};

export const getSpringIndicesArray = (
  verticesPosArray: Float32Array,
  nRows: number,
  nCols: number,
  xDepth: number,
  yDepth: number
): number[][][] => {
  // returns a 3d array used to represent the connections of the springs

  // the first dimension is for the vertex that all the springs are being attached to in the geometry

  // the second dimension is for each of the springs attached to that one point

  // the third dimension is an array of length 2 that holds the index of the vertex that the spring is attached to from the current vertex in index 0
  // and the natural length of that spring in index 1

  const springArrays: number[][][] = [];

  const nVertices = verticesPosArray.length / 3;

  for (let i = 0; i < nVertices; i++) {
    const springArray: number[][] = [];

    const attachmentPointIndices = findIndicesOfSpringAttachmentPoints(
      i,
      nRows,
      nCols,
      xDepth,
      yDepth
    );

    let stride = i * 3;

    let currentX = verticesPosArray[stride + 0];
    let currentY = verticesPosArray[stride + 1];
    let currentZ = verticesPosArray[stride + 2];

    for (let attachmentPointIndex of attachmentPointIndices) {
      // get natural length

      let otherStride = attachmentPointIndex * 3;

      let otherX = verticesPosArray[otherStride + 0];
      let otherY = verticesPosArray[otherStride + 1];
      let otherZ = verticesPosArray[otherStride + 2];

      let dx = Math.abs(currentX - otherX);
      let dy = Math.abs(currentY - otherY);
      let dz = Math.abs(currentZ - otherZ);

      let l: number = Math.sqrt(dx * dx + dy * dy + dz * dz);
      springArray.push([attachmentPointIndex, l]);
    }

    springArrays.push(springArray);
  }

  return springArrays;
};
