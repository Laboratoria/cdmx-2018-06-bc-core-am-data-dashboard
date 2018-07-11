

const url = 'http://api.myjson.com/bins/1efx86';

window.onload = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      //aquí van toda las funciones que ultilizaran la data (las de window y las de dibujar)
      console.log(data)
      const students = computeStudentsStats(data);
      const generations = computeGenerationsStats(data);
      dataMex(data);
      dataSantiago(data);
      dataLima(data);
      renderInfo(data);
      //drawStudents(students);
      //drawCampus(generations);
      //sortStudents(data)
      //filterStudents(data)8888
    })
    .catch((error) => {
      console.log(error);
    });
}

const container = document.getElementById('result');

const dataLima = (data) => {
  document.getElementById('lima3').addEventListener('click', (event) => {
    let result = '';
    console.log(Object.keys(data.lima.generacion))
    const info = Object.keys(data.lima.generacion);
    console.log(Object.keys(info));

    for (var generacion in info) {
      if (info.hasOwnProperty(generacion)) {
        console.log("la clave es " + generacion + " y el valor es " + info[generacion])
        //console.log(info.lima.generacion)

        let arrLaboratoriaEstudiantesLima = data.lima.generacion[info[generacion]].estudiantes;

        for (i = 0; i < arrLaboratoriaEstudiantesLima.length; i++) {
          result += `
          <div class='col xl4'>
                  <div class='card'>
                      
                         <span class="card-title">🙋${data.lima.generacion[info[generacion]].estudiantes[i].nombre}💻</span>
                              <div class="card-content center">
                              <p>Email: ${data.lima.generacion[info[generacion]].estudiantes[i].correo} ✉</p>
                              <p>Turno: ${data.lima.generacion[info[generacion]].estudiantes[i].turno}☀</p>
                              <p>Progreso: ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.porcentajeCompletado}%✅</p>
                              <p>1. Introduccion a la Programación: Completado en  ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado}%📝</p>
                              <p>2. Variables y tipos de Datos: Completado en  ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado}%📝</p>
                              <p>3. UX: Completado en  ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas['03-UX'].porcentajeCompletado}%📝</p>
                              </div>
                     
                  </div>
              </div>`


        }
      }
      container.innerHTML = result;

    }
  });


}


const dataMex = (data) => {
  document.getElementById('mex3').addEventListener('click', (event) => {
    let result = '';
    console.log(Object.keys(data.mexico.generacion))
    const info = Object.keys(data.mexico.generacion);
    console.log(Object.keys(info));

    for (var generacion in info) {
      if (info.hasOwnProperty(generacion)) {
        console.log("la clave es " + generacion + " y el valor es " + info[generacion])
        //console.log(info.lima.generacion)

        let arrLaboratoriaEstudiantesMex = data.mexico.generacion[info[generacion]].estudiantes;

        for (i = 0; i < arrLaboratoriaEstudiantesMex.length; i++) {
          result += `
                    <div class='col xl4'>
                            <div class='card'>
                                
                                   <span class="card-title">🙋${data.mexico.generacion[info[generacion]].estudiantes[i].nombre}💻</span>
                                        <div class="card-content center">
                                        <p>Email: ${data.mexico.generacion[info[generacion]].estudiantes[i].correo} ✉</p>
                                        <p>Turno: ${data.mexico.generacion[info[generacion]].estudiantes[i].turno}☀</p>
                                        <p>Progreso: ${data.mexico.generacion[info[generacion]].estudiantes[i].progreso.porcentajeCompletado}%✅</p>
                                        <p>1. Introduccion a la Programación: Completado en  ${data.mexico.generacion[info[generacion]].estudiantes[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado}%📝</p>
                                        <p>2. Variables y tipos de Datos: Completado en  ${data.mexico.generacion[info[generacion]].estudiantes[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado}%📝</p>
                                        <p>3. UX: Completado en  ${data.mexico.generacion[info[generacion]].estudiantes[i].progreso.temas['03-UX'].porcentajeCompletado}%📝</p>
                                        </div>
                               
                            </div>
                        </div>`


        }
      }
      container.innerHTML = result;

    }
  });


}



const dataSantiago = (data) => {
  document.getElementById('san3').addEventListener('click', (event) => {
    let result = '';
    console.log(Object.keys(data.santiago.generacion))
    const info = Object.keys(data.santiago.generacion);
    console.log(Object.keys(info));

    for (var generacion in info) {
      if (info.hasOwnProperty(generacion)) {
        console.log("la clave es " + generacion + " y el valor es " + info[generacion])
        //console.log(info.lima.generacion)

        let arrLaboratoriaEstudiantesSan = data.santiago.generacion[info[generacion]].estudiantes;

        for (i = 0; i < arrLaboratoriaEstudiantesSan.length; i++) {
          result += `
                    <div class='col xl4'>
                            <div class='card'>
                                
                                   <span class="card-title">🙋${data.santiago.generacion[info[generacion]].estudiantes[i].nombre}💻</span>
                                        <div class="card-content center">
                                        <p>Email: ${data.santiago.generacion[info[generacion]].estudiantes[i].correo} ✉</p>
                                        <p>Turno: ${data.santiago.generacion[info[generacion]].estudiantes[i].turno}☀</p>
                                        <p>Progreso: ${data.santiago.generacion[info[generacion]].estudiantes[i].progreso.porcentajeCompletado}%✅</p>
                                        <p>1. Introduccion a la Programación: Completado en  ${data.santiago.generacion[info[generacion]].estudiantes[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado}%📝</p>
                                        <p>2. Variables y tipos de Datos: Completado en  ${data.santiago.generacion[info[generacion]].estudiantes[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado}%📝</p>
                                        <p>3. UX: Completado en  ${data.santiago.generacion[info[generacion]].estudiantes[i].progreso.temas['03-UX'].porcentajeCompletado}%📝</p>
                                        </div>
                               
                            </div>
                        </div>`


        }
      }
      container.innerHTML = result;

    }
  });


}
