import { gravitationalA } from "./forces";

describe("gravitationalA", () => {
  it("should get the correct magnitude of a", () => {
    const p = [3, -2, 6];
    const pOther = [-2, 6, 3];
    const mOther = 5.972 * Math.pow(10, 24);

    const ans = gravitationalA(p, pOther, mOther);

    const mag = Math.sqrt(ans[0] * ans[0] + ans[1] * ans[1] + ans[2] * ans[2]);

    expect(mag).toEqual(4066566367346.938);
  });
  it("should get the correct direction of a", () => {
    const p = [-2, 6, 3];
    const pOther = [4, -7, 2];
    const mOther = 5.972 * Math.pow(10, 24);

    const ans = gravitationalA(p, pOther, mOther);

    const mag = Math.sqrt(ans[0] * ans[0] + ans[1] * ans[1] + ans[2] * ans[2]);

    const ax_hat = ans[0] / mag;
    const ay_hat = ans[1] / mag;
    const az_hat = ans[2] / mag;

    expect([ax_hat, ay_hat, az_hat]).toEqual([
      0.41803980857497064, -0.9057529185791031, -0.06967330142916178,
    ]);
  });
});
