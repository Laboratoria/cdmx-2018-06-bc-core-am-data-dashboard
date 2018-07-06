// LLAMANDO JSON        

const json = "https://raw.githubusercontent.com/soberanesmajo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

const gettingData = (data) => {
  //Mando a llamar a json mediante fetch.
  fetch(data)
    .then((res) => { //Aquí ya tiene la información.
      return res.json(); //Entonces le digo que a esa información la retorne como un archivo json.
    })
    .then((laboratoria) => { //Aquí le asigno el nombre de laboratoria a la información que envió.
      sedes(laboratoria);
      generations(laboratoria);
      computeGenerationsStats(laboratoria); //Aquí estoy diciendo que a mis siguienten funciones, les estoy mandando esa data.
      computeStudentsStats(laboratoria);

    })
    .catch((error) => {
      console.log(error);
      //Aquí va mi función para un posible error.
    })
}
gettingData(json);

window.computeGenerationsStats = (laboratoria) => {

  let generation = [];

  let generation1 = "";
  let sede = "";
  let average1 = 0;
  let count1 = 0;

  for (key in laboratoria) {
    sede = key; // Está me arroja las llaves del objeto JSON (lima, mexico, santiago)
    generation1 = Object.keys(laboratoria[sede].generacion); //Indico que quiero entrar a generación. Object.keys convierte a array mi objeto y marco la ruta a generaciones. Siempre indico la ruta antes de iterar.
    generation1.forEach(elements => { //generation1 es mi arreglo a iterar. forEach me regresa los elementos de ese array.
      let average2 = 0; // Esta variable hace el corte del flujo por generación.
      generation1 = elements; // generation1 es igual a elements porque son las propiedades específicas (cuarta, quinta, tercera).

      const students = laboratoria[sede].generacion[generation1].estudiantes; //Se usa [] para entrar porque es variable. Sino es con .
      for (student in students) {
        average2 += students[student].progreso.porcentajeCompletado; //Llegando al porcentajeCompletado (un número) se estará sumando.
        average1 = Math.round(average2 / students.length); //Saca promedio y redondea la cifra.
        count1 = students.length;
      }

      generation.push({
        "generation": generation1,
        "campus": sede,
        "average": average1,
        "count": count1
      });
    })
  }
  return generation;

}

window.computeStudentsStats = (laboratoria) => {

  let student = [];

  let nameStudent = "";
  let emailStudent = "";
  let sede = "";
  let generation1 = "";
  let stats = {};
  let status = 0;
  let completedPercentage1 = 0;
  let topics = {};
  let completedPercentage2 = 0;
  let percentageDuration2 = 0;
  let subtopics = {};
  let completedPercentage3 = 0;
  let type1 = "";
  let duration1 = 0;

  for (key in laboratoria) {
    sede = key;
    generation1 = Object.keys(laboratoria[sede].generacion);
    generation1.forEach(elements => {
      generation1 = elements;


      const students = laboratoria[sede].generacion[generation1].estudiantes; // Nos situamos a partir de las estudiantes.
      for (laboStudent in students) { // Iteramos students para acceder al nombre y correo.
        nameStudent = students[laboStudent].nombre;
        emailStudent = students[laboStudent].correo;
        completedPercentage1 = students[laboStudent].progreso.porcentajeCompletado; // Trazamos la ruta hacia porcentajeCompletado y creamos condiacionales para identificar el status de cada estudiante.
        if (completedPercentage1 < 60) {
          let status1 = (stats[status] = completedPercentage1);
          status = status1;
        } else if (completedPercentage1 >= 90) {
          let status2 = (stats[status] = completedPercentage1);
          status = status2;
        } else {
          let status3 = (stats[status] = completedPercentage1);
          status = status3;
        }


        const temas = students[laboStudent].progreso.temas; // Trazamos la ruta para llegar al objeto temas y lo iteramos para sacar sus propiedades-objeto.
        for (tema in temas) {
          completedPercentage2 = temas[tema].porcentajeCompletado;
          let duracionTemaCompletado = temas[tema].duracionTemaCompletado;
          let duracionTema = temas[tema].duracionTema;
          percentageDuration2 = Math.round((duracionTemaCompletado * 100) / duracionTema); // Regla de 3 para sacar el resultado

          const subtemasCompletados = temas[tema].subtemasCompletados;
          const subtemasTotales = temas[tema].subtemasTotales;
          completedPercentage3 = Math.round((subtemasCompletados * 100) / subtemasTotales); // Regla de 3 para sacar el resultado
          const subtemas = temas[tema].subtemas;
          for (subtema in subtemas) {
            type1 = subtemas[subtema].tipo;
            duration1 = subtemas[subtema].duracionSubtema;
          }

        }

        student.push({
            "name": nameStudent,
            "email": emailStudent,
            "campus": sede,
            "generation": generation1,
            "stats": {
              "status": status,
              "completedPercentage": completedPercentage1,
              "topics": {
                "completedPercentage": completedPercentage2,
                "percentageDuration": percentageDuration2,
                "subtopics": {
                  "completedPercentage": completedPercentage3,
                  "type": type1,
                  "duration": duration1
                }
              }
            }
          });

      }


    })


  }
  console.log(student);
  return student;
  
}

window.sortStudents = ( students,orderBy,orderDirection ) => {

}

window.filterStudents = (students,search) => {

}