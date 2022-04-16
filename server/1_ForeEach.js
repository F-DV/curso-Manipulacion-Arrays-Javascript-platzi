/*
    El forEach sirve para hacer un recorrido para renderizar varios elementos de una lista HTML
    por ejemplo, no olvidar el += para que vaya agregando uno a uno en la pagina y no 
    reemplazar uno a uno.
*/
//Ejemplo1
let elements= ['A','B','C','B','D'];

elements.forEach(item => console.log('forEach',item));

//Ejemplo 2 con HTML
const taks = [
    {title: 'Estudiar Javascript',completed: true},
    {title: 'Estudiar Arquitectura de sofware',completed: false},
    {title: 'Patrones de diseño',completed: false},
    {title: 'principios SOLID',completed: false},
]
//let app = document.getElementById('app');     //primera forma de refenciar Id
let app = document.querySelector('#app');       // segunda forma de referenciar Id
taks.forEach(item => { 
    app.innerHTML += `<li>${item.title} - ${item.completed}
                        <input type="checkbox" ${item.completed ? 'checked' :''}"> </li>`;
})