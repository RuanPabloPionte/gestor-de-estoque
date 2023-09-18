import Nav from "react-bootstrap/Nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function DefautItem() {
  const location = useLocation();
  return (
    <Container fluid>
      <h1 className="mb-3">Stock Items</h1>
      <Nav>
        <Link
          to={"/Itens"}
          className={`link ${location.pathname === "/Itens" ? "active" : ""}`}
        >
          Todos os itens
        </Link>
        <Link
          to={"NewItem"}
          className={`link ${
            location.pathname === "/Itens/NewItem" ? "active" : ""
          }`}
        >
          Novo Item
        </Link>
      </Nav>
      <hr />
      <Outlet />
    </Container>
  );
}
