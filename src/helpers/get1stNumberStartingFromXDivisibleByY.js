export const get1stNumberStartingFromXDivisibleByY = ({ x, y }) => {
  return x % y === 0 ? x : x + (y - (x % y));
};
