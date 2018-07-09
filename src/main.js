//Variables globales
const laboratoria = "https://api.myjson.com/bins/1amyo6";//API con DATA a usar (base de datos de alumnas)
//DECLARACION DE FUNCIONES PARA IMPRIMIR EN DOM
const printGenerations = (generations) => {
  const resultGen = document.getElementById('cardsSpace');
  let gen = '';
  for (let i = 0; i < generations.length; i++) {
    gen += `<div class="row" id = "cardsSpace">
              <div class="col s12 m12 l12">
                <div class="card whithe col s12 m12 l12">
                  <div class="card-content black-text col s12 m12 l12">
                    <div class="col s6 m5 l5">
                    <!--generaciones1-->
                      <span class="card-title cards">${generations[i].generation} Generación</span>
                      <span class="card-title cards">${generations[i].venue}</span>
                      <div id="color-activas">
                        <span id="numero">${generations[i].count}</span>
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
                        <div class="determinate color-progreso1" class="color-fondo" style="width: ${generations[i].inLowStudents}${'%'}"></div>
                        </div>
                        </div>
                        <!--Tiempo promedio-->
                          <p>
                            <i class="material-icons">schedule</i>
                            <span>Tiempo promedio invertido: ${generations[i].timeAverage}${'hrs'}</span>
                          </p>
                        </div>
                        <div class="col s5 m7 l7">
                          <!--generaciones2-->
                          <!--Promedios generales inicio-->
                          <div class="elemento-card">
                            <span>Promedio general </span>
                            <div class="progress tamaño-barra">
                              <div class="determinate blue" class="color-fondo" style="width:${generations[i].average}${'%'}"></div>
                                <span class="derecha letra-barra">${generations[i].average}${'%'}</span>
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
  resultGen.innerHTML = gen;
};
const printStudents = (students) => {
  const resultStudents = document.getElementById('cardsSpace');
  let studentsS = '';
  for (let i = 0; i < students.length; i++) {
    studentsS += `<div class="col s3 m3">
                    <div class="card white darken-1">
                    <div class="card-content card-data black-text">
                      <span class="card-title" id="cards"></span>
                      <h4">Sede: ${students[i].campus}</h4>
                      <h5>Generacion: ${students[i].generation}</h5>
                      <p>Nombre: ${students[i].name}</p>
                      <p>Completitud: ${students[i].stats.completedPercentage}${'%'}</p>
                      <p>Status: ${students[i].stats.status}</p>
                      <p>Tiempo total del programa: ${students[i].totalTime}${'hrs'}</p>
                      <p>Tiempo invertido: ${students[i].timeProm}${'hrs'}</p>
                    </div>
                  </div>
                </div>`
  }
  resultStudents.innerHTML = studentsS;
};
const printSort = (sort) => {
  const resultSort = document.getElementById('cardsSpace');
  let studentsSort = '';
  for (let i = 0; i < sort.length; i++) {
    studentsSort += `<div class="col s3 m3">
                      <div class="card white darken-1">
                        <div class="card-content card-data black-text">
                          <span class="card-title" id="cards"></span>
                          <h4>Sede: ${sort[i].campus}</h4>
                          <h5>Generacion: ${sort[i].generation}</h5>
                          <p>Nombre: ${sort[i].name}</p>
                          <p>Completitud: ${sort[i].stats.completedPercentage}${'%'}</p>
                          <p>Status: ${sort[i].stats.status}</p>
                          <p>Tiempo total del programa: ${sort[i].totalTime}${'hrs'}</p>
                          <p>Tiempo invertido: ${sort[i].timeProm}${'hrs'}</p>
                        </div>
                      </div>
                    </div>`
  }
  resultSort.innerHTML = studentsSort;
};
const printFilter = (filter) => {
  const resultFilter = document.getElementById('cardsSpace');
  let studentsFilter = '';
  for (let i = 0; i < filter.length; i++) {
    studentsFilter += `<div class="col s3 m3">
                        <div class="card white darken-1">
                          <div class="card-content card-data black-text">
                            <span class="card-title" id="cards"></span>
                            <h4>Sede: ${filter[i].campus}</h4>
                            <h5>Generacion: ${filter[i].generation}</h5>
                            <p>Nombre: ${filter[i].name}</p>
                            <p>Completitud: ${filter[i].average}${'%'}</p>
                            <p>Status: ${filter[i].advertisment}</p>
                            <p>Tiempo total del programa: ${filter[i].totalTime}${'hrs'}</p>
                            <p>Tiempo invertido: ${filter[i].timeProm}${'hrs'}</p>
                          </div>
                        </div>
                      </div>`
  }
  resultFilter.innerHTML = studentsFilter;
};
// DECLARACION DE LA FUNCION QUE SE EJECUTARÁ CON LOS EVENTOS CLIK
const listeners = (data) => {
  // Evento que manda a ejecutar e imprimir la funcion de sedes
  let getVenue = document.getElementById("goVenues");
  getVenue.addEventListener("click", (e) => {
    printSedesAll(data);
  });
  // Evento que manda a ejecutar e imprimir la funcion de generaciones
  let getGeneration = document.getElementById("goGeneretions");
  getGeneration.addEventListener("click", (e) => {
    const generation = computeGenerationsStats(data);
    printGenerations(generation);
  });
  let getStudents = document.getElementById("goStudents");
  getStudents.addEventListener("click", (e) => {
    const students = computeStudentsStats(data);
    printStudents(students);
  });
  // Evento que manda a ejecutar e imprimir la funcion de filtrado
  let getFilter = document.getElementById("goFilter");
  getFilter.addEventListener("click", (e) => {
    const students = computeStudentsStats(data);
    const search = 'Aileen Edwyna';
    const filter = filterStudents(students, search);
    const printF = printFilter(filter);
  });
  // Evento que manda a ejecutar e imprimir la funcion de ordenamiento
  let getSort = document.getElementById("goSort");
  getSort.addEventListener("click", (e) => {
    const students = computeStudentsStats(data);
    const orderBy = "percentage";
    const orderDirection = "DESC";
    const sort = sortStudents(students, orderBy, orderDirection);
    const printS = printSort(sort);
  });
}

window.onload = () => {
  fetch(laboratoria)
    .then(data => data.json())
    .then((data) => {
      generationsLima(data);
      listeners(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
