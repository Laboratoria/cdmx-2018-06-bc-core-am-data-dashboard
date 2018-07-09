/* data.js es el archivos JS en el cual se declaran las funciones globales y locales para la extracción y procesamiento de la data del
proyecto. En algunas funciones se hace uso de Templete String para la creacion de card dinámicas para presentar información en el DOM*/
window.computeVenuesStats = (laboratoria) => {
// Función que extrae infomación sobre cada una de las sedes, genera un arreglo como: [{},{},{}]
  let venuesArray = [];//Variables locales
  let average = 0;
  let advanceStudents = 0;
  let inLowStudents = 0;
  let mediumStudents = 0;
  let numStudents = 0;
  let quizAverage = 0;
  let timeAverage = 0;
  let timeU1 =0, timeU2=0, timeU3=0;
  let advanceU1 =0, advanceU2=0, advanceU3=0;
  let quizU1=0, quizU2=0, quizU3=0;
  for (let key in laboratoria) {// Ciclo de evaluacion general
    let myobj = {};
    average = 0;// Reinicio de variables
    advanceStudents = 0;
    inLowStudents = 0;
    mediumStudents = 0;
    numStudents = 0;
    quizAverage = 0;
    timeAverage = 0;
    advanceU1 =0; advanceU2=0; advanceU3=0;
    quizU1 =0; quizU2=0; quizU3=0;
    myobj.venue = key.toUpperCase();// Extraccion y procesamiento de data
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
        }else{
          mediumStudents++;
        }
        advanceU1 += students[student].progreso.temas["01-Introduccion-a-programacion"].porcentajeCompletado;
        advanceU2 += students[student].progreso.temas["02-Variables-y-tipo-de-datos"].porcentajeCompletado;
        advanceU3 += students[student].progreso.temas["03-UX"].porcentajeCompletado;
        quizU1 += students[student].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"].puntuacion;
        quizU2 += students[student].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"].puntuacion;
        quizU3 += students[student].progreso.temas["03-UX"].subtemas["03-quiz"].puntuacion;
      }
    } average = average / numStudents;// Calculo de promedios
    timeAverage = timeAverage / numStudents;
    quizAverage = quizAverage / numStudents;
    timeAverage = (timeAverage * average) / 100;
    advanceU1 = advanceU1 / numStudents;
    advanceU2 = advanceU2 / numStudents;
    advanceU3 = advanceU3 / numStudents;
    quizU1 = quizU1 / numStudents;
    quizU2 = quizU2 / numStudents;
    quizU3 = quizU3 / numStudents;
    quizAverage = (quizU1 + quizU2 + quizU3)/3;
    myobj.average = Math.round(average);// Generación de propiedades del objeto Sede
    myobj.activeStudents = numStudents;
    myobj.advanceStudents = advanceStudents;
    myobj.inLowStudents = inLowStudents;
    myobj.mediumStudents = mediumStudents;
    myobj.timeAverage = Math.round(timeAverage);
    myobj.advanceU1 = Math.round(advanceU1);
    myobj.advanceU2 = Math.round(advanceU2);
    myobj.advanceU3 = Math.round(advanceU3);
    myobj.quizAverage = Math.round(quizAverage);
    venuesArray.push(myobj);
  }
  console.log(venuesArray);
  return (venuesArray);// Retorna un objeto sede que se almacena en una localidad del array
};
window.computeGenerationsStats = (laboratoria) => {// Extrae información sobre las generaciones, da un array: [{},{},{},{},{},{},{},{},{}]
  let generationsArray = [];
  let averageO = 0;
  let advanceStudentsO = 0;
  let inLowStudentsO = 0;
  let countsO = 0;
  let quizAverageO = 0;
  let timeAverageO = 0;
  let venuesO = '';
  let generationsO = '';
  let mediumStudents = 0;
  let advanceU1 =0, advanceU2 =0, advanceU3=0;
  let quizU1 =0, quizU2 =0, quizU3 =0;
  let i = -1;
  for (key in laboratoria) {
    let generations = laboratoria[key].generacion;
    let venuesValue = Object.getOwnPropertyNames(laboratoria);
    i++;
    for (generation in generations) {
      let myObj = {};
      countsO = 0; averageO = 0; advanceStudentsO = 0; inLowStudentsO = 0; timeAverageO = 0;
      advanceU1 =0; advanceU2 =0; advanceU3=0; quizU1=0; quizU2=0; quizU3=0;
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
        }else{
          mediumStudents++;
        }
        advanceU1 += students[student].progreso.temas["01-Introduccion-a-programacion"].porcentajeCompletado;
        advanceU2 += students[student].progreso.temas["02-Variables-y-tipo-de-datos"].porcentajeCompletado;
        advanceU3 += students[student].progreso.temas["03-UX"].porcentajeCompletado;
        quizU1 += students[student].progreso.temas["01-Introduccion-a-programacion"].subtemas["04-quiz"].puntuacion;
        quizU2 += students[student].progreso.temas["02-Variables-y-tipo-de-datos"].subtemas["05-quiz"].puntuacion;
        quizU3 += students[student].progreso.temas["03-UX"].subtemas["03-quiz"].puntuacion;
      }quizAverageO = (quizU1+quizU2+quizU3)/(countsO*3);
      myObj.generation = generationsO.toUpperCase();
      myObj.venue = venuesO.toUpperCase();
      myObj.count =countsO;
      myObj.average = Math.round(averageO / countsO);
      myObj.timeAverage = Math.round(((timeAverageO / countsO) * (averageO / countsO))/100);
      myObj.inLowStudents = inLowStudentsO;
      myObj.advanceStudents = advanceStudentsO;
      myObj.mediumStudents = mediumStudents;
      myObj.advanceU1 = Math.round(advanceU1/countsO);
      myObj.advanceU2 = Math.round(advanceU2/countsO);
      myObj.advanceU3 = Math.round(advanceU3/countsO);
      myObj.quizAverage = Math.round(quizAverageO);
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
        return (a.stats.completedPercentage - b.stats.completedPercentage);
      });
      console.log(ordered);
    } else {
      ordered = students.sort(function (a, b) {
        return (b.stats.completedPercentage - a.stats.completedPercentage);
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
window.computeStudentsStats = (laboratoria) => {
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
  let scorePercentage =0;
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
        averageS = 0; totalTimeS = 0; timeProm = 0; statusS = ''; j = 0; scorePercentage=0;
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
        let unitiesContent = arrayStats[j];
          let tps ={};
          let completedPercentageT =0, percentageDurationT=0;
        for (let unit in unitiesContent){
          //console.log((Object.values(unitiesContent))[0].subtemas);
          if (unit=="01-Introduccion-a-programacion"){
             completedPercentageT = (Object.values(unitiesContent))[0].porcentajeCompletado;
             percentageDurationT = (Object.values(unitiesContent))[0].duracionTemaCompletado;
             let deepCont ={};
             deepCont.completedPercentage = completedPercentageT;
             deepCont.percentageDuration = percentageDurationT;
             let subtopicsUnits = (Object.values(unitiesContent))[0].subtemas;
             //let subTopics ={};
             for (let subtop in subtopicsUnits){
               //console.log(Object.values(subtopicsUnits));
               if (subtop == "00-bienvenida-orientacion"){
                 let completedSub = (Object.values(subtopicsUnits))[0].completado;
                 let timeSub = (Object.values(subtopicsUnits))[0].duracionSubtema;
                 let typeSub = (Object.values(subtopicsUnits))[0].tipo;
                 let deepSubCont ={};
                 deepSubCont.completedPercentage = completedSub;
                 deepSubCont.duration = timeSub;
                 deepSubCont.type = typeSub;
                 deepCont["00-bienvenida-orientacion"]= deepSubCont;
               }else if (subtop == "01-desarrollo-profesional") {
                 let completedSub = (Object.values(subtopicsUnits))[1].completado;
                 let timeSub = (Object.values(subtopicsUnits))[1].duracionSubtema;
                 let typeSub = (Object.values(subtopicsUnits))[1].tipo;
                 let deepSubCont ={};
                 deepSubCont.completedPercentage = completedSub;
                 deepSubCont.duration = timeSub;
                 deepSubCont.type = typeSub;
                 deepCont["01-desarrollo-profesional"]= deepSubCont;
               }else if (subtop == "02-por-que-aprender-a-programar") {
                 let completedSub = (Object.values(subtopicsUnits))[2].completado;
                 let timeSub = (Object.values(subtopicsUnits))[2].duracionSubtema;
                 let typeSub = (Object.values(subtopicsUnits))[2].tipo;
                 let deepSubCont ={};
                 deepSubCont.completedPercentage = completedSub;
                 deepSubCont.duration = timeSub;
                 deepSubCont.type = typeSub;
                 deepCont["02-por-que-aprender-a-programar"]= deepSubCont;
               }else if (subtop == "03-tu-primer-sitio") {
                 let completedSub = (Object.values(subtopicsUnits))[3].completado;
                 let timeSub = (Object.values(subtopicsUnits))[3].duracionSubtema;
                 let typeSub = (Object.values(subtopicsUnits))[3].tipo;
                 let deepSubCont ={};
                 deepSubCont.completedPercentage = completedSub;
                 deepSubCont.duration = timeSub;
                 deepSubCont.type = typeSub;
                 deepCont["03-tu-primer-sitio"]= deepSubCont;
               }else if (subtop =="04-quiz") {
                 let completedSub = (Object.values(subtopicsUnits))[4].completado;
                 let timeSub = (Object.values(subtopicsUnits))[4].duracionSubtema;
                 let typeSub = (Object.values(subtopicsUnits))[4].tipo;
                 let scoreSub = (Object.values(subtopicsUnits))[4].puntuacion;
                 scorePercentage += scoreSub;
                 let deepSubCont ={};
                 deepSubCont.completedPercentage = completedSub;
                 deepSubCont.duration = timeSub;
                 deepSubCont.type = typeSub;
                 deepSubCont.score = scoreSub;
                 deepCont["04-quiz"]= deepSubCont;
               }
             }
             tps["01-Introduccion-a-programacion"] = deepCont;
          }else if (unit=="02-Variables-y-tipo-de-datos") {
            completedPercentageT = (Object.values(unitiesContent))[1].porcentajeCompletado;
            percentageDurationT = (Object.values(unitiesContent))[1].duracionTemaCompletado;
            let deepCont ={};
            deepCont.completedPercentage = completedPercentageT;
            deepCont.percentageDuration = percentageDurationT;
            let subtopicsUnits = (Object.values(unitiesContent))[1].subtemas;
            //let subTopics ={};
            for (let subtop in subtopicsUnits){
              //console.log(Object.values(subtopicsUnits));
              if (subtop == "00-Tipos-de-datos-y-operadores"){
                let completedSub = (Object.values(subtopicsUnits))[0].completado;
                let timeSub = (Object.values(subtopicsUnits))[0].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[0].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["00-Tipos-de-datos-y-operadores"]= deepSubCont;
              }else if (subtop == "01-variables") {
                let completedSub = (Object.values(subtopicsUnits))[1].completado;
                let timeSub = (Object.values(subtopicsUnits))[1].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[1].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["01-variables"]= deepSubCont;
              }else if (subtop == "02-por-que-aprender-a-programar02-auto-aprendizaje-MDN") {
                let completedSub = (Object.values(subtopicsUnits))[2].completado;
                let timeSub = (Object.values(subtopicsUnits))[2].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[2].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["02-auto-aprendizaje-MDN"]= deepSubCont;
              }else if (subtop == "03-comments") {
                let completedSub = (Object.values(subtopicsUnits))[3].completado;
                let timeSub = (Object.values(subtopicsUnits))[3].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[3].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["03-comments"]= deepSubCont;
              }else if (subtop =="04-ejercicios-guiados") {
                let completedSub = (Object.values(subtopicsUnits))[4].completado;
                let timeSub = (Object.values(subtopicsUnits))[4].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[4].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["04-ejercicios-guiados"]= deepSubCont;
              }else if (subtop =="05-quiz") {
                let completedSub = (Object.values(subtopicsUnits))[5].completado;
                let timeSub = (Object.values(subtopicsUnits))[5].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[5].tipo;
                let scoreSub = (Object.values(subtopicsUnits))[5].puntuacion;
                scorePercentage += scoreSub;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepSubCont.score = scoreSub;
                deepCont["05-quiz"]= deepSubCont;
              }else if (subtop =="06-ejercicios") {
                let completedSub = (Object.values(subtopicsUnits))[6].completado;
                let timeSub = (Object.values(subtopicsUnits))[6].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[6].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["06-ejercicios"]= deepSubCont;
              }
            }
            tps["02-Variables-y-tipo-de-datos"] = deepCont;
          }else if (unit=="03-UX") {
            completedPercentageT = (Object.values(unitiesContent))[2].porcentajeCompletado;
            percentageDurationT = (Object.values(unitiesContent))[2].duracionTemaCompletado;
            let deepCont ={};
            deepCont.completedPercentage = completedPercentageT;
            deepCont.percentageDuration = percentageDurationT;
            let subtopicsUnits = (Object.values(unitiesContent))[2].subtemas;
            //let subTopics ={};
            for (let subtop in subtopicsUnits){
              //console.log(Object.values(subtopicsUnits));
              if (subtop == "00-equipos-de-desarrollo"){
                let completedSub = (Object.values(subtopicsUnits))[0].completado;
                let timeSub = (Object.values(subtopicsUnits))[0].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[0].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["00-equipos-de-desarrollo"]= deepSubCont;
              }else if (subtop == "01-ux-diseno") {
                let completedSub = (Object.values(subtopicsUnits))[1].completado;
                let timeSub = (Object.values(subtopicsUnits))[1].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[1].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["01-ux-diseno"]= deepSubCont;
              }else if (subtop == "02-ux-vs-ui") {
                let completedSub = (Object.values(subtopicsUnits))[2].completado;
                let timeSub = (Object.values(subtopicsUnits))[2].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[2].tipo;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepCont["02-ux-vs-ui"]= deepSubCont;
              }else if (subtop =="03-quiz") {
                let completedSub = (Object.values(subtopicsUnits))[3].completado;
                let timeSub = (Object.values(subtopicsUnits))[3].duracionSubtema;
                let typeSub = (Object.values(subtopicsUnits))[3].tipo;
                let scoreSub = (Object.values(subtopicsUnits))[3].puntuacion;
                scorePercentage += scoreSub;
                let deepSubCont ={};
                deepSubCont.completedPercentage = completedSub;
                deepSubCont.duration = timeSub;
                deepSubCont.type = typeSub;
                deepSubCont.score = scoreSub;
                deepCont["03-quiz"]= deepSubCont;
              }
            }
            tps["03-UX"] = deepCont;
          }
          sts.topics=tps;
        } scorePercentage=scorePercentage/3;
          myStudent.name = nameS;
          myStudent.email = emailS;
          myStudent.turno = turnoS;
          myStudent.campus = venuesS.toUpperCase();
          myStudent.generation = generationS.toUpperCase();
          myStudent.timeProm = Math.round((totalTimeS*averageS)/100);
          myStudent.totalTime = totalTimeS;
          myStudent.stats = sts;
          myStudent.scorePercentage = Math.round(scorePercentage);
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
  const resultGenLim = document.getElementById('cardsSpace');
  let genLim ='';
  for(let i=0; i<generationLim.length; i++){
    genLim += `<div class="row"  id="cardsSpace">
                   <div class="col s12 m12 l12">
                       <div class="card whithe col s12 m12 l12">
                           <div class="card-content black-text col s12 m12 l12">
                               <div class="col s6 m5 l5">
                                   <!--generaciones1-->
                                   <span class="card-title cards">LIMA</span>
                                   <span class="card-title cards">${generationLim[i].generation} Generación</span>
                                   <div id="color-activas">
                                       <span id="numero">${generationLim[i].count}</span>
                                       <span> Alumnas</span>
                                   </div>
                                   <!--Barra de avance dos colores-->
                                   <div class="elemento-card">
                                       <span class="letra-progreso izquierda">
                                           <i class="material-icons">mood</i>+80%</span>
                                       <span class="letra-progreso derecha">
                                           -60%
                                           <i class="material-icons">mood_bad</i>
                                       </span>
                                       <div class="progress tamaño-barra color-progreso2">
                                           <div class="determinate color-progreso1" class="color-fondo" style="width: ${generationLim[i].advanceStudents}"></div>
                                       </div>
                                   </div>

<!--Tiempo promedio-->
                                   <p>
                                       <i class="material-icons">schedule</i>
                                       <span>Tiempo promedio invertido: ${generationLim[i].timeAverage}${'hrs'}</span>
                                   </p>
                               </div>
                               <div class="col s5 m7 l7">
                                   <!--generaciones2-->
                                   <!--Promedios generales inicio-->
                                   <div class="elemento-card">
                                       <span>Promedio general </span>
                                       <div class="progress tamaño-barra">
                                           <div class="determinate blue" class="color-fondo" style="width:${generationLim[i].average}${'%'}"></div>
                                           <span class="derecha letra-barra">${generationLim[i].average}${'%'}</span>
                                       </div>
                                   </div>

                                   <p>Intoducción a la programación</p>
                                   <div class="progress grey">
                                       <div class="determinate pink" class="color-fondo" style="width:${generationLim[i].advanceU1}${'%'} %">
                                       </div>
                                   </div>

                                   <p>Variables y tipos de datos</p>
                                   <div class="progress grey">
                                       <div class="determinate purple" class="color-fondo" style="width: ${generationLim[i].advanceU2}${'%'}"></div>
                                   </div>
                                   <p>UX</p>
                                   <div class="progress grey">
                                       <div class="determinate orange" class="color-fondo" style="width: ${generationLim[i].advanceU3}${'%'}"></div>
                                   </div>
                                   <!--Promedios generales fin-->
                               </div>

                           </div>
                       </div>
                   </div>
               </div>`
}
  resultGenLim.innerHTML= genLim;
  //coment dos
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
  const resultGenMex = document.getElementById('cardsSpace');
  let genMex ='';
  for(let i=0; i<generationMex.length; i++){
    genMex += `<div class="row"  id="cardsSpace">
                   <div class="col s12 m12 l12">
                       <div class="card whithe col s12 m12 l12">
                           <div class="card-content black-text col s12 m12 l12">
                               <div class="col s6 m5 l5">
                                   <!--generaciones1-->
                                   <span class="card-title cards">LIMA</span>
                                   <span class="card-title cards">${generationMex[i].generation} Generación</span>
                                   <div id="color-activas">
                                       <span id="numero">${generationMex[i].count}</span>
                                       <span> Alumnas</span>
                                   </div>
                                   <!--Barra de avance dos colores-->
                                   <div class="elemento-card">
                                       <span class="letra-progreso izquierda">
                                           <i class="material-icons">mood</i>+80%</span>
                                       <span class="letra-progreso derecha">
                                           -60%
                                           <i class="material-icons">mood_bad</i>
                                       </span>
                                       <div class="progress tamaño-barra color-progreso2">
                                           <div class="determinate color-progreso1" class="color-fondo" style="width: ${generationMex[i].advanceStudents}"></div>
                                       </div>
                                   </div>

<!--Tiempo promedio-->
                                   <p>
                                       <i class="material-icons">schedule</i>
                                       <span>Tiempo promedio invertido: ${generationMex[i].timeAverage}${'hrs'}</span>
                                   </p>
                               </div>
                               <div class="col s5 m7 l7">
                                   <!--generaciones2-->
                                   <!--Promedios generales inicio-->
                                   <div class="elemento-card">
                                       <span>Promedio general </span>
                                       <div class="progress tamaño-barra">
                                           <div class="determinate blue" class="color-fondo" style="width:${generationMex[i].average}${'%'}"></div>
                                           <span class="derecha letra-barra">${generationMex[i].average}${'%'}</span>
                                       </div>
                                   </div>

                                   <p>Intoducción a la programación</p>
                                   <div class="progress grey">
                                       <div class="determinate pink" class="color-fondo" style="width:/*codigo AVANCE PORCENTAJE*/ %">
                                       </div>
                                   </div>

                                   <p>Variables y tipos de datos</p>
                                   <div class="progress grey">
                                       <div class="determinate purple" class="color-fondo" style="width: /*codigo AVANCE PORCENTAJE*/%"></div>
                                   </div>
                                   <p>UX</p>
                                   <div class="progress grey">
                                       <div class="determinate orange" class="color-fondo" style="width: /*codigo AVANCE PORCENTAJE*/%"></div>
                                   </div>
                                   <!--Promedios generales fin-->
                               </div>

                           </div>
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
  for (let i = 5; i < 8; i++) {
    generationStg[i - 5] = generation[i];
  }
  //-----
  const resultGenStg = document.getElementById('cardsSpace');
  let genStg ='';
  for(let i=0; i<generationStg.length; i++){
    genStg += `<div class="row"  id="cardsSpace">
                   <div class="col s12 m12 l12">
                       <div class="card whithe col s12 m12 l12">
                           <div class="card-content black-text col s12 m12 l12">
                               <div class="col s6 m5 l5">
                                   <!--generaciones1-->
                                   <span class="card-title cards">LIMA</span>
                                   <span class="card-title cards">${generationStg[i].generation} Generación</span>
                                   <div id="color-activas">
                                       <span id="numero">${generationStg[i].count}</span>
                                       <span> Alumnas</span>
                                   </div>
                                   <!--Barra de avance dos colores-->
                                   <div class="elemento-card">
                                       <span class="letra-progreso izquierda">
                                           <i class="material-icons">mood</i>+80%</span>
                                       <span class="letra-progreso derecha">
                                           -60%
                                           <i class="material-icons">mood_bad</i>
                                       </span>
                                       <div class="progress tamaño-barra color-progreso2">
                                           <div class="determinate color-progreso1" class="color-fondo" style="width: ${generationStg[i].advanceStudents}"></div>
                                       </div>
                                   </div>

<!--Tiempo promedio-->
                                   <p>
                                       <i class="material-icons">schedule</i>
                                       <span>Tiempo promedio invertido: ${generationStg[i].timeAverage}${'hrs'}</span>
                                   </p>
                               </div>
                               <div class="col s5 m7 l7">
                                   <!--generaciones2-->
                                   <!--Promedios generales inicio-->
                                   <div class="elemento-card">
                                       <span>Promedio general </span>
                                       <div class="progress tamaño-barra">
                                           <div class="determinate blue" class="color-fondo" style="width:${generationStg[i].average}${'%'}"></div>
                                           <span class="derecha letra-barra">${generationStg[i].average}${'%'}</span>
                                       </div>
                                   </div>

                                   <p>Intoducción a la programación</p>
                                   <div class="progress grey">
                                       <div class="determinate pink" class="color-fondo" style="width:/*codigo AVANCE PORCENTAJE*/ %">
                                       </div>
                                   </div>

                                   <p>Variables y tipos de datos</p>
                                   <div class="progress grey">
                                       <div class="determinate purple" class="color-fondo" style="width: /*codigo AVANCE PORCENTAJE*/%"></div>
                                   </div>
                                   <p>UX</p>
                                   <div class="progress grey">
                                       <div class="determinate orange" class="color-fondo" style="width: /*codigo AVANCE PORCENTAJE*/%"></div>
                                   </div>
                                   <!--Promedios generales fin-->
                               </div>

                           </div>
                       </div>
                   </div>
               </div>`
}
  resultGenStg.innerHTML= genStg;
  //---
  return generationStg;
}
window.studentsList = (laboratoria) => {
  const students = computeStudentsStats(laboratoria);
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
  const students = computeStudentsStats(laboratoria);
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
    u1O = "01-Introduccion-a-programacion";
    u2O = "2-Variables-y-tipo-de-datos";
    u3O = "03-UX";
    p1O= students[i].stats.topics["01-Introduccion-a-programacion"].completedPercentage;
    p2O= students[i].stats.topics["02-Variables-y-tipo-de-datos"].completedPercentage;
    p3O= students[i].stats.topics["03-UX"].completedPercentage;
    objStudent.name = nameO;
    objStudent.email = emailO;
    objStudent.turno = turnoO;
    objStudent.average = averageO;
    objStudent.timeAverage = timeAverageO;
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
  const resultFilter = document.getElementById('cardsSpace');
  let sedeAll = '';
  let advancePercentage =[];
  let mediumPercentage =[];
  let lowPercentage =[];
  for (let i = 0; i < sedeM.length; i++) {
    advancePercentage[i] = Math.round(((sedeM[i].advanceStudents)*100)/(sedeM[i].activeStudents));
    lowPercentage[i] = Math.round(((sedeM[i].inLowStudents)*100)/(sedeM[i].activeStudents));
    mediumPercentage[i] = Math.round(((sedeM[i].mediumStudents)*100)/(sedeM[i].activeStudents));
    sedeAll += `<div class="row" id="cardsSpace">
                  <div class="col l4 m6 s12">
                       <div class="card white darken-1">
                           <div class="card-content card-data black-text">
                               <span class="card-title" id="cards">${sedeM[i].venue}</span>
                               <div id="color-activas">
                                   <span id="numero">${sedeM[i].activeStudents}</span>
                                   <span> Alumnas</span>
                               </div>

                               <!--Promedios generales inicio-->
                               <div class="elemento-card">
                                   <span>Promedio general</span>
                                   <div class="progress tamaño-barra">
                                       <div class="determinate blue" class="color-fondo" style="width: ${sedeM[i].average}${'%'}"></div>
                                       <span class="derecha letra-barra">${sedeM[i].average}${'%'}</span>
                                   </div>
                               </div>

                               <p>Intoducción a la programación</p>
                               <div class="progress grey">
                                   <div class="determinate pink" class="color-fondo" style="width: ${sedeM[i].advanceU1}${'%'}">
                                   </div>
                               </div>

                               <p>Variables y tipos de datos</p>
                               <div class="progress grey">
                                   <div class="determinate purple" class="color-fondo" style="width: ${sedeM[i].advanceU2}${'%'}"></div>
                               </div>
                               <p>UX</p>
                               <div class="progress grey">
                                   <div class="determinate orange" class="color-fondo" style="width: ${sedeM[i].advanceU3}${'%'}"></div>
                               </div>
                               <!--Promedios generales fin-->
                               <p>
                                   <i class="material-icons">schedule</i>
                                   <span>Tiempo: ${sedeM[i].timeAverage}${'Hrs.'}</span>
                               </p>
                               <!--Barra de avance tres colores-->
                               <span class="center">Progreso alumnas:</span>
                               <div class="elemento-card">
                                   <span class="letra-progreso izquierda">
                                       <i class="small material-icons">star</i>+90%</span>
                                   <span class="letra-progreso derecha">
                                       -60%
                                       <i class="small material-icons">star_half</i>
                                   </span>
                                   <div class="progress grey tamaño-barra">
                                       <div class="determinate amber darken-4 tooltipped" style="width: ${mediumPercentage[i]}${'%'}" data-position="right" data-tooltip="Alumnas regulares"></div>
                                       <div class="determinate red accent-4 tooltipped" style="width: ${lowPercentage[i]}${'%'}" data-position="bottom" data-tooltip="Alumnas atrasadas"></div>
                                       <div class="determinate light-green accent-4 tooltipped" style="width: ${advancePercentage[i]}${'%'}" data-position="left" data-tooltip="Alumnas avanzadas"></div>

                                   </div>
                               </div>
                               </div>
                               </div>
                           </div>
                       </div>`
  }
  resultFilter.innerHTML = sedeAll;
}

$(document).ready(function(){
  $('.tooltipped').tooltip();
});
