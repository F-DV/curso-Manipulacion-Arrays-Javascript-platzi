/*
    Every retorna true, si TODOS los elementos cumplen
    con la condicion
*/
//Ejemplo 1 : evaluamos si todos los numeros son menores a 40
const numbers = [1,30,39,29,10,13];

const respuesta = numbers.every(item => item <= 40);
console.log(respuesta);

//Ejemplo 2 :  Reto: todos los miembros del equipo deben ser menores de 15 años

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const respuesta1 = team.every(item => item.age < 15);

console.log(respuesta1 == true ? 'Admitidos en el equipo':'Todos deben de ser menores de edad');