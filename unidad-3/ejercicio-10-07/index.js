const express = require("express");

const noticiasRouter = require("./routes/noticias.router");

const app = express();

app.use(express.json());

app.use("/noticias", noticiasRouter);

app.listen(3000);
