// //Primera funcion que requiere retorne un arreglo de objetos
// window.computeStudentsStats = (laboratoria) => {
//   computeGenerationsStats(laboratoria);
//   const students = [
//     {
//       campus : "",
//       generation: "",
//       stats: {
//         completedPercentage: 0,
//         percentageDuration: 0,
//         subtopic: {
//             completado: 1,
//             duracionSubtema: 55,
//             tipo: "lectura"
//         }
//       }
//     }
//   ];
// };
//
// window.getCampus = (laboratoria) => {
//   const campusArray = [];
//   const generationsArray = [];
//   for (key in laboratoria) {
//     const obj = {
//         campus: '',
//         generation: '',
//     };
//       obj.campus = key;
//       obj.generacion = laboratoria.generacion;
//
//       campusArray.push(obj.campus);
//       generationsArray.push(key.generacion);
//       //console.log(key.generacion);
//       //console.log(generationsArray[0]);
//     }
//
//     console.log(laboratoria.lima.generacion);
//     console.log(laboratoria.mexico.generacion);
//     console.log(laboratoria.santiago.generacion);
//     for (let i = 0; i < campusArray.length; i++) {
//       // for (let j = 0; j < generationsArray.length; i++) {
//       //   console.log(generationsArray[j]);
//       // }
//       // console.log(campusArray[i]);
//       drawCampus(campusArray[i]);
//     };
//     //console.log(lima.generacion);
// };
//
// //Manejo de la data para generaciones
// window.computeGenerationsStats = (laboratoria) => {
//     const generationsArray = [];
//     const obj = {
//         campus: '',
//         generation: '',
//         average: 0,
//         count: 0,
//     };
//     // let average = 0;
//     for (key in laboratoria) {
//         obj.campus = key;
//         generationsArray.push(obj);
//         campusArray.push(key);
//
//     }
//     for (let i = 0; i < campusArray.length; i++) {
//       //console.log(generationsArray[i]);
//       //drawCampus(campusArray[i]);
//     };
//     return generationsArray;
// };

let url = ("https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json");

window.onload = () => {
  fetch(url)
  .then(response => response.json())
  .then(laboratoria => {
    //console.log(laboratoria);
    //getData(laboratoria);
    computeStudentsStats(laboratoria);
  })
  .catch(error => {
    console.log("error");
  })
};


window.computeStudentsStats = (laboratoria) => {
  const students = [];
  // let campus = "", generation = "", name ="", student = [];
  const obj = {
      name: "",
      campus: "",
      generation: "",

  };
    for (key in laboratoria) {
        // campus = key;
        // obj.campus = campus;
        let campus = key;
        // students.push(obj.campus);
        console.log(campus);
        let generation = Object.values(laboratoria[key].generacion);
        //console.log(Object.keys(generation));
        //let generation = Object.keys(laboratoria[key].generacion);
        // generation = generation;
        console.log(generation);

        // for (let i = 0; i < generation.length; i++) {
        //   //console.log(generation[i]);
        //   let estudiantes = generation[1].estudiantes;
        //   //console.log(estudiantes);
        //   for (let j = 0; j < estudiantes.length; j++) {
        //     console.log(estudiantes[j]);
        //   }
        // }

        //console.log(generation.cuarta.estudiantes);
        // students.push(obj.generation);
        //console.log(obj.generation);
        // for (let i = 0; i < array.length; i++) {
        //   array[i]
        // }
      }
      //console.log(students);
  // console.log(Object.values(laboratoria)[0]);
  // console.log(Object.values(laboratoria)[1]);
  // console.log(Object.values(laboratoria)[2]);
}

window.computeGenerationsStats = (laboratoria) => {

}
