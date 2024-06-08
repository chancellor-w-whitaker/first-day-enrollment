import {
  ResponsiveContainer,
  ReferenceLine,
  LineChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Label,
  Line,
} from "recharts";
import { useMemo } from "react";

import { nullifyEmptyStringValues } from "./js/nullifyEmptyStringValues";
import { MainContainer } from "./components/MainContainer";
import { getTicksAndDomain } from "./js/getTicksAndDomain";
import { categoryFormatter } from "./js/categoryFormatter";
import { tooltipFormatter } from "./js/tooltipFormatter";
import { getNumericValues } from "./js/getNumericValues";
import { valueFormatter } from "./js/valueFormatter";
import { nameFormatter } from "./js/nameFormatter";
import { Section } from "./components/Section";
import { findAverage } from "./js/findAverage";
import { useCSV } from "./hooks/useCSV";

// ! fix axis label positions
// ! add "as of day" and "difference" to tooltip

const constants = {
  lines: [
    { dataKey: "enrolled", stroke: "#009681", strokeWidth: 2 },
    { dataKey: "official", stroke: "#861f41", strokeWidth: 2 },
  ],
  xAxisDataKey: "term_desc",
  yAxisLabel: "Enrollment",
  xAxisLabel: "Fall",
};

const { xAxisDataKey, xAxisLabel, yAxisLabel, lines } = constants;

const lineDataKeys = lines.map(({ dataKey }) => dataKey);

const extraZoom = true;

function App() {
  const data = useCSV("data/first-day-enrollment.csv");

  const cleanedData = useMemo(
    () => nullifyEmptyStringValues(data, lineDataKeys),
    [data]
  );

  const numericValues = useMemo(
    () => getNumericValues(cleanedData, lineDataKeys),
    [cleanedData]
  );

  const { domain, ticks } = useMemo(
    () => getTicksAndDomain({ dataValues: numericValues, extraZoom }),
    [numericValues]
  );

  const referenceLines = useMemo(
    () => getReferenceLines(cleanedData),
    [cleanedData]
  );

  return (
    <>
      <MainContainer>
        <Section>
          <ResponsiveContainer height={500}>
            <LineChart data={cleanedData}>
              <XAxis tickFormatter={categoryFormatter} dataKey={xAxisDataKey}>
                <Label position="bottom" offset={0}>
                  {xAxisLabel}
                </Label>
              </XAxis>
              <YAxis
                tickFormatter={valueFormatter}
                domain={domain}
                ticks={ticks}
              >
                <Label position="left" angle={-90} offset={0}>
                  {yAxisLabel}
                </Label>
              </YAxis>
              <Tooltip formatter={tooltipFormatter} />
              <Legend formatter={nameFormatter} verticalAlign="top" />
              {lines.map((object, index) => (
                <Line {...object} key={index} />
              ))}
              {referenceLines.map((object, index) => (
                <ReferenceLine {...object} key={index} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Section>
      </MainContainer>
    </>
  );
}

const getReferenceLines = (data) =>
  lineDataKeys.map((key) => {
    const average = findAverage(
      data
        .map(({ [key]: value }) => value)
        .filter((value) => typeof value === "number")
    );

    const y = average;

    const [strokeWidth, strokeDasharray] = [2, "3 3"];

    const formattedAverage = valueFormatter(Math.round(average));

    const { stroke } = lines.find(({ dataKey }) => dataKey === key);

    const label = {
      position: "insideBottomLeft",
      value: formattedAverage,
      fill: stroke,
    };

    return { strokeDasharray, strokeWidth, stroke, label, y };
  });

export default App;
