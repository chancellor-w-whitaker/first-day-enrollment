import { Fragment } from "react";

export const renderTooltip = (props) => {
  const { formatter, separator, payload, label } = props;

  console.log(props);

  return (
    <div
      style={{
        border: "1px solid rgb(204, 204, 204)",
        backgroundColor: "rgb(255, 255, 255)",
        whiteSpace: "nowrap",
        // padding: 10,
        margin: 0,
      }}
      className="recharts-default-tooltip text-center px-5 py-3 shadow bg-secondary-subtle"
    >
      <p className="recharts-tooltip-label fs-5" style={{ margin: 0 }}>
        {label}
      </p>
      <ul
        className="recharts-tooltip-item-list"
        style={{ padding: 0, margin: 0 }}
      >
        {payload.map(
          ({ payload: { desc, diff }, value, color, name, unit }, index) => {
            const [formattedValue, formattedName] = formatter(value, name);

            const [isFirstItem, isLastItem] = [
              index === 0,
              index === payload.length - 1,
            ];

            return (
              <Fragment key={index}>
                {isFirstItem && (
                  <li
                    style={{
                      display: "block",
                      paddingBottom: 4,
                      paddingTop: 4,
                    }}
                    className="recharts-tooltip-item"
                  >
                    <span className="recharts-tooltip-item-name fst-italic small">
                      {desc}
                    </span>
                  </li>
                )}
                <li
                  style={{
                    display: "block",
                    paddingBottom: 4,
                    paddingTop: 4,
                    color,
                  }}
                  className="recharts-tooltip-item d-flex"
                >
                  <span className="recharts-tooltip-item-name me-2">
                    {formattedName}:
                  </span>
                  <span className="recharts-tooltip-item-separator m-auto"></span>
                  <span className="recharts-tooltip-item-value">
                    {formattedValue}
                  </span>
                  <span className="recharts-tooltip-item-unit">{unit}</span>
                </li>
                {isLastItem && !isFirstItem && (
                  <li
                    style={{
                      display: "block",
                      paddingBottom: 4,
                      paddingTop: 4,
                    }}
                    className="recharts-tooltip-item d-flex"
                  >
                    <span className="recharts-tooltip-item-name me-2">
                      Difference:
                    </span>
                    <span className="recharts-tooltip-item-separator m-auto"></span>
                    <span className="recharts-tooltip-item-value">{diff}</span>
                  </li>
                )}
              </Fragment>
            );
          }
        )}
      </ul>
    </div>
  );
};
