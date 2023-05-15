/*2) Agregar una función que reciba por parámetro el título a buscar, y me devuelva el titulo y la descripción encontrada, o un mensaje de "no se encontraron resultados" en caso de que no se encuentre nada. Ejemplo function return */
const leerTareas = require("./read");

const buscar = (titulo) => {
  const tareas = leerTareas();
  const tarea = tareas.find((tarea) => {
    return tarea.titulo === titulo;
  });
  if (!tarea) {
    return "no se encontraron resultados";
  }
  return tarea;
};

console.log(buscar("buscar mi mouse"));
