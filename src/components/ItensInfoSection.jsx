/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkBtn from "./LinkButton";
import { getRecentItens, lowStockItens } from "../assets/itensFuctions";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

const LowStockContainer = ({ items }) => {
  return (
    <Col md={6}>
      <Row
        style={{
          backgroundColor: "var(--bg-dark-secondary)",
          padding: "1rem 1rem",
          color: "inherit",
          borderRadius: "5px",
        }}
        className=" d-flex justify-content-between my-2 "
      >
        <Col sm={5}>Itens acabando</Col>
        <Col sm={3}>Qtd</Col>
        <Col sm={3}>Ações</Col>
      </Row>
      {lowStockItens(items).map((item) => {
        return (
          <Row
            key={item.id}
            className=" d-flex justify-content-between align-items-center my-2 "
          >
            <Col sm={5}>
              <p>{item.name}</p>
            </Col>
            <Col sm={3}>
              <p>{item.quantity}</p>
            </Col>
            <Col sm={3}>
              <LinkBtn
                to={`/Itens/${item.id}`}
                className={"btn-light"}
                text={"Ver"}
              />
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};

const RecentContainer = ({ items }) => {
  return (
    <Col md={6}>
      <Row
        style={{
          backgroundColor: "var(--bg-dark-secondary)",
          padding: "1rem 1rem",
          color: "inherit",
          borderRadius: "5px",
        }}
        className=" d-flex justify-content-between my-2 me-2"
      >
        <Col sm={8}>Itens Recentes</Col>
        <Col sm={4}>Ações</Col>
      </Row>
      {getRecentItens(items).map((item) => {
        return (
          <Row key={item.id}>
            <Col sm={8}>
              <p>{item.name}</p>
            </Col>
            <Col sm={4}>
              <LinkBtn
                to={`/Itens/${item.id}`}
                className={"btn-light"}
                text={"Ver"}
              />
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};

export default function IntensInfoSection() {
  const { items } = useContext(stockContext);
  return (
    <Container fluid className="gap-2">
      <Row>
        <RecentContainer items={items} />
        <LowStockContainer items={items} />
      </Row>
    </Container>
  );
}
