import {
  rvToKeplerOrbitalElements,
  rvToKeplerOrbitalElementsReturn,
  keplerOrbitalElementsToRV,
  keplerOrbitalElementsToRVReturn,
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

describe("keplerOrbitalElementsToRV", () => {
  it("should get the same values as the test case from Vallado p114-116", () => {
    const ans: keplerOrbitalElementsToRVReturn = {
      r: [6525494.58819376, 6861664.8172436245, 6449243.603587262],
      vel: [4902.161987597218, 5533.00789703288, -1975.6630838452743],
    };

    const deg2rad = Math.PI / 180;

    const a = 36127.343 * 1000;
    const e = 0.83285;
    const i = 87.87 * deg2rad;
    const Omega = 227.89 * deg2rad;
    const omega = 53.38 * deg2rad;
    const v = 92.335 * deg2rad;

    const planetM = 5.972 * Math.pow(10, 24);
    //USE THE SUNS MASS FOR THE SUN'S orbit

    expect(
      keplerOrbitalElementsToRV(a, e, i, Omega, omega, v, planetM)
    ).toEqual(ans);
  });
});
