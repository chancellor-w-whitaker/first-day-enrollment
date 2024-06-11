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

import { nullifyEmptyStringValues } from "./js/nullifyEmptyStringValues";
import { getEquidistantTicks } from "./js/getEquidistantTicks";
import { MainContainer } from "./components/MainContainer";
import { getReferenceLines } from "./js/getReferenceLines";
import { getNumericValues } from "./js/getNumericValues";
import { Section } from "./components/Section";
import { options } from "./constants/options";
import { helpers } from "./constants/helpers";
import { useCSV } from "./hooks/useCSV";

// ! add "as of day" and "difference" to tooltip

const { lineColors, maxZoom, height, csvUrl } = helpers;

const { tooltip, legend, xAxis, yAxis, lines } = options;

const lineDataKeys = Object.keys(lineColors);

// figure out which api props of legend component influence actual svg output (in order to make custom legend renderer with filled in dots)
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
      <MainContainer>
        <Section>
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
        </Section>
      </MainContainer>
    </>
  );
}

export default App;
