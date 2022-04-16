/*
    -> Includes : Nos dice si un elemento esta en el array o si ALGUNA PARTE
        del elemento no tiene que ser el elemento completo
    -> El inclune no recibe un arrow Funtion
    -> No permite buscar array de objetos, tendriamos que pasarle el objeto especifico
    -> Tambien funciona para strings
    -> devuelve true or false
    -> También posee un segundo parámetro que es el fromIndex, que es la posición 
    donde comenzar a buscar el valor en el array.
    */
const pets = ['cat','dog','bat'];
const answer = pets.includes('cat');

console.log('La respuesta es: ',answer);

