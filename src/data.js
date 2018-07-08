window.computeVenuesStats = (laboratoria) => {
  let venuesArray = [];
  let average = 0;
  let advanceStudents = 0;
  let inLowStudents = 0;
  let numStudents = 0;
  let readingAverage = 0;
  let quizAverage = 0;
  let timeAverage = 0;
  for (let key in laboratoria) {
    let myobj = {};
    average = 0;
    advanceStudents = 0;
    inLowStudents = 0;
    numStudents = 0;
    readingAverage = 0;
    quizAverage = 0;
    timeAverage = 0;
    myobj.venue = key.toUpperCase();
    let generations = laboratoria[key].generacion;
    for (let generation in generations) {
      const students = laboratoria[key].generacion[generation].estudiantes;
      numStudents += students.length;
      for (let student in students) {
        average += students[student].progreso.porcentajeCompletado;
        timeAverage += students[student].progreso.duracionPrograma;
        if (students[student].progreso.porcentajeCompletado <= 60) {
          inLowStudents++;
        } else if (students[student].progreso.porcentajeCompletado >= 90) {
          advanceStudents++;
        }
        const progresses = laboratoria[key].generacion[generation].estudiantes[student].progreso;
        for (let progres in progresses) {
          const items = laboratoria[key].generacion[generation].estudiantes[student].progreso[progres];
          //console.log(items);
          for (let item in items) {
            const subs = Object.values(items);
          }
        }
      }
    } average = average / numStudents;
    timeAverage = timeAverage / numStudents;
    readingAverage = readingAverage / numStudents;
    quizAverage = quizAverage / numStudents;
    timeAverage = (timeAverage * average) / 100;
    myobj.average = Math.round(average);
    myobj.activeStudents = numStudents;
    myobj.advanceStudents = advanceStudents;
    myobj.inLowStudents = inLowStudents;
    myobj.timeAverage = Math.round(timeAverage);
    myobj.readingAverage = readingAverage;
    myobj.quizAverage = quizAverage;
    venuesArray.push(myobj);
  }
  console.log(venuesArray);
  return (venuesArray);
};
window.computeStudentsStats = (laboratoria) => {
  let studentArray = [];
  let averageS = 0;
  let generationS = '';
  let venuesS = [];
  let totalTimeS = 0;
  let timeProm = 0;
  let alerta = '';
  let nameS = '';
  let i = -1;
  for (let key in laboratoria) {
    let venuesL = Object.getOwnPropertyNames(laboratoria);
    let generations = laboratoria[key].generacion;
    i++;
    for (let generation in generations) {
      generationS = generation;
      venuesS = venuesL[i];
      const students = laboratoria[key].generacion[generation].estudiantes;
      for (let student in students) {
        let myStudent = {};
        nameS = students[student].nombre;
        averageS = 0; totalTimeS = 0; timeProm = 0; alerta = '';
        averageS = students[student].progreso.porcentajeCompletado;
        if (students[student].progreso.porcentajeCompletado <= 60) {
          alerta = 'Bajo avance';
        } else if (students[student].progreso.porcentajeCompletado >= 90) {
          alerta = 'Alto avance';
        }
        else { alerta = 'Medio avance'; }
        totalTimeS = students[student].progreso.duracionPrograma;
        myStudent.campus = venuesS.toUpperCase();
        myStudent.generation = generationS.toUpperCase();
        myStudent.name = nameS;
        myStudent.average = averageS;
        myStudent.advertisment = alerta;
        myStudent.totalTime = totalTimeS;
        myStudent.timeProm = (totalTimeS * averageS) / 100;
        studentArray.push(myStudent);
      }
    }
  }
  console.log(studentArray);
  return (studentArray);
};
window.computeGenerationsStats = (laboratoria) => {
  let generationsArray = [];
  let averageO = 0;
  let advanceStudentsO = 0;
  let inLowStudentsO = 0;
  let countsO = 0;
  let readingAverageO = 0;
  let quizAverageO = 0;
  let timeAverageO = 0;
  let venuesO = '';
  let generationsO = '';
  let i = -1;
  for (key in laboratoria) {
    let generations = laboratoria[key].generacion;
    let venuesValue = Object.getOwnPropertyNames(laboratoria);
    i++;
    for (generation in generations) {
      let myObj = {};
      countsO = 0; averageO = 0; advanceStudentsO = 0; inLowStudentsO = 0; timeAverageO = 0;
      generationsO = generation;
      venuesO = venuesValue[i];
      const students = laboratoria[key].generacion[generation].estudiantes;
      countsO += students.length;
      for (student in students) {
        averageO += students[student].progreso.porcentajeCompletado;
        timeAverageO += students[student].progreso.duracionPrograma;
        if (students[student].progreso.porcentajeCompletado <= 60) {
          inLowStudentsO++;
        } else if (students[student].progreso.porcentajeCompletado >= 90) {
          advanceStudentsO++;
        }
      }
      myObj.generation = generationsO.toUpperCase();
      myObj.venue = venuesO.toUpperCase();
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
window.sortStudents = (students, orderBy, orderDirection) => {
  let ordered;
  if (orderBy == 'name') {
    if (orderDirection == 'ASC') {
      ordered = students.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      })
      console.log(ordered);
    } else {
      ordered = students.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
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
    if (currentS.name == search) { filtered.push(currentS); }
  }
  console.log(filtered);
  return (filtered);
};
window.deepStudentsStats = (laboratoria) => {
  let studentArray = [];
  let averageS = 0;
  let generationS = '';
  let venuesS = [];
  let statsS = [];
  let totalTimeS = 0;
  let timeProm = 0;
  let statusS = '';
  let nameS = '';
  let emailS = '';
  let i = -1;
  let completedPercentageS = [];
  let percentageDurationS = [];
  let itemS = '';
  let j = 0, k = 0;
  for (key in laboratoria) {
    let venuesL = Object.getOwnPropertyNames(laboratoria);
    //console.log(laboratoria);
    let generations = laboratoria[key].generacion;
    i++;
    for (generation in generations) {
      generationS = generation;
      venuesS = venuesL[i];
      const students = laboratoria[key].generacion[generation].estudiantes;
      for (student in students) {
        let myStudent = {};
        nameS = students[student].nombre;
        emailS = students[student].correo;
        turnoS = students[student].turno;
        const Stats = laboratoria[key].generacion[generation].estudiantes[student].progreso;
        const arrayStats = Array.from(Object.values(Stats));
        averageS = 0; totalTimeS = 0; timeProm = 0; statusS = ''; j = 0;
        let sts = {};
        totalTimeS = arrayStats[j];
        j++;
        averageS = arrayStats[j];
        if (averageS <= 60) {
          statusS = 'Bajo avance';
        } else if (averageS >= 90) {
          statusS = 'Alto avance';
        } else { statusS = 'Medio avance'; }
        sts.completedPercentage = averageS;
        sts.status = statusS;
        j++;
        const arrayTopic = Array.from(Object.values(arrayStats[j]));
        const arrayUnitsNames = Array.from(Object.getOwnPropertyNames(arrayStats[j]));
        for (let k=0; k<1;k++){
            itemS=arrayUnitsNames[k];
                let tps={};
                completedPercentageS = arrayTopic[k].porcentajeCompletado;
                percentageDurationS = arrayTopic[k].duracionTemaCompletado;
                tps.unit = itemS;
                tps.completedPercentage = completedPercentageS;
                tps.percentageDuration = percentageDurationS;
                sts.topics1=tps;
          }
          for (let k=1; k<2;k++){
            itemS=arrayUnitsNames[k];
                let tps={};
                completedPercentageS = arrayTopic[k].porcentajeCompletado;
                percentageDurationS = arrayTopic[k].duracionTemaCompletado;
                tps.unit = itemS;
                tps.completedPercentage = completedPercentageS;
                tps.percentageDuration = percentageDurationS;
                sts.topics2=tps;
          }
          for (let k=2; k<3;k++){
            itemS=arrayUnitsNames[k];
                let tps={};
                completedPercentageS = arrayTopic[k].porcentajeCompletado;
                percentageDurationS = arrayTopic[k].duracionTemaCompletado;
                tps.unit = itemS;
                tps.completedPercentage = completedPercentageS;
                tps.percentageDuration = percentageDurationS;
                sts.topics3=tps;
          }
          myStudent.name = nameS;
          myStudent.email = emailS;
          myStudent.turno = turnoS;
          myStudent.campus = venuesS.toUpperCase();
          myStudent.generation = generationS.toUpperCase();
          myStudent.timeProm = Math.round((totalTimeS*averageS)/100);
          myStudent.totalTime = totalTimeS;
          myStudent.stats = sts;
          //myStudent.stats.completedPercentage = averageS;
          //myStudent.stats.status = alerta;
          studentArray.push(myStudent);
        }
      }
    }
  console.log(studentArray);
  return (studentArray);
};
window.generationsLima = (laboratoria) => {
  const generation = computeGenerationsStats(laboratoria);
  const generationLim = [];
  for (let i = 0; i < 3; i++) {
    generationLim[i] = generation[i];
  }
  //-----
  const resultGenLim = document.getElementById('print-generation');
  let genLim ='';
  for(let i=0; i<generationLim.length; i++){
    genLim += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <h2 class="card-title" id="cards">${generationLim[i].venue}</h2>
                  <h5>Alumnas activas: ${generationLim[i].count}</h5>
                  <span>Promedio: ${generationLim[i].average}${'%'} </span>
                  <div class="progress">
                  <div class="determinate" style="width: ${generationLim[i].average}%"></div>
                  </div>
                  <p><i class="material-icons">star</i> <span>Estudiantes: ${generationLim[i].advanceStudents} ✔</span></p>
                  <p><i class="material-icons">star_half</i> <span>Estudiantes: ${generationLim[i].inLowStudents} ✘</span></p>
                  <p><i class="material-icons">schedule</i> <span>Tiempo: ${generationLim[i].timeAverage}${'hrs'}</span></p>

         </div>
         </div>
       </div>`
}
  resultGenLim.innerHTML= genLim;
  //---
  return generationLim;
}
window.generationsMexico = (laboratoria) => {
  const generation = computeGenerationsStats(laboratoria);
  const generationMex = [];
  for (let i = 3; i <= 5; i++) {
    generationMex[i - 3] = generation[i];
  }
  //-----
  const resultGenMex = document.getElementById('print-generation');
  let genMex ='';
  for(let i=0; i<generationMex.length; i++){
    genMex += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <h2 class="card-title" id="cards">${generationMex[i].venue}</h2>
                  <h5>Alumnas activas: ${generationMex[i].count}</h5>
                  <span>Promedio: ${generationMex[i].average}${'%'} </span>
                  <div class="progress">
                  <div class="determinate" style="width: ${generationMex[i].average}%"></div>
                  </div>
                  <p><i class="material-icons">star</i> <span>Estudiantes: ${generationMex[i].advanceStudents} ✔</span></p>
                  <p><i class="material-icons">star_half</i> <span>Estudiantes: ${generationMex[i].inLowStudents} ✘</span></p>
                  <p><i class="material-icons">schedule</i> <span>Tiempo: ${generationMex[i].timeAverage}${'hrs'}</span></p>

         </div>
         </div>
       </div>`
}
  resultGenMex.innerHTML= genMex;
  //---
  return generationMex;
}
window.generationsSantiago = (laboratoria) => {
  const generation = computeGenerationsStats(laboratoria);
  const generationStg = [];
  for (let i = 3; i <= 5; i++) {
    generationStg[i - 3] = generation[i];
  }
  //-----
  const resultGenStg = document.getElementById('print-generation');
  let genStg ='';
  for(let i=0; i<generationStg.length; i++){
    genStg += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <h2 class="card-title" id="cards">${generationStg[i].venue}</h2>
                  <h5>Alumnas activas: ${generationStg[i].count}</h5>
                  <span>Promedio: ${generationStg[i].average}${'%'} </span>
                  <div class="progress">
                  <div class="determinate" style="width: ${generationStg[i].average}%"></div>
                  </div>
                  <p><i class="material-icons">star</i> <span>Estudiantes: ${generationStg[i].advanceStudents} ✔</span></p>
                  <p><i class="material-icons">star_half</i> <span>Estudiantes: ${generationStg[i].inLowStudents} ✘</span></p>
                  <p><i class="material-icons">schedule</i> <span>Tiempo: ${generationStg[i].timeAverage}${'hrs'}</span></p>

         </div>
         </div>
       </div>`
}
  resultGenStg.innerHTML= genStg;
  //---
  return generationStg;
}
window.studentsList = (laboratoria) => {
  const students = deepStudentsStats(laboratoria);
  const list =[];
  let nameO='', averageO=0, timeAverageO=0;
  for (let i=0; i<students.length; i++){
    let objStudent ={};
    nameO = students[i].name;
    averageO = students[i].stats.completedPercentage;
    timeAverageO = students[i].timeProm;
    objStudent.name = nameO;
    objStudent.average = averageO;
    objStudent.timeAverage = timeAverageO;
    list.push(objStudent);
  }
console.log(list);
return list;
}
window.studentsModal =(laboratoria)=>{
  const students = deepStudentsStats(laboratoria);
  const list =[];
  let nameO='', emailO='', turnoO= '', averageO=0, timeAverageO=0;
  let u1O='', u2O='', u3O='', p1O=0, p2O=0, p3O=0;
  for (let i=0; i<students.length; i++){
    let objStudent ={};
    nameO = students[i].name;
    emailO = students[i].email;
    turnoO = students[i].turno;
    timeAverageO = students[i].timeProm;
    averageO = students[i].stats.completedPercentage;
    u1O = students[i].stats.topics1.unit;
    u2O = students[i].stats.topics2.unit;
    u3O = students[i].stats.topics3.unit;
    p1O= students[i].stats.topics1.completedPercentage;
    p2O= students[i].stats.topics2.completedPercentage;
    p3O= students[i].stats.topics3.completedPercentage;
    objStudent.name = nameO;
    objStudent.email = emailO;
    objStudent.turno = turnoO;
    objStudent.average = averageO;
    objStudent.timeAverage = timeAverageO;
    objStudent.average = averageO;
    objStudent.u1 = u1O;
    objStudent.u2 = u2O;
    objStudent.u3 = u3O;
    objStudent.p1 = p1O;
    objStudent.p2 = p2O;
    objStudent.p3 = p3O;
    list.push(objStudent);
  }
console.log(list);
return list;
}
window.printSedesAll = (laboratoria) => {
  const sedeM = computeVenuesStats(laboratoria);
  console.log(sedeM);
  const resultFilter = document.getElementById('print-venues');
  let sedeMex = '';
  for (let i = 0; i < sedeM.length; i++) {
   /* sedeMex += `<div class="col s3 m3">
            <div class="card white darken-1">
            <div class="card-content card-data black-text">
             <h2 class="card-title" id="cards">${sedeM[i].venue}</h2>
             <h5>Alumnas activas: ${sedeM[i].activeStudents}</h5>
             <span>Promedio: ${sedeM[i].average}${'%'} </span>
             <div class="progress">
             <div class="determinate" style="width: ${sedeM[i].average}%"></div>
             </div>
             <p><i class="material-icons">star</i> <span>Estudiantes: ${sedeM[i].advanceStudents} ✔</span></p>
             <p><i class="material-icons">star_half</i> <span>Estudiantes: ${sedeM[i].inLowStudents} ✘</span></p>
             <p><i class="material-icons">schedule</i> <span>Tiempo: ${sedeM[i].timeAverage}${'hrs'}</span></p>

           </div>
           </div>
         </div>` */
  }
  resultFilter.innerHTML = sedeMex;
}

$(document).ready(function(){
  $('.tooltipped').tooltip();
});
