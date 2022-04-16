/*
    Some: devuelve true si cualquier elemento del 
    array que le pasemos cumple la condicion.
    Si almenos 1 cumple la condicion
*/
//Ejemplo 1 :
const numbers = [1,2,3,3];

let respuesta = numbers.some(item => item % 2 == 0);
console.log('respuesta:',respuesta);




//Ejemplo 2 : vamos a validar si una fecha se sobre pone con la otra, para esto
            //instalamos la libreria (npm i date-fns), esta libreria nos evalua entre dos fechas 
            //si se sobreponen

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  //fecha para comparar si se cruza la fecha con las que ya tenemos agendadas
const newAppointment = {
startDate: new Date(2021, 1, 1, 10),
endDate: new Date(2021, 1, 1, 11, 30),
};

  //llamamamos la libreria que se instalo
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping'); 

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        );
    });
};

console.log('isOverlap', isOverlap(newAppointment));
