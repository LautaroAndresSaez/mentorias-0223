const { addProduct, findAllProducts } = require("./services/products.services");

addProduct({
  nombre: "Cafe",
  precio: 22.5,
  category: "Comida",
})
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

findAllProducts().then((r) => console.log(r));
