/*
1. Para trabajar un poco co n los métodos de arrays vamos a crear las
siguientes funciones:
a. Una función que reciba un array y devuelva otro que contenga todos
los elementos mayores o iguales a 10.
b. Una función que reciba un array y retorne true si el array incluye el
número 5 y false en caso contrario.
c. Una función que reciba un array y un número, la cual debe retornar un
array con todos los elementos mayores o iguales a dicho número.
d. Por último, una función que reciba un array y un número. Dicha
función, debe retornar true en caso de que el número se encuentre en
el array y false en caso contrario.
*/

const numeros = [1, 15, 10, 50, 25, 100, 5];

const eliminarMenoresADiez = (array) => {
  const nuevoArray = [];
  array.forEach((numero) => {
    if (numero >= 10) {
      nuevoArray.push(numero);
    }
  });
  return nuevoArray;
};

const eliminarMenoresADiezConFilter = (array) => {
  return array.filter((numero) => numero >= 10);
};

const incluyeCinco = (array) => {
  return array.some((numero) => numero === 5);
};

const incluyeCincoConIncludes = (array) => {
  return array.includes(5);
};

const eliminarMenoresAn = (array, n) => {
  return array.filter((numero) => numero >= n);
};

const incluyeAn = (array, n) => {
  return array.includes(n);
};

const y = 5;

incluyeAn(numeros, y);

console.log(incluyeAn(numeros, y));
