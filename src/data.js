window.computeVenuesStats = (laboratoria) =>{
  let venuesArray =[];
  let objVenues = {
    venue: '',
    //generation: '',
    activeStudents : 0,
    advanceStudents : 0,
    inLowStudents : 0,
    average : 0,
    readingAverage: 0,
    quizAverage: 0,
    timeAverage : 0,
  };
  let average = 0;
  let advanceStudents = 0;
  let inLowStudents =0;
  let numStudents =0;
  let readingAverage = 0;
  let quizAverage =0;
  let timeAverage =0;
  for (key in laboratoria){
    let myobj = new Object();
    average = 0;
    advanceStudents = 0;
    inLowStudents =0;
    numStudents =0
    readingAverage = 0;
    quizAverage =0;
    timeAverage =0;
    myobj.venue = key;
    let generations = laboratoria[key].generacion;
    for(generation in generations){
      const students = laboratoria[key].generacion[generation].estudiantes;
      numStudents += students.length;
      for (student in students){
        average += students[student].progreso.porcentajeCompletado;
        timeAverage += students[student].progreso.duracionPrograma;
        if (students[student].progreso.porcentajeCompletado<=60){
          inLowStudents++;
        }else if (students[student].progreso.porcentajeCompletado>=90) {
          advanceStudents++;
        }
        const progresses = laboratoria[key].generacion[generation].estudiantes[student].progreso;
        for (progres in progresses){
          const items = laboratoria[key].generacion[generation].estudiantes[student].progreso[progres];
          //console.log(items);
          for (item in items){
            const subs =Object.values(items);
          }
        }
      }
    }average = average / numStudents;
     timeAverage = timeAverage / numStudents;
     readingAverage = readingAverage / numStudents;
     quizAverage = quizAverage / numStudents;
     timeAverage = (timeAverage*average)/100;
     myobj.average = average;
     myobj.activeStudents = numStudents;
     myobj.advanceStudents = advanceStudents;
     myobj.inLowStudents = inLowStudents;
     myobj.timeAverage = timeAverage;
     myobj.readingAverage = readingAverage;
     myobj.quizAverage = quizAverage;
     venuesArray.push(myobj);
  }
    //venuesArray.push(objVenues);
    console.log(venuesArray);
    return (venuesArray);
};
  window.computeStudentsStats = (laboratoria) =>{
    let studentArray =[];
    let objStud ={
      campus :'', generation :'', stats : [], average :0,
      totalTime : 0, timeProm :0,
    };
    let averageS = 0;
    let generationS = '';
    let venuesS = [];
    let statsS =[];
    let totalTimeS = 0;
    let timeProm =0;
    let alerta ='';
    let nameS = '';
    let i =-1;
    for (key in laboratoria){
      let venuesL = Object.getOwnPropertyNames(laboratoria);
      let generations = laboratoria[key].generacion;
      i++;
      for (generation in generations){
        //let myStudent = new Object();
        generationS = generation;
        venuesS = venuesL[i];
        //averageS =0; totalTimeS =0; timeProm =0; alerta ='';
        const students= laboratoria[key].generacion[generation].estudiantes;
        for (student in students){
          let myStudent = new Object();
          nameS = students[student].nombre;
          averageS =0; totalTimeS =0; timeProm =0; alerta ='';
          averageS = students[student].progreso.porcentajeCompletado;
          if (students[student].progreso.porcentajeCompletado<=60){
              alerta = 'Bajo avance';
              }else if (students[student].progreso.porcentajeCompletado>=90) {
                alerta = 'Alto avance';
              }
              else{ alerta = 'Medio avance';}
          totalTimeS = students[student].progreso.duracionPrograma;
        myStudent.campus = venuesS.toUpperCase();
        myStudent.generation = generationS.toUpperCase();
        myStudent.name = nameS;
        myStudent.average = averageS;
        myStudent.advertisment = alerta;
        myStudent.totalTime = totalTimeS;
        myStudent.timeProm = (totalTimeS*averageS)/100;
        studentArray.push(myStudent);
        }
      }
    }
    console.log(studentArray);
    return (studentArray);
  };
  window.computeGenerationsStats = (laboratoria) =>{
    let generationsArray =[];
    let objGen = {
      venue: '',
      generation: '',
      count : 0,
      advanceStudents : 0,
      inLowStudents : 0,
      average : 0,
      readingAverage: 0,
      quizAverage: 0,
      timeAverage : 0,
    };
    let averageO = 0;
    let advanceStudentsO = 0;
    let inLowStudentsO =0;
    let countsO =0;
    let readingAverageO = 0;
    let quizAverageO =0;
    let timeAverageO =0;
    let venuesO ='';
    let generationsO ='';
    let i =-1;
    for (key in laboratoria){
      let generations = laboratoria[key].generacion;
      let venuesValue = Object.getOwnPropertyNames(laboratoria);
      i++;
      for (generation in generations){
        let myObj = new Object();
        countsO =0; averageO = 0; advanceStudentsO = 0; inLowStudentsO =0; timeAverageO =0;
        generationsO = generation;
        venuesO = venuesValue[i];
        const students = laboratoria[key].generacion[generation].estudiantes;
        countsO += students.length;
        for (student in students){
          averageO += students[student].progreso.porcentajeCompletado;
          timeAverageO += students[student].progreso.duracionPrograma;
            if (students[student].progreso.porcentajeCompletado<=60){
              inLowStudentsO++;
              }else if (students[student].progreso.porcentajeCompletado>=90) {
          advanceStudentsO++;
          }
        }
        myObj.generation = generationsO;
        myObj.venue = venuesO;
        myObj.count =countsO;
        myObj.average = Math.round(averageO / countsO);
        myObj.timeAverage = Math.round(((timeAverageO / countsO) * (averageO / countsO))/100);
        myObj.inLowStudents = inLowStudentsO;
        myObj.advanceStudents = advanceStudentsO;
        generationsArray.push(myObj);
      }
    }
    console.log(generationsArray);
    return (generationsArray);
  };
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
      if (currentS.name == search){
        filtered.push(currentS);
      }
    }
    console.log(filtered);
    return (filtered);
  };

  window.deepStudentsStats = (laboratoria) =>{
    let studentArray =[];
    let objStud ={
      campus :'', generation :'', stats : [], average :0,
      totalTime : 0, timeProm :0,
    };
    let averageS = 0;
    let generationS = '';
    let venuesS = [];
    let statsS =[];
    let totalTimeS = 0;
    let timeProm =0;
    let alerta ='';
    let nameS = '';
    let emailS ='';
    let i =-1;
    for (key in laboratoria){
      let venuesL = Object.getOwnPropertyNames(laboratoria);
      let generations = laboratoria[key].generacion;
      i++;
      for (generation in generations){
        //let myStudent = new Object();
        generationS = generation;
        venuesS = venuesL[i];
        //averageS =0; totalTimeS =0; timeProm =0; alerta ='';
        const students= laboratoria[key].generacion[generation].estudiantes;
        for (student in students){
          let myStudent = new Object();
          nameS = students[student].nombre;
          emailS = students[student].correo;
          averageS =0; totalTimeS =0; timeProm =0; alerta ='';
          averageS = students[student].progreso.porcentajeCompletado;
          if (students[student].progreso.porcentajeCompletado<=60){
              alerta = 'Bajo avance';
              }else if (students[student].progreso.porcentajeCompletado>=90) {
                alerta = 'Alto avance';
              }
              else{ alerta = 'Medio avance';}
          totalTimeS = students[student].progreso.duracionPrograma;
          const stats= laboratoria[key].generacion[generation].estudiantes[student].progreso;
          console.log(stats);
          for (stat in stats){
            let myStat = new Object();
          }
        myStudent.generation = generationS;
        myStudent.campus = venuesS;
        myStudent.average = averageS;
        myStudent.advertisment = alerta;
        myStudent.totalTime = totalTimeS;
        myStudent.timeProm = (totalTimeS*averageS)/100;
        myStudent.name = nameS;
        myStudent.email = emailS;
        studentArray.push(myStudent);
        }
      }
    }
    console.log(studentArray);
    return (studentArray);
  };
