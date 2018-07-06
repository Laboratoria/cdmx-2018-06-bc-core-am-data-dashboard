// let laboratoria = fetch("https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json")
//   .then((response) => response.json())
//   .then((dataJSON) => {
//     return dataJSON;
//   });
//
// window.dataDashboard  = {
//
// 	loadSedes : () => {
//     laboratoria.then(function(dataJSON) {
//         let keys = Object.keys(dataJSON);
//         setDrawSedes(keys);
//     });
// 	},
//
//   loadGeneration : (sede) => {
//     laboratoria.then(function(dataJSON) {
//         let keys = Object.keys(dataJSON[sede]['generacion']);
//         console.log(sede);
//         console.log(keys);
//         return keys;
//     });
// 	},
// }; nancy

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

  for (let key in laboratoria) {
    if (laboratoria.hasOwnProperty(key)) {
      console.log(key);
      let generationKey = Object.keys(laboratoria[key].generacion);
      console.log(generationKey);
      let generationValue = Object.values(laboratoria[key].generacion);
      console.log(generationValue);
      for (let i = 0; i < generationValue.length; i++) {
        console.log(generationValue[i]);
        let estudiantes = generationValue[i].estudiantes;
        //console.log(estudiantes);
        for (let j = 0; j < estudiantes.length; j++) {
          console.log( estudiantes[j]);
          let name = estudiantes[j].nombre;
          console.log(name);
          let email = estudiantes[j].correo;
          console.log(email);
          let progress = estudiantes[j].progreso;
          for (let k = 0; k < progress.length; k++) {
            console.log(progress[k]);
          }
        }
      }
    }
  }
}

window.computeGenerationsStats = (laboratoria) => {}
window.sortStudents = (laboratoria) => {}
window.filterStudents = (laboratoria) => {}
