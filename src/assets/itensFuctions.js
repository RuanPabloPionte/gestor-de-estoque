function getTotalCategories(products) {
  const categories = [
    ...new Set(products.map((product) => product.categories)),
  ];
  return categories.length;
}

function LowStockItens(products) {
  const lowStock = products.filter((product) => product.quantity < 10);
  return lowStock;
}

//filtra os items que foram criados nos ultimos 10 dias
function getRecentItens(products) {
  const today = new Date();
  const tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 30);

  const recentItens = products.filter((product) => {
    const creationgdate = new Date(product.creationDate);
    return creationgdate >= tenDaysAgo;
  });

  return recentItens;
}

function getTotalQuantityInStock(products) {
  const quantity = products
    .map((product) => +product.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return quantity;
}

// console.log("Total Categories:", getTotalCategories());
// console.log("Low Stock Items:", getLowStockCount());
// console.log("Total Quantity in Stock:", getTotalQuantityInStock());

// const date = new Date();
// console.log(date.toLocaleString());

export {
  getTotalCategories,
  LowStockItens,
  getTotalQuantityInStock,
  getRecentItens,
};
