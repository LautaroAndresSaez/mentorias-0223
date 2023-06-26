const getProducts = (req, res) => {
  const { producto } = req.query;
  res.send(["café", "té", "taza", producto]);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    name: "café",
  });
};

module.exports = {
  getProducts,
  getProduct,
};
