const express = require("express");
const ejs = require("ejs");
const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

const productos = [
  {
    nombre: "Mate",
    precio: 250,
  },
  {
    nombre: "Compu",
    precio: 5000,
  },
  {
    nombre: "Vaso",
    precio: 300,
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    productos,
  });
});

app.get("/json", (req, res) => {
  res.send({
    saludo: "hello world!",
  });
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
