import Container from "react-bootstrap/esm/Container";
import LinkBtn from "../components/LinkButton";
import CardDark from "../components/CardDark";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

export default function Item() {
  const { ProductId } = useParams();
  const navigate = useNavigate();
  const { removeItem, getItem } = useContext(stockContext);
  const product = getItem(ProductId);

  if (!product) {
    // alert("Produto não encontrado, redirecionando para aba itens");
    navigate("/Itens");
    // return <h2>Oops... Esse produto não foi encontrado =(</h2>;
  }
  const date = new Date(product.creationDate);

  return (
    <Container fluid>
      <div className="d-flex mb-3 align-items-center ">
        <div className="">
          <h1>{product.name}</h1>
        </div>
        <div className="mx-4">
          <LinkBtn
            to={`/Itens/UpdateItem/${product.id}`}
            text={"Atualizar"}
            className={"btn-light mx-3"}
          />
          <LinkBtn
            onClick={() => removeItem(product.id)}
            text={"Excluir"}
            className={"btn-danger"}
          />
        </div>
      </div>
      <div
        className="d-flex align-items-center my-3"
        style={{
          margin: 0,
        }}
      >
        <CardDark>{`Categoria: ${product.categories}`}</CardDark>
        <CardDark
          className={"mx-4"}
        >{`Quantidade em estoque: ${product.quantity}`}</CardDark>
        <CardDark>{`Preço: ${+product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</CardDark>
      </div>
      <p>{product.description}</p>
      <div className="d-flex flex-row">
        <p className="me-5">{`Cadastrado em:   ${date.toLocaleString(
          "pt-BR"
        )}`}</p>
        <p>{`Atualizado em:   ${date.toLocaleString("pt-BR")}`}</p>
      </div>
    </Container>
  );
}
