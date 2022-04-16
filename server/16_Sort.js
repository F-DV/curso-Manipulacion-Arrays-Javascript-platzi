/*
    sort es un metodo de ordenamiento MUTABLE, javascript va a ordenar
    deacuerdo al codigo ascii, por esta razon puede ordenar alfabeticamente
    Debemos pararle a sort un condicional para ayudarle a ordenar
*/


const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months) //lo organiza por codigo ascii

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b);
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => a.total-b.total);
console.log(orders);