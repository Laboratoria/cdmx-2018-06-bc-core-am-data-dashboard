window.computeStudentsStats = (laboratoria) => {
  const studentsArray = [];
  const obj = {
    name: '',
    email: '',
    campus: '',
    generation: '',
    stats: {
      status: '',
      completedPercentage: 0,
      topics: {
        "01-Introduccion-a-programacion": {
          completedPercentage: 0,
          percentageDuration: 0,
          subtopics: {
            "00-bienvenida-orientacion": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "01-desarrollo-profesional": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "02-por-que-aprender-a-programar": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "03-tu-primer-sitio": {
              completedPercentage: 0,
              type: '',
              duration: 0,
            },
            "04-quiz": {
              completedPercentage: 0,
              type: '',
              duration: 0,
            }
          }

        },
        "02-Variables-y-tipo-de-datos": {
          completedPercentage: 0,
          percentageDuration: 0,
          subtopics: {
            "00-Tipos-de-datos-y-operadores": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "01-variables": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "02-auto-aprendizaje-MDN": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "03-comments": {
              completedPercentage: 0,
              type: '',
              duration: 0,
            },
            "04-ejercicios-guiado": {
              completedPercentage: 0,
              type: '',
              duration: 0,
            }
          }
        },
        "03-UX": {
          completedPercentage: 0,
          percentageDuration: 0,
          subtopics: {
            "00-equipos-de-desarrollo": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "01-ux-diseno": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "02-ux-vs-ui": {
              completedPercentage: 0,
              type: '',
              duration: 0,

            },
            "03-quiz": {
              completedPercentage: 0,
              type: '',
              duration: 0,
            }
          }
        }
      }


    }

  }

  window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
      campus: '',
      generation: '',
      average: 0,
      count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
      obj.campus = key;
      average = 0;
      //aqui la solucion a la vida, eso de retornar una fun que declaraste en el window y la usaras para dibujar.
      const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
        obj.generation = generation;
        const students = laboratoria[key].generacion[generation].estudiantes;
        for (student in students) {
          average += students[student].progreso.porcentajeCompletado;
          average = average / students.length;
          obj.average = average;
          obj.count = students.length;
          generationsArray.push(obj);
          console.log(generationsArray);

        }
      })

    }
    return generationsArray;
  }



}















  
  
  
window.sortStudents = (students, orderBy, orderDirection)=>{
    let ordered;
    if (orderBy == 'name'){
      if (orderDirection == 'ASC'){
        ordered = students.sort(function(a,b){
          var nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA<nameB) return -1;
          if (nameA>nameB) return 1;
          return 0;
        })
      console.log(ordered);
      }else{
        ordered = students.sort(function(a,b){
        var nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA>nameB) return -1;
        if (nameA<nameB) return 1;
        return 0;
        })
      console.log(ordered);
      }
    }else if (orderBy == 'percentage'){
      if (orderDirection == 'ASC'){
        ordered = students.sort(function (a,b){
        return (a.average - b.average);
        });
        console.log(ordered);
      }else{
        ordered = students.sort(function (a,b){
        return (b.average - a.average);
        });
        console.log(ordered);
      }
    }
    return (ordered);
  };
  window.filterStudents = (students, search) =>{
    let filtered = [];
    for (let i =0; i<students.length; i++){
      var currentS = students[i];
      if (currentS.name == search){filtered.push(currentS);}
    }
    console.log(filtered);
    return (filtered);
  };  