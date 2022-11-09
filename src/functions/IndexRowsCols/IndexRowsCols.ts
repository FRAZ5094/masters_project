export const IndexToRowAndCol = (
  index: number,
  nRows: number,
  nCols: number
): number[] => {
  return [Math.floor(index / nCols), index % nRows];
};

export const RowAndColToIndex = (
  Row: number,
  Col: number,
  nCols: number
): number => {
  return nCols * Col + Row;
};
