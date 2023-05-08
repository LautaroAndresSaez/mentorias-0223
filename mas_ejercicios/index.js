/*
 Vamos a trabajar un poco con objetos, para este ejercicio usaremos un
objeto de esta forma:
a. Debemos crear una función que reciba a un usuario como parámetro y
que retorne “Hola Luis Miguel sos mayor de edad”, en caso de que el
usuario tenga al menos 18 años y “Hola Luis Miguel sos menor de
edad” si el usuario tiene menos de 18 años. TIP: Quizás te sirva
alguna de las funciones que creaste en ejercicios anteriores.
b. Ahora crearemos una función que reciba un usuario y un curso, y
retorne el usuario con el nuevo curso. Por ejemplo si recibimos al
usuario del ejemplo y el curso de “Introducción a las bases de datos”,
la función debe retornar:
*/

const javier = {
  nombre: "Javier",
  apellido: "Miguel",
  edad: 18,
  cursos: ["JS"],
};

const esteban = {
  nombre: "Estaban",
  apellido: "Miguel",
  edad: 25,
  cursos: ["JS"],
};

const saludarUsuario = (usuario) => {
  if (usuario.edad >= 18) {
    return `Hola ${usuario.nombre} ${usuario.apellido} sos mayor de edad`;
  }
  return `Hola ${usuario.nombre} ${usuario.apellido} sos menor de edad`;
};

const agregarCurso = (usuario, curso) => {
  usuario.cursos.push(curso);
  console.log("Estoy dentro de la funcion", usuario);
  return usuario;
};

console.log(agregarCurso(javier, "Base datos"));
