export const ItemText = ({ children, color }) => {
  return (
    <span className="recharts-legend-item-text" style={{ color }}>
      {children}
    </span>
  );
};
