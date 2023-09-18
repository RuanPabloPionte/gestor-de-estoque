// eslint-disable-next-line react/prop-types
export default function CardDark({ className, children }) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "var(--bg-dark-secondary)",
        padding: "0.5rem 1rem",
        color: "inherit",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}
