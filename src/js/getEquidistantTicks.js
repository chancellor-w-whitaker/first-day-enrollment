import { get1stNumberStartingFromXDivisibleByY } from "./get1stNumberStartingFromXDivisibleByY";
import { get2ndLargestPowerOfXInY } from "./get2ndLargestPowerOfXInY";

export const getEquidistantTicks = ({
  maxZoom = false,
  tickCount = 5,
  values = [],
  base = 10,
}) => {
  const [minValue, maxValue] = [Math.min(...values), Math.max(...values)];

  const range = maxValue - minValue;

  const secondLargestPowerOfBaseInRange = get2ndLargestPowerOfXInY({
    y: range,
    x: base,
  });

  const minLoweredByRange = minValue - range > 0 ? minValue - range : 0;

  const effectiveMinValue = maxZoom ? minValue : minLoweredByRange;

  const wholeNumBounds = {
    lower: Math.floor(effectiveMinValue / secondLargestPowerOfBaseInRange),
    upper: Math.ceil(maxValue / secondLargestPowerOfBaseInRange),
  };

  const distanceBetweenBounds = wholeNumBounds.upper - wholeNumBounds.lower;

  const sectionCount = tickCount - 1;

  const totalDistanceRequired = get1stNumberStartingFromXDivisibleByY({
    x: distanceBetweenBounds,
    y: sectionCount,
  });

  const sectionSize = totalDistanceRequired / sectionCount;

  const ticks = [...Array(tickCount).keys()].map((index) => {
    const distancePlacement = sectionSize * index;

    const tickPlacement = wholeNumBounds.lower + distancePlacement;

    const tickPlacementDeconverted =
      tickPlacement * secondLargestPowerOfBaseInRange;

    return tickPlacementDeconverted;
  });

  const domain = [ticks[0], ticks[ticks.length - 1]];

  return { domain, ticks };
};
