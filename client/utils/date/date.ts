export const JDN = (year: number, month: number, day: number): number => {
  const a = Math.floor((13 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 2;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
};
