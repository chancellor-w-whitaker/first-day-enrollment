export const IconSurface = ({ children, size }) => {
  return (
    <svg
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4,
      }}
      className="recharts-surface"
      viewBox="0 0 32 32"
      height={size}
      width={size}
    >
      <title />
      <desc />
      {children}
    </svg>
  );
};
