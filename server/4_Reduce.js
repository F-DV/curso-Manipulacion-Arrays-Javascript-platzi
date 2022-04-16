/*
    -> A reduce tenemos que enviale 2 parametros, valor de salida e inicializador
    -> Se puede retornar un objeto y este se considera como 1 valor de salida
    */
//Ejemplo 1
const totals = [1,2,3,4];

let sum = 0;
//reduce como primer parametro va la funcion, como segundo parametro el estado inicial
const respuesta = totals.reduce((sum, element )=> sum + element,0);
console.log('reduce',respuesta);

//Ejemplo 2 : ¿Cuantas veces aparece un numero en un array?
const items = [1,2,5,5,3,3,3,3,6]; 
const numbercount = items.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] += 1;
    }
    return obj;

},{});

console.log(numbercount);

//Ejemplo 3 : Vamos a concatener map y reduce para buscar cuantos usuarios hay en ciertos niveles
const users = [
    { 
        customerName: 'Nicolas',
        level: 'medium',
    },
    {
        customerName: 'Zulema',
        level: 'medium',
    },
    {
        customerName: 'Santiago',
        level: 'low',
    },
    {
        customerName: 'Valentina',
        level: 'higth',
    },
    {
        customerName: 'Felipe',
        level: 'higth',
    },
    {
        customerName: 'Andres',
        level: 'low',
    },
];

const levels = users
.map(item => item.level)
.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] += 1;
    }
    return obj;
},{});

console.log(levels);

//Ejemplo 4: Reto 
/*
    Contar por grupos de numeros, es decir cuatos hay de (1-5),(6-8),(9,10)
*/

const numbers = [1,2,3,4,5,6,7,8,9,10,5,9,8,7,6,4,2,1,5,8,5,5,6,9,7,7,4];


const counters = numbers
.reduce((obj,item)=>{
    if((item >= 1 && item<=5)){     //comparamos los items
        obj['1-5']  += 1;           //sumamos en el objeto si cumple
    }else if((item >= 6 && item<=8)){
        obj['6-8'] += 1;
    }else if(item >= 9){
        obj['9-10'] += 1; 
    }
    return obj;
},{
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
});
console.log(counters);




