const express = require("express");
const productsRouter = require("./routes/products.routes");
const { query, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

app.get("/", [query("id").isNumeric()], (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(404).send(result.errors);
  }
  res.send({
    id: req.query.id,
    name: "Javi",
  });
});

app.use("/products", require("./routes/products.routes"));

app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
