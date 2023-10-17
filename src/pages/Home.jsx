import Container from "react-bootstrap/Container";
import CardSection from "../components/CardDashboard";
import IntensInfoSection from "../components/ItensInfoSection";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { items } = useContext(stockContext);
  const hasItems = items.length > 0;

  return (
    <>
      {hasItems ? (
        <Container fluid>
          <h1 className="mb-3">DashBoard</h1>
          <CardSection />
          <IntensInfoSection />
        </Container>
      ) : (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{
            height: "80vh",
          }}
        >
          <div>
            <p className="text-info display-1">Nennhum item</p>
            <p className="text-info display-4">
              Adicinone um item para começar
            </p>
            <button className="btn btn-primary ">
              <Link
                className="text-white text-decoration-none "
                to={"Itens/NewItem"}
              >
                Adicionar item
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
