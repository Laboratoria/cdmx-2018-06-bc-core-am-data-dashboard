window.computeStudentsStats = (laboratoria) => {
    const studentsArray = [];
  
    const objStudents = {
      name: '',
      email: '',
      campus: '',
      generation: '',
      stats: {
        status: '',
        completedPercentage: 0,
        topics: {
          '01-Introduccion-a-programacion': {
            completedPercentage: 0,
            percentageDuration: 0,
            subtopics: {
              '00-bienvenida-orientacion': {
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
              '01-desarrollo-profesional': {
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
              '02-por-que-aprender-a-programar': {
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "03-tu-primer-sitio": {
=======
              '03-tu-primer-sitio': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
              },
<<<<<<< HEAD
              "04-quiz": {
=======
              '04-quiz': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
              }
            }
  
          },
<<<<<<< HEAD
          "02-Variables-y-tipo-de-datos": {
            completedPercentage: 0,
            percentageDuration: 0,
            subtopics: {
              "00-Tipos-de-datos-y-operadores": {
=======
          '02-Variables-y-tipo-de-datos': {
            completedPercentage: 0,
            percentageDuration: 0,
            subtopics: {
              '00-Tipos-de-datos-y-operadores': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "01-variables": {
=======
              '01-variables': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "02-auto-aprendizaje-MDN": {
=======
              '02-auto-aprendizaje-MDN': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "03-comments": {
=======
              '03-comments': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
              },
<<<<<<< HEAD
              "04-ejercicios-guiado": {
=======
              '04-ejercicios-guiado': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
              }
            }
          },
<<<<<<< HEAD
          "03-UX": {
            completedPercentage: 0,
            percentageDuration: 0,
            subtopics: {
              "00-equipos-de-desarrollo": {
=======
          '03-UX': {
            completedPercentage: 0,
            percentageDuration: 0,
            subtopics: {
              '00-equipos-de-desarrollo': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "01-ux-diseno": {
=======
              '01-ux-diseno': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "02-ux-vs-ui": {
=======
              '02-ux-vs-ui': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
  
              },
<<<<<<< HEAD
              "03-quiz": {
=======
              '03-quiz': {
>>>>>>> upstream/master
                completedPercentage: 0,
                type: '',
                duration: 0,
              }
            }
          }
        }
  
  
      }
<<<<<<< HEAD
  
    };
    for (key in laboratoria) {
      
    }
  
  
  
  
  }
  
  
  window.computeGenerationsStats = (laboratoria) => {
    generationsArray = [];
    const objGenerations = {
      campus: '',
      generation: '',
      average: 0,
      count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
  
      objGenerations.campus = key;
      // let average = 0;
      const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
        objGenerations.generation = generation;
=======
    };
    for (key in laboratoria) {
  
      objStudents.campus = key;
      const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
        objStudents.generation = generation;
>>>>>>> upstream/master
        const students = laboratoria[key].generacion[generation].estudiantes;
        let suma = 0;
         
        
        for (student in students) {
<<<<<<< HEAD
          suma += students[student].progreso.porcentajeCompletado;
          average = Math.round(suma / students.length);
          objGenerations.average = average;
          objGenerations.count = students.length;
        }
        generationsArray.push(objGenerations);
        console.log(objGenerations);
  
        // average = average / students.length;
        //   console.log(students.length);
        //   console.log(average);
  
      })
      
    }
    return(generationsArray);
  }
  
  
  
  window.sortStudents = (students, orderBy, orderDirection) => {
    let ordered;
    if (orderBy == 'name') {
      if (orderDirection == 'ASC') {
        ordered = students.sort(function (a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
        console.log(ordered);
      } else {
        ordered = students.sort(function (a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
        console.log(ordered);
      }
    } else if (orderBy == 'percentage') {
      if (orderDirection == 'ASC') {
        ordered = students.sort(function (a, b) {
          return (a.average - b.average);
        });
        console.log(ordered);
      } else {
        ordered = students.sort(function (a, b) {
          return (b.average - a.average);
        });
        console.log(ordered);
      }
    }
    return (ordered);
  };
  window.filterStudents = (students, search) => {
    let filtered = [];
    for (let i = 0; i < students.length; i++) {
      var currentS = students[i];
      if (currentS.name == search) {
        filtered.push(currentS);
      }
    }
    console.log(filtered);
    return (filtered);
  };
  
=======
          objStudents.name = students[student].estudiantes[nombre];
          console.log(objStudents.name);
          objStudents.email = students[student].estudiantes.correo;
          objStudents.stats.completedPercentage = students[student].progreso.porcentajeCompletado;
          console.log(objStudents);
  
          if (objStudents.stats.completedPercentage <= 60) {
  
            objStudents.stats.status = 'Delayed';
  
          } else if (objStudents.stats.completedPercentage <= 90) {
  
            objStudents.stats.status = 'Optimus';
          } else {
            objStudents.stats.status = 'Excellent';
          }
        }
      })
    }
}




window.computeGenerationsStats = (laboratoria) => {
    generationsArray = [];
    const objGenerations = {
      campus: '',
      generation: '',
      average: 0,
      count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
  
      objGenerations.campus = key;
      // let average = 0;
      const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
        objGenerations.generation = generation;
        const students = laboratoria[key].generacion[generation].estudiantes;
        //console.log(laboratoria[key].generacion[generation].estudiantes);
        let suma = 0;
         for (student in students) {
          suma += students[student].progreso.porcentajeCompletado;
          average = Math.round(suma / students.length);
          objGenerations.average = average;
          objGenerations.count = students.length;
        }
        generationsArray.push(objGenerations);
        console.log(generationsArray);
        
        
      })
  
    }
    return (generationsArray);
}
  
window.sortStudents = (students, orderBy, orderDirection) => {
    
}

window.filterStudents = (students, search) => {
    
};
    
  
  
  
  
  
  
>>>>>>> upstream/master
