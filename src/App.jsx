import {
  ResponsiveContainer,
  ReferenceLine,
  LineChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { useMemo } from "react";

import { nullifyEmptyStringValues } from "./helpers/nullifyEmptyStringValues";
import { getEquidistantTicks } from "./helpers/getEquidistantTicks";
import { getReferenceLines } from "./helpers/getReferenceLines";
import { getNumericValues } from "./helpers/getNumericValues";
import { MainContainer } from "./components/MainContainer";
import { tooltip } from "./other/options/tooltip";
import { legend } from "./other/options/legend";
import { Section } from "./components/Section";
import { xAxis } from "./other/options/xAxis";
import { yAxis } from "./other/options/yAxis";
import { lines } from "./other/options/lines";
import { useCSV } from "./hooks/useCSV";
import { constants } from "./constants";

// ! add "as of day" and "difference" to tooltip

const { lineColors, maxZoom, height, csvUrl } = constants;

const lineDataKeys = Object.keys(lineColors);

// increase width of y axis by some amount and height of x axis by some amount

function App() {
  const data = useCSV(csvUrl);

  const cleanedData = useMemo(
    () => nullifyEmptyStringValues(data, lineDataKeys),
    [data]
  );

  const { domain, ticks } = useMemo(
    () =>
      getEquidistantTicks({
        values: getNumericValues(cleanedData, lineDataKeys),
        maxZoom,
      }),
    [cleanedData]
  );

  const referenceLines = useMemo(
    () => getReferenceLines(cleanedData),
    [cleanedData]
  );

  return (
    <>
      <ResponsiveContainer height={height}>
        <LineChart data={cleanedData}>
          <XAxis {...xAxis}></XAxis>
          <YAxis {...yAxis} domain={domain} ticks={ticks}></YAxis>
          <Tooltip {...tooltip}></Tooltip>
          <Legend {...legend}></Legend>
          {lines.map((line, index) => (
            <Line {...line} key={index}></Line>
          ))}
          {referenceLines.map((line, index) => (
            <ReferenceLine {...line} key={index}></ReferenceLine>
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
