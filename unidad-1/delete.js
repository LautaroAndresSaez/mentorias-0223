/* Archivo delete.js: esta funcionalidad es bastante sencilla pero requiere de bastante lógica. Recibirá como parámetro un título, obtendrá el listado de tareas, y eliminará de ese listado la tarea cuyo title coincida con el parámetro que recibe. Finalmente deberá escribir el JSON de datos con el listado actualizado. */

const fs = require("fs");

function borrarTarea(titulo) {
  const jsonString = fs.readFileSync("./tareas.json");
  const tareas = JSON.parse(jsonString);
  const tareasFiltradas = tareas.filter((tarea) => {
    return titulo !== tarea.titulo;
  });
  const tareasFiltradasString = JSON.stringify(tareasFiltradas);
  fs.writeFileSync("./tareas.json", tareasFiltradasString);
  return tareasFiltradas;
}

console.log(borrarTarea("Comprar fruta"));
