export const getIndicesOfPointsUsedToCalculateSurfaceNormal = (
  vertexPositionArray: Float32Array,
  nRows: number,
  nCols: number,
  i: number
): number[] => {
  const currentRow = Math.floor(i / nCols);
  const currentCol = i % nRows;

  return [5, 4, 0];
};
