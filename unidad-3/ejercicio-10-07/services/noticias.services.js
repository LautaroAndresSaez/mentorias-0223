const fs = require("fs");

const saveNoticias = (noticias) => {
  const noticiasString = JSON.stringify(noticias, null, 2);
  return fs.writeFileSync("noticias.json", noticiasString, "utf-8");
};

const readNoticias = () => {
  const rawNoticias = fs.readFileSync("noticias.json");
  return JSON.parse(rawNoticias);
};

module.exports = {
  saveNoticias,
  readNoticias,
};
