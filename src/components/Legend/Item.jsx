export const Item = ({ children, display, index }) => {
  return (
    <li
      className={`recharts-legend-item legend-item-${index}`}
      style={{ marginRight: 10, display }}
    >
      {children}
    </li>
  );
};
