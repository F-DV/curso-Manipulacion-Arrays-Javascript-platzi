/*
    FlatMap: Tiene la funcionalidad de un Flat y un Map unidos, nos permite aplar una
    matriz e ir transformandolos a medida de que los aplanamos
*/
//Ejemplo 1
const users = [
    {userId: 1, username:'Tom',attributes:['Nice','cute']},
    {userId: 2, username:'Mike',attributes:['lovely']},
    {userId: 3, username:'Nico',attributes:['Nice','cool']}
]

const answer = users.flatMap(user => user.attributes); //une los array dentro de attributes
console.log(answer);

//Ejemplo 2: Tenemos varios calendarios, El reto es que solo queremos un array
            //Lineal de las fechas de inicio de los objetos
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const answer1 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log(answer1);