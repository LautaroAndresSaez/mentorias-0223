const users = [
  {
    edad: 28,
    nombre: "Michael Lawson",
  },
  {
    edad: 8,
    nombre: "JLindsay Ferguson",
  },
  {
    edad: 15,
    nombre: "Tobias Funke",
  },
  {
    edad: 20,
    nombre: "ByrJon Fields",
  },
  {
    edad: 25,
    nombre: "JGeorge Edwards",
  },
  {
    edad: 32,
    nombre: "Rachel Howell",
  },
];

/*
Dado un array de objetos con las propiedades 'nombre' y 'edad', crea un nuevo array
que contenga solo los objetos con nombre que empiecen por la letra 'J' y edad
mayor o igual a 25. 
*/

const filterUsers = users.filter(
  (user) => user.nombre[0] === "J" && user.edad >= 25
);

console.log(filterUsers);
console.log("----------------------------------------------------------------");
console.log(filterUsers);

const suma = require("./suma");

console.log(suma(2, 3));
