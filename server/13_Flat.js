/*
    -> Flat :  nos ayuda a manipular Arrays, que tiene Arrays dentro de otros
        array, como por ejemplo una MATRIZ.
    -> Permite que no anidemos Form como antes se hacia
    -> Permite aplanar Arrays, es decir no importa cuantos niveles de profundidad tengga
    si le indicamos hasta que profundidad queremos que llegue, el los va a convertir
    en un array
*/

const matriz = [
    [1,2,3],
    [4,5,6, [1,2,[3,4]]],
    [7,8,9]
]

const withFlat = matriz.flat(3); //como parametro le indicamos el niver de profundidad

console.log(withFlat);
