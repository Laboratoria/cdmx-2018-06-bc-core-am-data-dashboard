//SEDES
const containerCampus = document.getElementById('resultadosSedes');
//GENERACIONES
const containerGenerations = document.getElementById('resultadosGeneracionesLima');
//LIMA
//ALUMNAS
const containerstudent1 = document.getElementById('resultadosAlumnasMex1');
const containerstudent3 = document.getElementById('resultadosAlumnasLima3');
const containerstudent4 = document.getElementById('resultadosAlumnasLima4');
const containerstudent5 = document.getElementById('resultadosAlumnasLima5');

//TEMAS
const containersTopics3 = document.getElementById('resultadostemasLima3');
const containersTopics = document.getElementById('resultadostemasLima');
const containersTopics5 = document.getElementById('resultadostemasLima5');
//SUBTEMAS
const containersSubTopics3 = document.getElementById('resultadosSubtemasLima3');
const containersSubTopics4 = document.getElementById('resultadosSubtemasLima4');
const containersSubTopics5 = document.getElementById('resultadosSubtemasLima5');

//MEXICO
//SANTIAGO






render = (data) => {
  //SEDES
  document.getElementById("sedes").addEventListener("click", (event) => {
    let campus = "";
    console.log(data)
    let sedesAll = data;
    let sedesOne = Object.keys(sedesAll)
    console.log(Object.keys(sedesAll))
    for(let i = 0; i < sedesOne.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PARA PINTARLA DESPUES
    let campusEspecific = sedesOne[i];
    console.log(sedesOne[0])
    //PINTAR A TRAVES DEL ID SEÑALADO EN HTML
    campus += `<p>Sedes:${campusEspecific}</p>`
    };
    containerCampus.innerHTML = campus;

  })
  //GENERACIONES LIMA
  //LLAMAR ID DEL BOTON PARA Q CORRA LA FUNSION
  document.getElementById("generacionesLima").addEventListener("click", (event) => {
    //RESULTADOS
    let generation = "";
    let generationAll = Object.keys(data.lima.generacion);
    console.log(generationAll)
    for(let i = 0; i < generationAll.length; i++){
      let generationLima = generationAll[i];
      generation += `<p>${generationLima} generación</p>`
    };
    containerGenerations.innerHTML = generation;

  })
  //ALUMNAS CUARTA LIMA
  document.getElementById("alumnas").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.lima.generacion.cuarta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.lima.generacion.cuarta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[0]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent4.innerHTML = student;

  })
  //ALUMNAS TERCERA LIMA
  document.getElementById("alumnastresLima").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.lima.generacion.tercera.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.lima.generacion.tercera.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[0]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent3.innerHTML = student;

  })
  //ALUMNAS QUINTA LIMA
  document.getElementById("alumnas5Lima").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.lima.generacion.quinta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.lima.generacion.quinta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[0]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent5.innerHTML = student;

  })
  //ALUMNAS TERCERA MÉXICO
  document.getElementById("alumnastresMexico").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.mexico.generacion.tercera.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.mexico.generacion.tercera.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[1]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent1.innerHTML = student;

  })
  //ALUMNAS CUARTA MÉXICO
  document.getElementById("alumnas4Mexico").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.mexico.generacion.cuarta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.mexico.generacion.tercera.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[1]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent.innerHTML = student;

  })
  //ALUMNAS QUINTA MÉXICO
  document.getElementById("alumnas5Mexico").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.mexico.generacion.quinta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.mexico.generacion.tercera.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[1]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent.innerHTML = student;

  })
  //ALUMNAS TERCERA SANTIAGO
  document.getElementById("alumnas3Santiago").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.santiago.generacion.tercera.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.santiago.generacion.tercera.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[2]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent.innerHTML = student;

  })
  //ALUMNAS CUARTA SANTIAGO
  document.getElementById("alumnas4Santiago").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.santiago.generacion.cuarta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.santiago.generacion.cuarta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[2]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent.innerHTML = student;

  })
  //ALUMNAS QUINTA SANTIAGO
  document.getElementById("alumna5Santiago").addEventListener("click", (event) => {
    //RESULTADOS
    let student = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.santiago.generacion.quinta.estudiantes))
    //ingresando hasta alumnas
    let estudianteLima = data.santiago.generacion.quinta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    let name = alumna.nombre;
    let email = alumna.correo;
    let completedPercentage = progresos.porcentajeCompletado;
    let percentageDuration = progresos.duracionPrograma;
    let turno = alumna.turno;
    let campus = "";
    let sedes = Object.keys(data)
    console.log(sedes)
    for(let j = 0; j < sedes.length; j++){
      let resultCampus = sedes[2]
      campus = resultCampus;
      console.log(campus)
    }; 
    student += `<tr>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${campus}</td>                 
                  <td>${turno}</td> 
                  <td>${percentageDuration}</td>
                  <td>${completedPercentage}</td>
                </tr>`
  };
  containerstudent.innerHTML = student;

  })
  //TEMAS 
  document.getElementById("temasLima").addEventListener("click", (event) => {
    let topics = "";
    let estudianteLima = data.lima.generacion.cuarta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
    let alumna = estudianteLima[i];
    let name = alumna.nombre;
    //mostrar temas
    let topicsAllKay = Object.keys(estudianteLima[i].progreso.temas);
    //hacer recorrido para obtener la info dentro de este
    let topicsAllValue = Object.values(estudianteLima[i].progreso.temas);
    for (var j = 0; j < topicsAllValue.length; j++) {
      let completedPercentage = topicsAllValue[j].porcentajeCompletado;
      console.log(completedPercentage)
      let percentageDuration = topicsAllValue[j].duracionTemaCompletado;
      console.log(percentageDuration)
      let totalTime = topicsAllValue[j].duracionTema;
      console.log(totalTime)
      topics += `<tr>          
                <td>${name}</td>
                <td>${topicsAllKay}</td>
                <td>${completedPercentage}</td>
                <td>${percentageDuration}</td>
                <td>${totalTime}</td>   
              </tr>`
    };
    };
    containersTopics.innerHTML = topics;
  
    
  })

  //SUBTEMAS 
 




 













}