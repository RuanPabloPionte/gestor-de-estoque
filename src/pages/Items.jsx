import Table from "react-bootstrap/Table";
import LinkBtn from "../components/LinkButton";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

export default function Items() {
  const { items, removeItem } = useContext(stockContext);

  return (
    <Table striped bordered hover responsive variant="dark">
      <thead>
        <tr className="">
          <th>Id</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categorias</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity + " Unit"}</td>
              <td>{item.category}</td>
              <td className="d-flex flex-wrap justify-content-start aling-items-center p-2 gap-2">
                <LinkBtn to={`/Itens/${item.id}`} text={"Ver"} className={""} />
                <LinkBtn
                  to={`/Itens/UpdateItem/${item.id}`}
                  text={"Atualizar"}
                  className={"btn-light"}
                />
                <LinkBtn
                  onClick={() => removeItem(item.id)}
                  text={"Excluir"}
                  className={"btn-danger"}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
