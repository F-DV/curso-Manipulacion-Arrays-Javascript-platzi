/*
    FindIndex me busca un elemento en un array, si lo encuentra me devuelve la posicion del
    primero que encuentre, si No lo encuentra, me devuelve -1
*/
//Ejemeplo 1 : buscaremos un objeto por su id
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

const position = products.findIndex(item => item.id === '🌭');
console.log('El Hot Dog esta en la posicion: ', position, 'del array');