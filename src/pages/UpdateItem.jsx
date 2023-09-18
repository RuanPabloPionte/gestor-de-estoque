import { useContext } from "react";
import ItemsForm from "../components/ItemsForm";
import { useParams } from "react-router-dom";
import { stockContext } from "../contexts/StockContext";

export default function UpdateItem() {
  const { ProductId } = useParams();
  const { getItem } = useContext(stockContext);
  const item = getItem(ProductId);
  return (
    <>
      <h2>Atualizar {item.name}</h2>
      <ItemsForm itemToUpdate={item} />
    </>
  );
}
