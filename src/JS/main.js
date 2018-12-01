// Efecto barra verde para alumnas
$('.dropdown-trigger').dropdown();

// Variables globales
const laboratoria = 'https://api.myjson.com/bins/1amyo6';// API con DATA a usar (base de datos de alumnas)

// DECLARACION DE FUNCIONES PARA IMPRIMIR EN DOM
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
    // Templete string
    gen += `<div class="row" id = "cardsSpace">
              <div class="col s12 m12 l12">
                <div class="card whithe col s12 m12 l12">
                  <div class="card-content black-text col s12 m12 l12">
                    <div class="col s6 m5 l5">
                      <!--generaciones-->
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
                              <i class="small material-icons">star</i>+90%
                            </span>
                            <span class="letra-progreso derecha">
                              -60%
                              <i class="small material-icons">star_half</i>
                            </span>
                            <div class="progress grey tamaño-barra">
                              <div class="determinate amber darken-4 tooltipped" style="width: ${mediumPercentage[i]}${'%'}" data-position="right" data-tooltip="${generations[i].mediumStudents}${' Alumnas regulares'}"></div>
                              <div class="determinate red accent-4 tooltipped" style="width: ${lowPercentage[i]}${'%'}" data-position="bottom" data-tooltip="${generations[i].inLowStudents}${' Alumnas atrasadas'}"></div>
                              <div class="determinate light-green accent-4 tooltipped" style="width: ${advancePercentage[i]}${'%'}" data-position="left" data-tooltip="${generations[i].advanceStudents}${' Alumnas avanzadas'}"></div>
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
                              <div class="determinate pink" class="color-fondo" style="width:${generations[i].advanceU1}${'%'}" data-tooltip ="${generations[i].advanceU1}${'%'}"></div>
                            </div>
                            <p>Variables y tipos de datos</p>
                              <div class="progress grey">
                                <div class="determinate purple" class="color-fondo" style="width: ${generations[i].advanceU2}${'%'}" data-tooltip ="${generations[i].advanceU2}${'%'}"></div>
                              </div>
                            <p>UX</p>
                              <div class="progress grey">
                                <div class="determinate orange" class="color-fondo" style="width: ${generations[i].advanceU3}${'%'}" data-tooltip ="${generations[i].advanceU3}${'%'}"></div>
                              </div>
                            <p>Quiz´s</p>
                              <div class="progress grey">
                                <div class="determinate green" class="color-fondo" style="width: ${generations[i].quizAverage}${'%'}" data-tooltip ="${generations[i].quizAverage}${'ptos'}"></div>
                              </div>
                            <!--Promedios generales y de quiz fin-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
  }
  resultGen.innerHTML = gen;
  // ToolTip
  $(document).ready(function() {
    $('.tooltipped').tooltip({
      accordion: true
    });
  });
  // Colapso de alumnas
  $(document).ready(function() {
    $('.collapsible').collapsible({
      accordion: true
    });
  });
};
const printSort = (sort) => {
  const resultSort = document.getElementById('cardsSpace');
  let studentsSort = '';

  for (let i = 0; i < sort.length;i++) {
    studentsSort += `<div class="container collapsable-color">
                      <ul class="collapsible">
                        <li>
                          <div class="collapsible-header">
                            <div>${sort[i].name}${'  '}${sort[i].average}${'%'}
                              <a class="secondary-content waves-effect waves-light">
                                <i class="material-icons">send</i>
                              </a>
                            </div>
                            <div>${sort[i].venue}${'  '}${sort[i].generation}${' Generación'}<a class="secondary-content waves-effect waves-light">
                              </a>
                            </div>
                            <div class="progress grey">
                              <div class="determinate orange tooltipped" data-position="right" data-tooltip="UX: ${ sort[i].p1}${'%'}" style="width: ${sort[i].p1}${'%'}"></div>
                              <div class="determinate purple tooltipped" data-position="bottom" data-tooltip="Variables y tipos de datos: ${ sort[i].p2}${'%'}" style="width: ${sort[i].p2}${'%'}"></div>
                              <div class="determinate pink tooltipped" data-position="left" data-tooltip="Introduccion a la programacion ${sort[i].p3}${'%'}" style="width: ${sort[i].p3}${'%'}"></div>
                            </div>
                          </div>
                          <div class="collapsible-body">
                              <div>
                                <span><img style="width:150px; height:150px;" src="Pictures/perfil.png"></span>
                                <span>${sort[i].name}</span>
                              </div>
                              <p class="collapsable">
                                <i class="material-icons">mail_outline</i> Email: ${sort[i].email}
                              </p>
                              <p class="collapsable">
                                <i class="material-icons">wb_sunny</i> Turno: ${sort[i].turno}
                              </p>
                              <p class="collapsable">
                                <i class="material-icons">schedule</i> Tiempo promedio invertido: ${sort[i].timeAverage}
                              </p>
                              <p class="collapsable">
                                <i class="material-icons">book</i> Unidad 1 Introducción a la programación: ${sort[i].p1}${'%'}
                              </p>
                              <p class="collapsable-sub">
                                <i class="material-icons">playlist_add_check</i> Score quiz 1: ${sort[i].quizU1}
                              </p>
                              <p class="collapsable">
                                <i class="material-icons">book</i> Unidad 2 Variables y tipos de datos: ${sort[i].p2}${'%'}
                              </p>
                              <p class="collapsable-sub">
                                <i class="material-icons">playlist_add_check</i> Score quiz 2: ${sort[i].quizU2}
                              </p>
                              <p class="collapsable">
                                <i class="material-icons">book</i> Unidad 3 UX: ${sort[i].p3}${'%'}
                              </p>
                              <p class="collapsable-sub">
                                <i class="material-icons">playlist_add_check</i> Score quiz 3: ${sort[i].quizU3}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>`;
  }
  resultSort.innerHTML = studentsSort;
  // ToolTip
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }, {passive: true});
  // Colapso de alumnas
  $(document).ready(function() {
    $('.collapsible').collapsible({
      accordion: true
    });
  });
};
const printFilter = (filter) => {
  const resultFilter = document.getElementById('cardsSpace');
  let studentsFilter = '';
  for (let i = 0; i < filter.length;i++) {
    studentsFilter += `<div class="container collapsable-color">
                        <ul class="collapsible">
                          <li>
                            <div class="collapsible-header">
                              <div>${filter[i].name}${'  '}${filter[i].average}${'%'}
                                <a class="secondary-content waves-effect waves-light">
                                  <i class="material-icons">send</i>
                                </a>
                              </div>
                              <div>${filter[i].venue}${'  '}${filter[i].generation}${' Generación'}<a class="secondary-content waves-effect waves-light">
                                </a>
                              </div>
                              <div class="progress grey">
                                <div class="determinate orange tooltipped" data-position="right" data-tooltip="UX: ${ filter[i].p1}${'%'}" style="width: ${filter[i].p1}${'%'}"></div>
                                  <div class="determinate purple tooltipped" data-position="bottom" data-tooltip="Variables y tipos de datos: ${ filter[i].p2}${'%'}" style="width: ${filter[i].p2}${'%'}"></div>
                                  <div class="determinate pink tooltipped" data-position="left" data-tooltip="Introduccion a la programacion ${filter[i].p3}${'%'}" style="width: ${filter[i].p3}${'%'}"></div>
                                </div>
                              </div>
                              <div class="collapsible-body">
                                <div>
                                  <span><img style="width:150px; height:150px;" src="Pictures/perfil.png"></span>
                                  <span>${filter[i].name}</span>
                                </div>
                                <p class="collapsable">
                                  <i class="material-icons">mail_outline</i> Email: ${filter[i].email}
                                </p>
                                <p class="collapsable">
                                  <i class="material-icons">wb_sunny</i> Turno: ${filter[i].turno}
                                </p>
                                <p class="collapsable">
                                  <i class="material-icons">schedule</i> Tiempo promedio invertido: ${filter[i].timeAverage}
                                </p>
                                <p class="collapsable">
                                  <i class="material-icons">book</i> Unidad 1 Introducción a la programación: ${filter[i].p1}${'%'}
                                </p>
                                <p class="collapsable-sub">
                                  <i class="material-icons">playlist_add_check</i> Score quiz 1: ${filter[i].quizU1}${'  ptos.'}
                                </p>
                                <p class="collapsable">
                                  <i class="material-icons">book</i> Unidad 2 Variables y tipos de datos: ${filter[i].p2}${'%'}
                                </p>
                                <p class="collapsable-sub">
                                  <i class="material-icons">playlist_add_check</i> Score quiz 2: ${filter[i].quizU2}${'  ptos.'}
                                </p>
                                <p class="collapsable">
                                  <i class="material-icons">book</i> Unidad 3 UX: ${filter[i].p3}${'%'}
                                </p>
                                <p class="collapsable-sub">
                                  <i class="material-icons">playlist_add_check</i> Score quiz 3: ${filter[i].quizU3}${'  ptos.'}
                                </p>
                              </div>
                          </li>
                        </ul>
                      </div>`;
  }
  resultFilter.innerHTML = studentsFilter;
  // ToolTip
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }, {passive: true});
  // Colapso de alumnas
  $(document).ready(function() {
    $('.collapsible').collapsible({
      accordion: true
    });
  });
};

// DECLARACION DE LA FUNCION QUE SE EJECUTARÁ CON LOS EVENTOS CLIK
const listeners = (data) => {
  // Evento que manda a ejecutar e imprimir la funcion de sedes
  let getVenue = document.getElementById('goVenues');

  getVenue.addEventListener('click', (event) => {
    document.getElementById('searchingCard').style.display = 'none';
    document.getElementById('findingCard').style.display = 'none';
    printSedesAll(data);
  }, {passive: true});

  // Evento que manda a ejecutar e imprimir la funcion de generaciones
  let getGeneration = document.getElementById('goGeneretions');

  getGeneration.addEventListener('click', (event) => {
    document.getElementById('searchingCard').style.display = 'none';
    document.getElementById('findingCard').style.display = 'none';
    const generation = computeGenerationsStats(data);
    printGenerations(generation);
  }, {passive: true});

  let getStudents = document.getElementById('goStudents');

  getStudents.addEventListener('click', (event) => {
    document.getElementById('searchingCard').style.display = 'none';
    document.getElementById('findingCard').style.display = 'none';
    studentsPrint(data);
  }, {passive: true});

  // Evento que manda a ejecutar e imprimir la funcion de filtrado
  let getFilter = document.getElementById('goFilter');

  getFilter.addEventListener('click', (event) => {
    document.getElementById('searchingCard').style.display = 'none';
    document.getElementById('findingCard').style.display = 'block';
    const students = studentsModal(data);
    const filter = filterStudents(students, 'Iseult Ysolt');
    printFilter(filter);
    autocomplete({
      input: document.getElementById('findName'),
      fetch: function(text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = students.filter(std => std.name.toLowerCase().startsWith(text));
        update(suggestions);
      },
      onSelect: function(item) {
        console.log(item.name); 
        const filter = filterStudents(students, item.name);
        printFilter(filter);
      }
    });
  }, {passive: true});

  // Evento que manda a ejecutar e imprimir la funcion de ordenamiento
  let getSort = document.getElementById('goSort');

  getSort.addEventListener('click', (event) => {
    const students = studentsModal(data);
    document.getElementById('searchingCard').style.display = 'block';
    document.getElementById('findingCard').style.display = 'none';
    const orderBy = 'percentage'; 
    const orderDirection = 'DESC';
    const sort = sortStudents(students, orderBy, orderDirection);
    printSort(sort);
  });

  let orderByListener = document.getElementById('orderBy');

  orderByListener.addEventListener('change', function(event) {
    document.getElementById('searchingCard').style.display = 'block';
    const studenty = studentsModal(data);
    const orderBySelected = this.options[orderByListener.selectedIndex];
    const orderByValue = orderBySelected.value;
    // ----
    
    let orderInListener = document.getElementById('orderIn');

    orderInListener.addEventListener('change', function(event) {
      const orderInSelected = this.options[orderInListener.selectedIndex];
      const orderInValue = orderInSelected.value;
      const sortBy = sortStudents(studenty, orderByValue, orderInValue);
      printSort(sortBy);
    });
  });
};
// Función global window onload para cargar y ejecutar el Fetch a refrescar la pagina
window.onload = () => {
  fetch(laboratoria)
    .then(data => data.json())
    .then((data) => {
      // printSedesAll imprime la primer vista de la pagina con cards de informaciónde las sedes
      printSedesAll(data);
      // Ejecuta los eventos cuando se ejecuta una interacción con espacio en DOM
      listeners(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
