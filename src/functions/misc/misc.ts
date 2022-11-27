export const round = (n: number, numberDp: number) => {
  const k = Math.pow(10, numberDp);
  return Math.round(n * k) / k;
};
