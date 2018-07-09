//Variables globales
const laboratoria = "https://api.myjson.com/bins/1amyo6";//API con DATA a usar (base de datos de alumnas)
const search = 'Aileen Edwyna';
const orderBy = "percentage";
const orderDirection = "DESC";
//DECLARACION DE FUNCIONES PARA IMPRIMIR EN DOM
const printGenerations = (generations) => {
  const resultGen = document.getElementById('cardsSpace');
  let gen = '';
  for (let i = 0; i < generations.length; i++) {
    gen += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <span class="card-title" id="cards"></span>
                  <h4>Generación: ${generations[i].generation}</h4>
                  <h5>Sede: ${generations[i].venue}</h5>
                  <p>Alumnas Activas: ${generations[i].count}</p>
                  <p>Prom. Completitud: ${generations[i].average}${'%'}</p>
                  <p>Prom. Tiempo invertido: ${generations[i].timeAverage}${'hrs'}</p>
                  <p># Alumnas de bajo avance: ${generations[i].inLowStudents}</p>
                  <p># Alumnas de alto avance: ${generations[i].advanceStudents}</p>
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
    studentsFilter += `<div class="row" id="cardsSpace">
                   <div class="col l4 m6 s12">
                       <div class="card white darken-1">
                           <div class="card-content card-data black-text">
                               <span class="card-title" id="cards">${filter[i].campus}</span>
                               <h5>Generacion: ${filter[i].generation}</h5>
                               <div id="color-activas">
                                   <span id="numero">${filter[i].name}</span>
                                   <span> Nombre</span>
                               </div>

                               <!--Promedios generales inicio-->
                               <div class="elemento-card">
                                   <span>Promedio general</span>
                                   <div class="progress tamaño-barra">
                                       <div class="determinate blue" class="color-fondo" style="width: ${filter[i].stats.completedPercentage}${'%'}"></div>
                                       <span class="derecha letra-barra">${filter[i].stats.completedPercentage}${'%'}</span>
                                   </div>
                               </div>

                               <p>Intoducción a la programación</p>
                               <div class="progress grey">
                                   <div class="determinate pink" class="color-fondo" style="width: /*codigo PROMEDIO AVANCE*/%">
                                   </div>
                               </div>

                               <p>Variables y tipos de datos</p>
                               <div class="progress grey">
                                   <div class="determinate purple" class="color-fondo" style="width: /*codigo PROMEDIO AVANCE*/%"></div>
                               </div>
                               <p>UX</p>
                               <div class="progress grey">
                                   <div class="determinate orange" class="color-fondo" style="width: /*codigo PROMEDIO AVANCE*/%"></div>
                               </div>
                               <!--Promedios generales fin-->
                               <p>
                                   <i class="material-icons">schedule</i>
                                   <span>Tiempo: ${filter[i].timeProm}${'hrs'}</span>
                               </p>
                               <!--Barra de avance dos colores-->
                               <div class="elemento-card">
                                   <span class="letra-progreso izquierda">
                                       <i class="material-icons">mood</i>+90%</span>
                                   <span class="letra-progreso derecha">
                                       -60%
                                       <i class="material-icons">mood_bad</i>
                                   </span>
                                   <div class="progress tamaño-barra color-progreso2">
                                       <div class="determinate color-progreso1" class="color-fondo" style="width: 40%"></div>
                                   </div>
                               </div>

                           </div>
                       </div>
                   </div>`
  }
  resultFilter.innerHTML = studentsFilter;
};
// DECLARACION DE LA FUNCION QUE SE EJECUTARÁ CON LOS EVENTOS CLIK
const listeners = (data) => {
  // Evento que manda a ejecutar e imprimir la funcion de filtrado
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
      listeners(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
