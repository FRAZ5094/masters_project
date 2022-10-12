import { findIndicesOfSpringAttachmentPoints, findXYOffsetMaxAndMins } from "../helperFunctions";

describe("findIndicesOfSpringAttachmentPoints", () => {
  it("should find the correct indices when no potential points off the geometry for xDepth and yDepth of 1 and not return its own index", () => {
    const i = 12;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([6,7,8,11,13,16,17,18])
  })
  it("should find the correct indices when no potential points off the geometry for xDepth and yDepth of 2 and not return its own index", () => {
    const i = 12;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 2;
    const yDepth = 2;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24])
  })
  it("should find the correct indices when the point is in the top right corner at xDepth and yDepth of 1", () => {
    const i = 0;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([1,5,6])
  })
  it("should find the correct indices when the point is in the top left corner at xDepth and yDepth of 1", () => {
    const i = 4;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([3,8,9])
  })
  it("should find the correct indices when the point is in the bottom left corner at xDepth and yDepth of 1", () => {
    const i = 24;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([18,19,23])
  })
  it("should find the correct indices when the point is in the bottom right corner at xDepth and yDepth of 1", () => {
    const i = 20;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
   expect(findIndicesOfSpringAttachmentPoints(i,nRows,nCols,xDepth,yDepth)).toEqual([15,16,21])
  })
});

describe("findXYOffsetMaxAndMins", () => {

  it("should find the correct x and y Offset min and max values when no potential points off the geometry", () => {
    const i = 12;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
    expect(findXYOffsetMaxAndMins(i,xDepth,yDepth,nRows,nCols)).toEqual({xOffsetMin : -1, xOffsetMax : 1, yOffsetMin : -1, yOffsetMax: 1});
  });
  it("should find the correct x and y Offset min and max values when on top left corner", () => {
    const i = 4;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
    expect(findXYOffsetMaxAndMins(i,xDepth,yDepth,nRows,nCols)).toEqual({xOffsetMin : -1, xOffsetMax : 0, yOffsetMin : 0, yOffsetMax: 1});
  });
  it("should find the correct x and y Offset min and max values when on top right corner", () => {
    const i = 0;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
    expect(findXYOffsetMaxAndMins(i,xDepth,yDepth,nRows,nCols)).toEqual({xOffsetMin : 0, xOffsetMax : 1, yOffsetMin : 0, yOffsetMax: 1});
  });
  it("should find the correct x and y Offset min and max values when on bottom right corner", () => {
    const i = 20;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
    expect(findXYOffsetMaxAndMins(i,xDepth,yDepth,nRows,nCols)).toEqual({xOffsetMin : 0, xOffsetMax : 1, yOffsetMin : -1, yOffsetMax: 0});
  });
  it("should find the correct x and y Offset min and max values when on bottom left corner", () => {
    const i = 24;
    const nRows = 5;
    const nCols = 5;
    const xDepth = 1;
    const yDepth = 1;
    expect(findXYOffsetMaxAndMins(i,xDepth,yDepth,nRows,nCols)).toEqual({xOffsetMin : -1, xOffsetMax : 0, yOffsetMin : -1, yOffsetMax: 0});
  });

});
