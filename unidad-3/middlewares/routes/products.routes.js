const { Router } = require("express");
const productsController = require("../controllers/products.controller");

const productsRouter = new Router();

productsRouter.get("/", productsController.getProducts);

productsRouter.get("/:id", productsController.getProduct);

module.exports = productsRouter;
