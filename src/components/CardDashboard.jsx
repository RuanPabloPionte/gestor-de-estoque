import {
  getTotalCategories,
  lowStockItens,
  getTotalQuantityInStock,
  getRecentItens,
} from "../assets/itensFuctions";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";
import CardDashboardInfo from "./CardDashboardInfo";

const CardSection = () => {
  const { items } = useContext(stockContext);
  return (
    <Row>
      <CardDashboardInfo
        title={"Diversidade de items"}
        number={getTotalCategories(items)}
      />
      <CardDashboardInfo
        title={"Iventário total"}
        number={getTotalQuantityInStock(items)}
      />
      <CardDashboardInfo
        title={"Itens recentes"}
        number={getRecentItens(items).length}
      />
      <CardDashboardInfo
        title={"Itens acabando"}
        number={lowStockItens(items).length}
      />
    </Row>
  );
};

export default CardSection;
