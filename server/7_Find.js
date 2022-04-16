/*
    Find: me devuelve el objeto que cumple con la condicional, No me devuelve arrays
    Solo devuelve 1 Elemento, el primero que cumple la condicion.
    SI NO encuentra ninguno me devuelve undefind
*/
//Ejemplo 1 : Devuelve el primer elemento que cumpla la condicion buscada
const numbers = [1,30,49,29,10,13];

const respuesta = numbers.find(item => item == 30);
console.log(respuesta);


//Ejemplo 2 : Buscaremos un elemento por su id
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const elemento = products.find(item => item.id === '🍔');
console.log(elemento);