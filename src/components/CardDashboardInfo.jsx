import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const CardDashboardInfo = ({ title, number }) => (
  <Col
    md={4}
    className="m-3"
    style={{
      backgroundColor: "var(--bg-dark-secondary)",
      padding: "0.5rem 1rem",
      color: "inherit",
      height: "20vh",
      width: "22vw",
      borderRadius: "5px",
    }}
  >
    <p>{title}</p>
    <div className="text-center display-5">{number}</div>
  </Col>
);

export default CardDashboardInfo;
