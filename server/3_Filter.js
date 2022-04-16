//Ejemplo 1 - Solo retorna los valores que complan la condicion o predicado
const words = ['spray', 'limit', 'elite','exuberant'];

const newArray = words.filter(item => item.length >= 6);

console.log(words);
console.log(newArray);

//Ejemplo 2
//Si tenemos una base de datos, lo mejor es dejar las consultas al lenguaje de la base de datos
//Si no estamos utilizando base de datos, filter es la mejor objecion para hacer consultas
const original = [
    { 
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: false,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];

const filterlist = original.filter(item => item.delivered && item.total<100);
console.log(filterlist);

//Ejempo 3: Pequeño Buscador
const search = (query) => {
    return original.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Vale'));