// LLAMANDO JSON        

const json = "https://raw.githubusercontent.com/soberanesmajo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

const gettingData = (data) => {
  //Mando a llamar a json mediante fetch.
  fetch(data)
    .then(res => res.json()) //Entonces le digo que a esa información la retorne como un archivo json.
    .then(laboratoria => { //Aquí le asigno el nombre de laboratoria a la información que envió.
      //console.log(laboratoria);
      sedes(laboratoria);
      computeGenerationsStats(laboratoria); //Aquí estoy diciendo que a mis siguienten funciones, les estoy mandando esa data.
      computeStudentsStats(laboratoria);
      // obtenerGenraciones(laboratoria);
    })
    .catch((error) => {
      console.log(error); //Aquí va mi función para un posible error.
    })
}
gettingData(json);

window.computeGenerationsStats = (laboratoria) => {


    let generation = [];

    let generation1 = "";
    let sede = "";
    let average1;
    let count1 = 0;


    for (key in laboratoria) {
      sede = key;
      generation1 = Object.keys(laboratoria[sede].generacion);
      generation1.forEach((elements) => {
        let average2 = 0;
        generation1 = elements;
        const students = laboratoria[sede].generacion[elements].estudiantes; // todas las estudiantes       


        for (student in students) {
          average2 += students[student].progreso.porcentajeCompletado;
          average1 = Math.round(average2 / students.length);
          count1 = students.length;
        }
        generation.push({
          'generation': generation1,
          'campus': sede,
          'average': average1,
          'count': count1
        });
      })
    }
  return generation 
  },


  window.computeStudentsStats = (laboratoria) => {

    let student = [];

    let nameStudent= "";
    let emailStudent= "";
    let sede="";
    let generation1="";
    let stats={
      // status:"",
      // completePercentaje:0,
        topics:{
        completePercentaje:0,
          // percentajeDuration:0,
        subtopics:{
          // completePercentaje:0,
          // type:"",
          // duration:0
        }
      }
    }

   for(key in laboratoria){
    sede = key;
    generation1 = Object.keys(laboratoria[sede].generacion);
    generation1.forEach((elements) => {
    generation1 = elements;
    
    const students = laboratoria[sede].generacion[elements].estudiantes; // todas las estudiantes    
    for( student in students ){
        nameStudent = students[student].nombre;
        emailStudent =students[student].correo;
         porcentajeCompletado= students[student].progreso.porcentajeCompletado
        console.log(porcentajeCompletado);
        
        const

      }
     
    
     })
    }
  };


window.sortStudents = () => {

};

window.filterStudents = () => {

};






// const generaciones = (laboratoria)=>{
// for (key in laboratoria){
//     const container buttons 
//     let generation =laboratoria[key];

// }

// }

// if(key === mexico){
//     let obtenerGeneracionesMexico = () => {
//         laboratoria[key].mexico.generacion;
//         console.log(mexico);
// }
// }
//if(campus === accessMexico){
//return obtenerGeneracionesMexico();




/*let obtenerGenracionesCDMX = (laboratoria) => {
 console.log(obtenerGenracionesCDMX);
     //let sedes = Object.keys(laboratoria);*/



// obtenerGenracionesCDMX();
// };
