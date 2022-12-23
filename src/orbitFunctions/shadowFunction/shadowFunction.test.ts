import { isSatelliteInCylindricalUmbra } from "./shadowFunction";

describe("isSatelliteInCylindricalUmbra", () => {
  it("should be in cylindrical umbra when directly behind shadowing sphere", () => {
    const lightPos = [0, 0, -1];

    const shadowingSpherePos = [0, 0, 0];
    const shadowingSphereR = 1;

    const satellitePos = [0, 0, 10];

    expect(
      isSatelliteInCylindricalUmbra(
        lightPos,
        shadowingSpherePos,
        shadowingSphereR,
        satellitePos
      )
    ).toEqual(true);
  });
  it("should be in shadow when the satellite is on the edge of the umbra", () => {
    const lightPos = [0, 0, -1];

    const shadowingSpherePos = [0, 0, 0];
    const shadowingSphereR = 1;

    const satellitePos = [0, shadowingSphereR, 10];

    expect(
      isSatelliteInCylindricalUmbra(
        lightPos,
        shadowingSpherePos,
        shadowingSphereR,
        satellitePos
      )
    ).toEqual(true);
  });
  it("should not be in the shadow when the satellite is just above the shadow", () => {
    const lightPos = [0, 0, -1];

    const shadowingSpherePos = [0, 0, 0];
    const shadowingSphereR = 1;

    const satellitePos = [0, shadowingSphereR + 0.00001, 10];

    expect(
      isSatelliteInCylindricalUmbra(
        lightPos,
        shadowingSpherePos,
        shadowingSphereR,
        satellitePos
      )
    ).toEqual(false);
  });
  it("should not be in the shadow when the satellite is just below the shadow", () => {
    const lightPos = [0, 0, -1];

    const shadowingSpherePos = [0, 0, 0];
    const shadowingSphereR = 1;

    const satellitePos = [0, -shadowingSphereR - 0.00001, 10];

    expect(
      isSatelliteInCylindricalUmbra(
        lightPos,
        shadowingSpherePos,
        shadowingSphereR,
        satellitePos
      )
    ).toEqual(false);
  });
});
