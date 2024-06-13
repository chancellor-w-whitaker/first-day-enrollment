export const renderDot = (props) => {
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
