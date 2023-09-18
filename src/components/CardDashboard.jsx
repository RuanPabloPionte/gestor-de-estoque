import {
  getTotalCategories,
  LowStockItens,
  getTotalQuantityInStock,
  getRecentItens,
} from "../assets/itensFuctions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

const CreateCardDashboard = (title, number) => (
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

const CardSection = () => {
  const { items } = useContext(stockContext);
  return (
    <Row>
      {CreateCardDashboard("Diversidade de items", getTotalCategories(items))}
      {CreateCardDashboard("Iventário total", getTotalQuantityInStock(items))}
      {CreateCardDashboard("Itens recentes", getRecentItens(items).length)}
      {CreateCardDashboard("Itens acabando", LowStockItens(items).length)}
    </Row>
  );
};

export default CardSection;
