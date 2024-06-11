const renderDot = (props) => {
  const { strokeWidth, stroke, height, width, value, cx, cy, r } = props;

  const [className, fill] = ["recharts-dot recharts-line-dot", stroke];

  return (
    typeof value === "number" && (
      <circle
        {...{
          strokeWidth,
          className,
          stroke,
          height,
          width,
          fill,
          cy,
          cx,
          r,
        }}
      ></circle>
    )
  );
};

const renderLegend = (props) => {
  console.log(props);

  return (
    <>
      <ul
        style={{ textAlign: "center", padding: 0, margin: 0 }}
        className="recharts-default-legend"
      >
        <li
          style={{ display: "inline-block", marginRight: 10 }}
          className="recharts-legend-item legend-item-0"
        >
          <svg
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: 4,
            }}
            className="recharts-surface"
            viewBox="0 0 32 32"
            height={14}
            width={14}
          >
            <title />
            <desc />
            <path
              d="M0,16h10.666666666666666
        A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
        H32M21.333333333333332,16
        A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
              className="recharts-legend-icon"
              stroke="#861f41"
              strokeWidth={4}
              fill="none"
            />
          </svg>
          <span
            className="recharts-legend-item-text"
            style={{ color: "rgb(134, 31, 65)" }}
          >
            Official
          </span>
        </li>
        <li
          style={{ display: "inline-block", marginRight: 10 }}
          className="recharts-legend-item legend-item-1"
        >
          <svg
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: 4,
            }}
            className="recharts-surface"
            viewBox="0 0 32 32"
            height={14}
            width={14}
          >
            <title />
            <desc />
            <path
              d="M0,16h10.666666666666666
        A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
        H32M21.333333333333332,16
        A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
              className="recharts-legend-icon"
              stroke="#009681"
              strokeWidth={4}
              fill="none"
            />
          </svg>
          <span
            className="recharts-legend-item-text"
            style={{ color: "rgb(0, 150, 129)" }}
          >
            Enrolled
          </span>
        </li>
      </ul>
    </>
  );
};

export const renderers = { legend: renderLegend, dot: renderDot };
