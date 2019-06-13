console.log('conectado');
const showResult = document.getElementById('result-list');

// Definición de la primera función 
window.computeStudentsStats = (laboratoria) => {
  let studentLab = [];
  let name;
  let email;
  let averageSt;
  let statusSt;
  let numberG;
  let topicsSt;
  let turn;

  for (city in laboratoria) { // primer iteración con for in
    let sede = city;
    const generations = Object.keys(laboratoria[city].generacion);
    // console.log(generations);
    generations.forEach((genNumber) => { // 1º for each para extraer los valores de cada generación
      numberG = genNumber;
      const students = laboratoria[city].generacion[genNumber].estudiantes;
      // console.log(students);
      students.forEach((student) => {
        name = student.nombre;
        email = student.correo; 
        turn = student.turno;
        // console.log(turn);
        averageSt = student.progreso.porcentajeCompletado; 
        // condición para valorar el avance de la estudiante
        if (averageSt < 60) {
          statusSt = 'below'; // Si está debajo del 60%, aparecerá "below"
        } else if (averageSt > 90) {
          statusSt = 'over'; // Si  está sobre el 90%, aparecerá "over"
        } else {
          statusSt = 'average'; // Si está dentro de la media, aparecerá "average"
        };
        // console.log(averageSt);
        const topics = Object.keys(student.progreso.temas);
        // console.log(topics);
        for (topic of topics) {
          let topicsRoute = Object.defineProperty(student.progreso.temas, topic, { writable: true });
          topicsSt = topicsRoute;
          // console.log(topicsSt);
          studentProgressTopic = Object.values(topicsSt);
          for (i = 0; i < studentProgressTopic.length; i++) { 
            // console.log(studentProgressTopic)
            studentProgressTopic[i].completedPercentage = studentProgressTopic[i].porcentajeCompletado;
            let topicProgress = (studentProgressTopic[i].duracionTemaCompletado * 100) / studentProgressTopic[i].duracionTema;
            studentProgressTopic[i].percentageDuration = Math.round(topicProgress);
            studentProgressTopic[i].subtopics = studentProgressTopic[i].subtemas;
          }
        };
        // agregar objetos al arreglo student
        studentLab.push({
          'name': name,
          'email': email,
          'campus': sede,
          'generation': numberG,
          'turn': turn,
          'stats': {
            'status': statusSt,
            'completedPercentage': averageSt,
            'topics': topicsSt
          }
        }); // console.log(studentLab);
      });
    });
  }
  // console.log(studentLab);
  printerComputeStudentsStats(studentLab);
  return studentLab;
};
// SEGUNDA FUNCIÓN:
window.computeGenerationsStats = (laboratoria) => {
  // arreglo generation
  let generations = [];
  // objetos generation
  let campus = '';
  let generation = '';
  let count = '';
  // Variables de un uso: 
  let eachGenPercent = 0;
  let totalStudentPerGeneration = 0;

  // arreglo de objetos
  for (sedes in laboratoria) {
    campus = sedes;
    const gen = Object.keys(laboratoria[sedes].generacion);
    for (let numberG of gen) {
      generation = numberG;
      const stud = laboratoria[sedes].generacion[numberG].estudiantes;
      let totalStud = stud.length;
      count = totalStud;
      for (eachStudent in stud) {
        eachGenPercent += laboratoria[sedes].generacion[numberG].estudiantes[eachStudent].progreso.porcentajeCompletado;
      }
      totalStudentPerGeneration += count;
      let totalAverage = Math.round(eachGenPercent / totalStudentPerGeneration);
      generations.push({'campus': campus,
        'generation': generation,
        'average': totalAverage,
        'count': count
      }); 
    }
  }
  console.log(generations);
  printercomputeGenerationsStats(generations);
  return generations; 
  // se cierra el segundo for in al nivel generaciones
};
    
    
// se cierra primer fon in al nivel sedes
// }
    
// }
    
