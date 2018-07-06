//Variables globales
const laboratoria = "https://api.myjson.com/bins/1amyo6";//API con DATA a usar (base de datos de alumnas)
const search = 'Aileen Edwyna';
const orderBy ="percentage";
const orderDirection = "DESC";
//DECLARACION DE FUNCIONES PARA IMPRIMIR EN DOM
const printVenues = (venues) =>{
  const resultVen = document.getElementById('print-sede');
  let ven ='';
  for(let i=0; i<venues.length; i++){
    let venueAverage= Math.round(venues[i].average);
    console.log(venues[i]);
    ven += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <span class="card-title" id="cards"></span>
                  <h4>Sede: ${venues[i].venue}</h4>
                  <h5>Prom. Completitud: ${venueAverage}${'%'}</h5>
                  <p>Alumnas Activas: ${venues[i].activeStudents}</p>
                  <p># Alumnas de bajo avance: ${venues[i].inLowStudents}</p>
                  <p># Alumnas de alto avance: ${venues[i].advanceStudents}</p>
                  </div>
                </div>
              </div>`
  }
  resultVen.innerHTML= ven;
};
const printGenerations = (generations) =>{
  const resultGen = document.getElementById('print-generation');
  let gen ='';
  for(let i=0; i<generations.length; i++){
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
  resultGen.innerHTML= gen;
};
const printStudents = (students) =>{
  const resultStudents = document.getElementById('students-result');
  let studentsS ='';
  for(let i=0; i<students.length; i++){
    studentsS += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <span class="card-title" id="cards"></span>
                  <h4">Sede: ${students[i].campus}</h4>
                  <h5>Generacion: ${students[i].generation}</h5>
                  <p>Nombre: ${students[i].name}</p>
                  <p>Completitud: ${students[i].average}${'%'}</p>
                  <p>Status: ${students[i].advertisment}</p>
                  <p>Tiempo total del programa: ${students[i].totalTime}${'hrs'}</p>
                  <p>Tiempo invertido: ${students[i].timeProm}${'hrs'}</p>
                  </div>
                </div>
              </div>`
  }
  resultStudents.innerHTML= studentsS;
};
const printSort = (sort)=>{
  const resultSort = document.getElementById('students-result');
  let studentsSort ='';
  for(let i=0; i<sort.length; i++){
    studentsSort += `<div class="col s3 m3">
                <div class="card white darken-1">
                  <div class="card-content card-data black-text">
                  <span class="card-title" id="cards"></span>
                  <h4>Sede: ${sort[i].campus}</h4>
                  <h5>Generacion: ${sort[i].generation}</h5>
                  <p>Nombre: ${sort[i].name}</p>
                  <p>Completitud: ${sort[i].average}${'%'}</p>
                  <p>Status: ${sort[i].advertisment}</p>
                  <p>Tiempo total del programa: ${sort[i].totalTime}${'hrs'}</p>
                  <p>Tiempo invertido: ${sort[i].timeProm}${'hrs'}</p>
                  </div>
                </div>
              </div>`
  }
  resultSort.innerHTML= studentsSort;
};
const printFilter = (filter)=>{
  const resultFilter = document.getElementById('students-result');
  let studentsFilter ='';
  for(let i=0; i<filter.length; i++){
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
  resultFilter.innerHTML= studentsFilter;
};
//DECLARACION DE LA FUNCION QUE SE EJECUTARÁ CON LOS EVENTOS CLIK
const listeners = (data) => {
  //Evento que manda a ejecutar e imprimir la funcion de filtrado
  let getFilter = document.getElementById("filt");
  getFilter.addEventListener("click", (e)=>{
    const students = computeStudentsStats(data);
    const search = 'Aileen Edwyna';
    const filter = filterStudents(students,search);
    const printF = printFilter(filter);
  });
  //Evento que manda a ejecutar e imprimir la funcion de ordenamiento
  let getSort = document.getElementById("sort");
  getSort.addEventListener("click", (e)=>{
    const students = computeStudentsStats(data);
    const orderBy = "percentage";
    const orderDirection = "DESC";
    const sort = sortStudents(students, orderBy, orderDirection);
    const printS = printSort(sort);
  });
  //Evento que manda a ejecutar e imprimir la funcion de sedes
  let getVenue = document.getElementById("venuesFun");
  getVenue.addEventListener("click", (e)=>{
    const venues = computeVenuesStats(data);
    const printVenues = printVenues(venues);
  });
  //Evento que manda a ejecutar e imprimir la funcion de generaciones
  let getGeneration = document.getElementById("generationFun");
  getGeneration.addEventListener("click", (e)=>{
    const generation = computeGenerationsStats(data);
    printGenerations(generation);
  });
  let getStudents = document.getElementById("studentsFun");
  getStudents.addEventListener("click", (e)=>{
    const students = computeStudentsStats(data);
    printStudents(students);
  });
}

window.onload = () =>{
  fetch(laboratoria)
    .then(data => data.json())
    .then((data) =>{
      deepStudentsStats(data);
      listeners(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
