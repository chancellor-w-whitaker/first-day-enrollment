import { getBaseLog } from "./getBaseLog";

export const get2ndLargestPowerOfXInY = ({ x, y }) => {
  const flooredXLogOfY = Math.floor(getBaseLog(x, y)) - 1;

  return Math.pow(x, flooredXLogOfY);
};
