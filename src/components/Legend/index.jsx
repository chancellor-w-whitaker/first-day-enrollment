export const Legend = ({ textAlign, children }) => {
  return (
    <ul
      style={{ padding: 0, textAlign, margin: 0 }}
      className="recharts-default-legend"
    >
      {children}
    </ul>
  );
};
