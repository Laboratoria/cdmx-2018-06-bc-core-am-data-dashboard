//barra para alumnas
$(".dropdown-trigger").dropdown();

//Variables globales
const laboratoria = "https://api.myjson.com/bins/1amyo6";//API con DATA a usar (base de datos de alumnas)
//DECLARACION DE FUNCIONES PARA IMPRIMIR EN DOM
const printGenerations = (generations) => {
  const resultGen = document.getElementById('cardsSpace');
  let gen = '';
  let advancePercentage = [];
  let lowPercentage = [];
  let mediumPercentage = [];
  for (let i = 0; i < generations.length; i++) {
    advancePercentage[i] = Math.round(((generations[i].advanceStudents) * 100) / (generations[i].count));
    lowPercentage[i] = Math.round(((generations[i].inLowStudents) * 100) / (generations[i].count));
    mediumPercentage[i] = Math.round(((generations[i].mediumStudents) * 100) / (generations[i].count));
    gen += `<div class="row" id = "cardsSpace">
              <div class="col s12 m12 l12">
                <div class="card whithe col s12 m12 l12">
                  <div class="card-content black-text col s12 m12 l12">
                    <div class="col s6 m5 l5">
                      <!--generaciones1-->
                      <span class="card-title cards">${generations[i].generation} Generación</span>
                      <span class="card-title cards">${generations[i].venue}</span>
                        <div class="color-activas">
                          <span class="numero">${generations[i].count}</span>
                          <span> Alumnas</span>
                          </div>
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
                              <div class="determinate amber darken-4 tooltipped" style="width: ${mediumPercentage[i]}${'%'}" data-position="right" data-tooltip="Alumnas regulares" title="${generations[i].mediumStudents}${' Alumnas regulares'}"></div>
                              <div class="determinate red accent-4 tooltipped" style="width: ${lowPercentage[i]}${'%'}" data-position="bottom" data-tooltip="Alumnas atrasadas" title="${generations[i].inLowStudents}${' Alumnas atrasadas'}"></div>
                              <div class="determinate light-green accent-4 tooltipped" style="width: ${advancePercentage[i]}${'%'}" data-position="left" data-tooltip="Alumnas avanzadas" title="${generations[i].advanceStudents}${' Alumnas avanzadas'}"></div>
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
                                <div class="determinate pink" class="color-fondo" style="width:${generations[i].advanceU1}${'%'}" title ="${generations[i].advanceU1}${'%'}">
                                </div>
                              </div>
                            <p>Variables y tipos de datos</p>
                              <div class="progress grey">
                                <div class="determinate purple" class="color-fondo" style="width: ${generations[i].advanceU2}${'%'}" title ="${generations[i].advanceU2}${'%'}"></div>
                                </div>
                            <p>UX</p>
                              <div class="progress grey">
                                <div class="determinate orange" class="color-fondo" style="width: ${generations[i].advanceU3}${'%'}" title ="${generations[i].advanceU3}${'%'}"></div>
                                </div>
                            <p>Quiz´s</p>
                              <div class="progress grey">
                                <div class="determinate green" class="color-fondo" style="width: ${generations[i].quizAverage}${'%'}" title ="${generations[i].quizAverage}${'ptos'}"></div>
                                </div>
                            <!--Promedios generales y de quiz fin-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
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
                </div>`;
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
                    </div>`;
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
                      </div>`;
  }
  resultFilter.innerHTML = studentsFilter;
};
// DECLARACION DE LA FUNCION QUE SE EJECUTARÁ CON LOS EVENTOS CLIK
const listeners = (data) => {
  // Evento que manda a ejecutar e imprimir la funcion de sedes
  let getVenue = document.getElementById('goVenues');
  getVenue.addEventListener('click', (event) => {
    printSedesAll(data);
  });
  // Evento que manda a ejecutar e imprimir la funcion de generaciones
  let getGeneration = document.getElementById('goGeneretions');
  getGeneration.addEventListener('click', (event) => {
    const generation = computeGenerationsStats(data);
    printGenerations(generation);
  });
  let getStudents = document.getElementById('goStudents');
  getStudents.addEventListener('click', (event) => {
    // const students = studentsModal(data);
    studentsPrint(data);
  });
  // Evento que manda a ejecutar e imprimir la funcion de filtrado
  let getFilter = document.getElementById('goFilter');
  getFilter.addEventListener('click', (event) => {
    const students = computeStudentsStats(data);
    const search = 'Aileen Edwyna';
    const filter = filterStudents(students, search);
    const printF = printFilter(filter);
  });
  // Evento que manda a ejecutar e imprimir la funcion de ordenamiento
  let getSort = document.getElementById('goSort');
  getSort.addEventListener('click', (event) => {
    const students = computeStudentsStats(data);
    const orderBy = 'percentage';
    const orderDirection = 'DESC';
    const sort = sortStudents(students, orderBy, orderDirection);
    const printS = printSort(sort);
  });
};
// Función global window onload para cargar y ejecutar el Fetch a refrescar la pagina
window.onload = () => {
  fetch(laboratoria)
    .then(data => data.json())
    .then((data) => {
      // printSedesAll imprime la primer vista de la pagina con cards de informaciónde las sedes
      printSedesAll(data);
      // Ejecuta los eventos cuando se ejecuta una interacción con espacion en DOM
      listeners(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
