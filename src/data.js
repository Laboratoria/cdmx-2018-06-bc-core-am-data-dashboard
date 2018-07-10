// FUNCION LISTA DE ESTUDIANTES
window.computeStudentsStats = (laboratoria) => {
  //ARREGLO QUE CONTIENE LOS OBJETOS ESTUDIANTES
  let student = [];
// VARIABLES QUE SERAN PROPIEDADES DE CADA OBJETO
  let campus = '';
  let name = '';
  let mail = '';
  let turnoStudent = '';
  let status = '';
  let topics;
  let percentageDuration = 0;
  let subtopics = {
    completedPercentageST: 0,
    type: '',
    duration: 0,
  };
   //FOR PARA OBTENER EL NOMBRE DE CADA SEDE
  for (key in laboratoria) {
    campus = key;  // GUARDANDO SEDES EN VARIABLE CAMPUS
    // OBTENIENDO GENERACION
    const generations = Object.keys(laboratoria[key].generacion);
    generations.forEach((generation) => {
      generation = generation;
      // LLEGANDO A LOS OBJETOS ESTUDIANTES
      students = laboratoria[key].generacion[generation].estudiantes;
      // SACANDO DATOS NOMBRE, CORREO Y TURNO
      for (let i = 0; i < students.length; i++) {
        name = students[i].nombre;
        mail = students[i].correo;
        turnoStudent = students[i].turno;
        // UN OBJETO CON PROPIEDAD STATUS Y COMPLETED PERCENTAGE
        let statS = students[i].progreso;
        // OBTENIENDO COMPLETED PERCENTAGE
        const completedPercentage = statS.porcentajeCompletado;
        // OBTENIENDO ESTATUS DE CADA ESTUDIANTE
        if (completedPercentage <= 60) {
          status = 'Esta estudiante ha estudiado poco';
        } else if (completedPercentage >= 90) {
          status = 'Esta estudiante ha estudiado mucho';
        } else {
          status = 'Es una estudiante promedio';
        }

        let topicsS = statS.temas;
        let completedPercentageT = 0;
        // let topicsSarr = Object.keys(topicsS);
        // console.log(topicsS.length);

        for (key1 in topicsS) {
          const completedPercentageT = topicsS[key1].porcentajeCompletado;


          student.push({
            name,
            mail,
            campus,
            generation,
            turnoStudent,
            stats: {
              status,
              completedPercentage,
              topics: {
                completedPercentageT,
                percentageDuration: 0,
              }
            },
          });
        }
      }
    });
    console.log(student);
  }
  return student;
};

// FUNCION GENERACIONES
window.computeGenerationsStats = (laboratoria) => {
  // ARREGLO QUE CONTIENE LOS OBJETOS DE GENERACION
  const generacion = [];
  // VARIABLES DECLARADAS QUE SERAN PROPIEDAD DE CADA OBEJETO
  let campus = '';
  let average = 0;
  let count = 0;
// FOR QUE OBTIENE LAS KEYS
  for (key in laboratoria) {
    // RELLENANDO PROPIEDAD 'CAMPUS' CON LA KEY LABORATORIA
    campus = key;
    // DEVOLVIENDO UN ARRAR DEL OBJETO DE GENERACIONES
    const generaciones = Object.keys(laboratoria[key].generacion);
    // console.log(generaciones);
    generaciones.forEach((generation) => {
      generation = generation;
      // ENTRANDO A LA DATA PARA OBTENER LAS ESTUDIANTES
      const students = laboratoria[key].generacion[generation].estudiantes;
        average = 0;
      //  FOR QUE PERMITE OBETENER EL PORCENTAJE COMPLETADO
      for (let i = 0; i < students.length; i++) {
        let progress = students[i].progreso.porcentajeCompletado;
        // EN LA VARIABLE AVERAGE SE VAN SUMANDO LOS PORCENTAJES COMPLETADOS
        average += progress;  // SE VA SUMANDO EL PORCENTAJE COMPLETADO POR CADA CICLO QUE REALIZA EL FOR
        count = students.length;  // VARIABLE QUE INDICA EL NUMERO DE ALUMNAS
      }
      average = Math.round(average / count);  //AVERAGE OBTENDA EL PORCENTAJE DE COMPLETITUD POR ALUMNA
      generacion.push({ // PUSH VA AGREGANDO LOS DATOS OBTENIDOS Y LOS GUARDA EN OBJETOS DE UN ARREGLO NUEVO LLAMADO GENERACION
        campus,
        generation,
        average,
        count,
      });
    });
  }
  return generacion;
};


window.sortStudents = () => {
  return;
},
window.filterStudents = (infoStudent, search) => {
//   console.log(infoStudent);
  const busquedaResultado = infoStudent.filter(name => (infoStudent.name === search));
  return busquedaResultado;
};
