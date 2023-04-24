/* 
1) Agregar una función que reciba por parámetros el título y la descripción de la tarea a agregar en el archivo "data.json". Ejemplo function add

2) Agregar una función que reciba por parámetro el título a buscar, y me devuelva el titulo y la descripción encontrada, o un mensaje de "no se encontraron resultados" en caso de que no se encuentre nada. Ejemplo function return
*/

const fs = require("fs");

const agregarTarea = (titulo, descripcion) => {
  //1-leer el archivo de tareas
  const tareasString = fs.readFileSync("./tareas.json");
  const tareas = JSON.parse(tareasString);
  //2-agrego la nueva tarea
  const tarea = {
    titulo: titulo,
    descripcion: descripcion,
  };
  tareas.push(tarea);
  //3-guardar la tarea
  const nuevasTareasString = JSON.stringify(tareas);
  fs.writeFileSync("./tareas.json", nuevasTareasString);
};

agregarTarea("Dar clases", "Dar clases a las 19h");
