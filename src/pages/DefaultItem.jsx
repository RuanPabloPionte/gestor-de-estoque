import Nav from "react-bootstrap/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavLink from "../components/NavLink";

export default function DefautItem() {
  const { pathname } = useLocation();
  return (
    <Container fluid>
      <h1 className="mb-3">Stock Items</h1>
      <Nav>
        <NavLink
          text={"Todos os itens"}
          to={"/Itens"}
          className={`${pathname === "/Itens" ? "active" : ""}`}
        ></NavLink>
        <NavLink
          text={"Novo Item"}
          to={"NewItem"}
          className={`${pathname === "/Itens/NewItem" ? "active" : ""}`}
        ></NavLink>
      </Nav>
      <hr />
      <Outlet />
    </Container>
  );
}
