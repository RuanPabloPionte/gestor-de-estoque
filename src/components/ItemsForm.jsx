import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "../components/Alert";
import { useContext, useState } from "react";
import { stockContext } from "../contexts/StockContext";

// eslint-disable-next-line react/prop-types
export default function ItemsForm({ itemToUpdate }) {
  const { addItem, updateItem } = useContext(stockContext);
  const categoriesList = ["Computer", "Gaming", "smartphone"];

  const defaultItem = {
    name: "",
    category: "",
    quantity: 0,
    price: 0,
    description: "",
  };

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemToUpdate) {
      updateItem(item);
    } else {
      addItem(item);
    }
    setItem(defaultItem);
    setShowAlert(true);
  };

  return (
    <Container>
      {showAlert && (
        <Alert
          text={"Item salvo com sucesso"}
          onClick={() => setShowAlert(false)}
        />
      )}
      <Form className="mx-5 pt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 row">
          <div className="col-sm-3">
            <Form.Label htmlFor="nome">Nome</Form.Label>
            <Form.Control
              type="text"
              className="bg-dark text-white"
              id="nome"
              name="name"
              value={item.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-sm-3">
            <Form.Label htmlFor="quantidade">Quantidade</Form.Label>
            <Form.Control
              type="number"
              className="bg-dark text-white"
              id="quantidade"
              name="quantity"
              value={item.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-3">
            <Form.Label htmlFor="preco">Preço</Form.Label>
            <Form.Control
              type="number"
              className="bg-dark text-white"
              id="preco"
              name="price"
              value={item.price}
              onChange={handleChange}
            />
          </div>

          <div className="col-sm-3">
            <Form.Label htmlFor="categoria">Categoria</Form.Label>
            <Form.Select
              className="bg-dark text-white"
              id="categoria"
              name="category"
              value={item.category}
              onChange={handleChange}
            >
              <option disabled value="">
                Categorias
              </option>
              {categoriesList.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="descricao">Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            className="bg-dark text-white mb-3"
            id="descricao"
            name="description"
            value={item.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
