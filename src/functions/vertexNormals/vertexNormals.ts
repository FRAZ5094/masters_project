import {
  IndexToRowAndCol,
  RowAndColToIndex,
} from "../IndexRowsCols/IndexRowsCols";

export const getIndicesOfPointsUsedToCalculateSurfaceNormal = (
  vertexPositionArray: Float32Array,
  nRows: number,
  nCols: number,
  i: number
): number[] => {
  const [Row, Col] = IndexToRowAndCol(i, nRows, nCols);

  if (Row == nRows) {
    throw RangeError("Can't calculate the normals on the bottom row!");
  }

  const a = i;

  let b: number, c: number;
  if (i % 2 == 0) {
    b = RowAndColToIndex(Row + 1, Col + 1, nRows);
    c = RowAndColToIndex(Row + 1, Col, nRows);
  } else {
    b = RowAndColToIndex(Row + 1, Col, nRows);
    c = RowAndColToIndex(Row, Col - 1, nRows);
  }

  return [a, b, c];
};
