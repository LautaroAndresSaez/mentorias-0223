const products = require("../models").products;

const addProduct = (product) => {
  return products.create(product);
};

const findAllProducts = () => {
  return products.findAll();
};

module.exports = {
  addProduct,
  findAllProducts,
};
