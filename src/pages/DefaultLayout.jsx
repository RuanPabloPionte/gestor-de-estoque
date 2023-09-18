import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";

const crateNavLink = (text, to) => {
  return (
    <Link
      className="mx-2"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={to}
    >
      {text}
    </Link>
  );
};

export default function DefaultLayot() {
  return (
    <Container fluid>
      <Nav className="m-2 justify-content-between">
        <div>REACT STOCK</div>
        <div>
          {crateNavLink("Inicio", "/")}
          {crateNavLink("Items", "Itens")}
        </div>
      </Nav>
      <Outlet />
    </Container>
  );
}
