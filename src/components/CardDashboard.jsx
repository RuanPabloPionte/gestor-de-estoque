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
        titlle={"Diversidade de items"}
        number={getTotalCategories(items)}
      />
      <CardDashboardInfo
        titlle={"Iventário total"}
        number={getTotalQuantityInStock(items)}
      />
      <CardDashboardInfo
        titlle={"Itens recentes"}
        number={getRecentItens(items).length}
      />
      <CardDashboardInfo
        titlle={"Itens acabando"}
        number={lowStockItens(items).length}
      />
    </Row>
  );
};

export default CardSection;
