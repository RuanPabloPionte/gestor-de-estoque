/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const stockContext = createContext({});

export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  //   com o uso do useEffect não preciso repetir localStorage varias vezes.
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(items));
  }, [items]);

  const getItem = (id) => items.find((item) => +item.id === +id);

  const addItem = ({ name, category, quantity, price, description }) => {
    const product = {
      id: Math.floor(Math.random() * 100000),
      name: name,
      category: category,
      quantity: quantity,
      price: price,
      description: description,
      creationDate: new Date(),
    };
    setItems((items) => {
      const updatedItem = [product, ...items];
      return updatedItem;
    });
  };

  const removeItem = (id) => {
    const removedProduct = items.find((product) => product.id === id);
    if (confirm(`tem certeza que quer remover ${removedProduct.name}`)) {
      setItems((currentitem) => {
        const updatedItem = currentitem.filter((item) => item.id !== id);
        return updatedItem;
      });
    }
  };

  const updateItem = (item) => {
    const updatedProducts = items.map((product) => {
      if (product.id === +item.id) {
        return item;
      }
      return product;
    });
    setItems(() => updatedProducts);
  };

  const stock = {
    items,
    addItem,
    removeItem,
    updateItem,
    getItem,
  };

  return (
    <stockContext.Provider value={stock}>{children}</stockContext.Provider>
  );
}
