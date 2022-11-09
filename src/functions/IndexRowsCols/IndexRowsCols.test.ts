import { IndexToRowAndCol, RowAndColToIndex } from "./IndexRowsCols";

describe("IndexToRowAndCol", () => {
  it("should get the correct Row and Col when square geometry", () => {
    const i = 7;
    const nRows = 5;
    const nCols = nRows;

    expect(IndexToRowAndCol(i, nRows, nCols)).toEqual([1, 2]);
  });
  it("should get the correct Row and Col when is square and its he last vertex", () => {
    const i = 24;
    const nRows = 5;
    const nCols = 5;

    expect(IndexToRowAndCol(i, nRows, nCols)).toEqual([4, 4]);
  });
  it("should get the correct Row and Col when is square but vertex on left edge", () => {
    const i = 19;
    const nRows = 5;
    const nCols = 5;

    expect(IndexToRowAndCol(i, nRows, nCols)).toEqual([3, 4]);
  });
});

describe("RowAndColToIndex", () => {
  it("should get the correct Row and Col when square geometry", () => {
    const nRows = 5;
    const nCols = nRows;

    const Row = 1;
    const Col = 1;

    expect(RowAndColToIndex(Row, Col, nCols)).toEqual(6);
  });
});
