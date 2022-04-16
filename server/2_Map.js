//Ejemplo 1
const letters = ['a','b','c','d'];

const newLetters = letters.map(item => item + '++');

console.log(letters);
console.log(newLetters);

//Ejemplo 2 -- Map renderixando html
const taks = [
    {title: 'Estudiar Javascript',completed: true},
    {title: 'Estudiar Arquitectura de sofware',completed: false},
    {title: 'Patrones de diseño',completed: false},
    {title: 'principios SOLID',completed: false},
]
//let app = document.getElementById('app');     //primera forma de refenciar Id
let app = document.querySelector('#app');       // segunda forma de referenciar Id

const newList = taks.map(item => { 
    return `<li>${item.title} - ${item.completed}
                        <input type="checkbox" ${item.completed ? 'checked' :''}"> </li>`;
})
app.innerHTML = newList.join('');         //join imprime todo lo que hay en una lista previa, no iteracion por iteracion

//Ejmeplo 3 : Map no puede agregar nuevos atributos a un objeto, ya que modifica el original
        //
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

const orders = original.map(item => {
    return item.total;
}); 

//Agrega un nuevo atributo SIN EMBARGO modifica el array original

/* const addAtribute = original.map(item => {
    return item.tax = .19;
}) */

// La forma correcta de agregar un atributo a un nuevo array dejando el original inmutable es usando (...) de ES6
const addAtributeCorrectly = original.map(item => {
    return {
        ...item,            //copiamos los items que ya tenia
        tax: .19            // y agregmos uno nuevo
    }
})
console.log(original);
console.log(orders);
//console.log(addAtribute);
console.log(addAtributeCorrectly);
