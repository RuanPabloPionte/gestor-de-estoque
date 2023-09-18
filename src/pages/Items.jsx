import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import LinkBtn from "../components/LinkButton";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

export default function Items() {
  const { items, removeItem } = useContext(stockContext);

  return (
    <Container fluid>
      <Row
        className="my-3"
        style={{
          backgroundColor: "var(--bg-dark-secondary)",
          padding: "1rem 1rem",
          color: "inherit",
          borderRadius: "5px",
        }}
      >
        <Col sm={1}>Id</Col>
        <Col sm={2}>Nome</Col>
        <Col sm={2}>Em estoque</Col>
        <Col sm={3}>Categorias</Col>
        <Col md={4}>Ações</Col>
      </Row>

      {items &&
        items.map((item) => {
          return (
            <Row className="my-3" key={item.id}>
              <Col sm={1}>{item.id}</Col>
              <Col sm={2}>{item.name}</Col>
              <Col sm={2}>{item.quantity + " Unit"}</Col>
              <Col sm={3}>{item.category}</Col>
              <Col md={4}>
                <LinkBtn to={`/Itens/${item.id}`} text={"Ver"} className={""} />
                <LinkBtn
                  to={`/Itens/UpdateItem/${item.id}`}
                  text={"Atualizar"}
                  className={"btn-light mx-2"}
                />
                <LinkBtn
                  onClick={() => removeItem(item.id)}
                  text={"Excluir"}
                  className={"btn-danger"}
                />
              </Col>
            </Row>
          );
        })}
    </Container>
  );
}
