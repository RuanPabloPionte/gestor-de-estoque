import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Outlet, useLocation } from "react-router-dom";
import NavLink from "../components/NavLink";

// eslint-disable-next-line react/prop-types

export default function DefaultLayout() {
  const { pathname } = useLocation();
  return (
    <Container fluid>
      <Nav className="m-2 justify-content-between ">
        <div>REACT STOCK</div>
        <div>
          <NavLink
            text="Inicio"
            to="/"
            className={`${pathname === "/" ? "active" : ""}`}
          />
          <NavLink
            text="Items"
            to="/Itens"
            className={`${pathname === "/Itens" ? "active" : ""}`}
          />
        </div>
      </Nav>
      <Outlet />
    </Container>
  );
}
