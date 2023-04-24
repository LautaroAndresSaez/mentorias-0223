const fs = require("fs");

const readTareas = () => {
  return JSON.parse(fs.readFileSync("./tareas.json", "utf8"));
};

module.exports = readTareas;
