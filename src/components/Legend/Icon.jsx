export const Icon = ({ color, type }) => {
  const lookup = {
    line: (
      <>
        <path
          d="M0,16h10.666666666666666
              A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
              H32M21.333333333333332,16
              A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
          className="recharts-legend-icon"
          strokeWidth={4}
          stroke={color}
          fill="none"
        />
      </>
    ),
    "filled-dots": (
      <>
        <path
          d="M0,16h10.666666666666666
        A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
        H32M21.333333333333332,16
        A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
          className="recharts-legend-icon"
          strokeWidth={4}
          stroke={color}
          fill={color}
        />
      </>
    ),
    cross: (
      <>
        <path
          d="M-16,-5.333L-5.333,-5.333L-5.333,-16L5.333,-16L5.333,-5.333L16,-5.333L16,5.333L5.333,5.333L5.333,16L-5.333,16L-5.333,5.333L-16,5.333Z"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    star: (
      <>
        <path
          d="M0,-16.823L3.777,-5.199L16,-5.199L6.111,1.986L9.889,13.61L0,6.426L-9.889,13.61L-6.111,1.986L-16,-5.199L-3.777,-5.199Z"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    wye: (
      <>
        <path
          d="M5.856,3.381L5.856,15.094L-5.856,15.094L-5.856,3.381L-16,-2.475L-10.144,-12.619L0,-6.762L10.144,-12.619L16,-2.475Z"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    circle: (
      <>
        <path
          d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    plainline: (
      <>
        <line
          className="recharts-legend-icon"
          strokeWidth={4}
          stroke={color}
          fill="none"
          y1={16}
          x2={32}
          y2={16}
          x1={0}
        />
      </>
    ),
    triangle: (
      <>
        <path
          d="M0,-18.475L16,9.238L-16,9.238Z"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    diamond: (
      <>
        <path
          d="M0,-16L9.238,0L0,16L-9.238,0Z"
          transform="translate(16, 16)"
          className="recharts-symbols"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    square: (
      <>
        <path
          transform="translate(16, 16)"
          className="recharts-symbols"
          d="M-16,-16h32v32h-32Z"
          fill={color}
          cx={16}
          cy={16}
        />
      </>
    ),
    rect: (
      <>
        <path
          className="recharts-legend-icon"
          d="M0,4h32v24h-32z"
          stroke="none"
          fill={color}
        />
      </>
    ),
  };

  return lookup[type];
};
