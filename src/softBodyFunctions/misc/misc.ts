export const round = (n: number, numberDp: number) => {
  const k = Math.pow(10, numberDp);
  return Math.round(n * k) / k;
};

export const calculateIntervalT = (
  targetFPS: number,
  dt: number,
  playBackSpeed: number
): number => {
  let intervalT = (1 / targetFPS) * 1000;

  if (intervalT < (dt * 1000) / playBackSpeed) {
    console.log("not possible to play");
    return (1 / dt) * 1000;
  }

  return intervalT;
};
