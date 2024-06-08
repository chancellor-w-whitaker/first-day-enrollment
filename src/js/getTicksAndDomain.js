import { get1stNumberStartingFromXDivisibleByY } from "./get1stNumberStartingFromXDivisibleByY";
import { get2ndLargestPowerOfXInY } from "./get2ndLargestPowerOfXInY";

export const getTicksAndDomain = ({
  extraZoom = false,
  dataValues = [],
  tickCount = 5,
  base = 10,
}) => {
  const [dataMin, dataMax] = [Math.min(...dataValues), Math.max(...dataValues)];

  const dataRange = dataMax - dataMin;

  const minDeductedByRange = dataMin - dataRange > 0 ? dataMin - dataRange : 0;

  const secondLargestPowerOfXInY = get2ndLargestPowerOfXInY({
    y: dataRange,
    x: base,
  });

  const lowerBoundNumerator = extraZoom ? dataMin : minDeductedByRange;

  const lowerBound = Math.floor(lowerBoundNumerator / secondLargestPowerOfXInY);

  const upperBound = Math.ceil(dataMax / secondLargestPowerOfXInY);

  const distanceBetweenBounds = upperBound - lowerBound;

  const minimumDistanceForEquidistantTicks =
    get1stNumberStartingFromXDivisibleByY({
      x: distanceBetweenBounds,
      y: tickCount - 1,
    });

  const distanceBetweenEachTick =
    minimumDistanceForEquidistantTicks / (tickCount - 1);

  const ticks = [...Array(tickCount).keys()].map(
    (tickIndex) =>
      (lowerBound + distanceBetweenEachTick * tickIndex) *
      secondLargestPowerOfXInY
  );

  const domain = [ticks[0], ticks[ticks.length - 1]];

  return { domain, ticks };
};
