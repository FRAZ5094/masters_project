import {
  rvToKeplerOrbitalElements,
  rvToKeplerOrbitalElementsReturn,
} from "./kepler";

describe("rvToKeplerOrbitalElements", () => {
  it("should get the same values as the test case from Vallado p114-116", () => {
    const ans: rvToKeplerOrbitalElementsReturn = {
      e: 0.8328757475228061,
      a: 36132747.668444425,
      i: 87.86912617702644,
      Omega: 227.8982603572737,
      omega: 53.386869924961786,
      trueAnomaly: 92.33321745563534,
    };

    const kmToM = Math.pow(10, 3);

    const r = [6524.834 * kmToM, 6862.875 * kmToM, 6448.296 * kmToM];
    const v = [4.901327 * kmToM, 5.533756 * kmToM, -1.976341 * kmToM];

    const planetM = 5.972 * Math.pow(10, 24);

    expect(rvToKeplerOrbitalElements(r, v, planetM)).toEqual(ans);
  });
});
