/*
    Son funciones que nos permiten mutar el array original
    push, splice(un cuchillo que le indicamos cuantas tajadas queremos)
*/
//Ejemplo 1 : Haremos una eliminacion y agregar como si fuera un carro de compras

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id =='🍔');
if(productIndex != -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);       //Recordemos que splice es como un cuchillo
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Ejemplo 2 : Actualizacion sobre un Articulo, le agregamos mas items
const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
//Cremaos la actualizacion que queremos
const update = {
    id: '🥞',
    changes: {
        price: 200,
        descipcion: 'delicious'
    }
}

//Buscamos el producto en el array que vamos a modificar
const productIndex2 = products2.findIndex(item => item.id === '🥞');
if(productIndex2 != -1){
    products2[productIndex2] = {
        ...products2[productIndex2],
        ...update.changes
    }
}
console.log(products2);