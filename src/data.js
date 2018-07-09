
window.computeStudentsStats = (laboratoria) => {
  // arreglo de objetos final
  let student = [];

  let campus = '';
  let name = '';
  let mail = '';
  let turnoStudent = '';
  let stats;
  let status = '';
  // let completedPercentagE = 0;
  let completedPercentage = 0;
  let topics;


  for (key in laboratoria) {
    campus = key;
    const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
      generation = generation;

      students = laboratoria[key].generacion[generation].estudiantes;
      for (let i = 0; i < students.length; i++) {
        name = students[i].nombre;
        mail = students[i].correo;
        turnoStudent = students[i].turno;
        let statS = students[i].progreso;
        completedPercentage = statS.porcentajeCompletado;

        if (completedPercentage <= 60) {
          status = 'Esta estudiante ha estudiado poco';
        } else if (completedPercentage >= 90) {
          status = 'Esta estudiante ha estudiado mucho';
        } else {
          status = 'Es una estudiante promedio';
        }
        let topics = statS.temas;
        for (key1 in topics) {
          topicS = key1;
          // subtopics = topicS
          // console.log(topicS);
        }
        student.push({
          name,
          mail,
          campus,
          generation,
          turnoStudent,
          stats: {
            status,
            completedPercentage,
            topics: { // hay que genrara un objeto de cada tema
              completedPercentage: 0,
              percentageDuration: 0,
              subtopics: {
                completedPercentage: 0,
                type: '',
                duration: 0,
              },
            },
          },
        });
      }
      // console.log(student);
    });
  }
  return student;
};


window.computeGenerationsStats = (laboratoria) => {
  const generacion = [];

  let campus = '';
  let average = '';
  let count = 0;

  for (key in laboratoria) {
    // rellenando propiedad 'campus' con la key de Laboratoria
    campus = key;
    // devolviendo un array del objeto de generaciones
    const generaciones = Object.keys(laboratoria[key].generacion);
    // console.log(generaciones);
    generaciones.forEach((generation) => {
      generation = generation;
      const students = laboratoria[key].generacion[generation].estudiantes;
      let result = '';
      for (let i = 0; i < students.length; i++) {
        let statS = students[i].progreso;
        count = students.length;
        // console.log(statS);
      }
      generacion.push({
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
  console.log(infoStudent);
  const busquedaResultado = infoStudent.filter(name => (infoStudent.name === search));
  return busquedaResultado;
};
