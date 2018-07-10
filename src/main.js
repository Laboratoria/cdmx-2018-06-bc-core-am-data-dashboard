let sede = document.getElementById('buttons-campus');
let gen = document.getElementById('buttons-generations');
let students = document.getElementById('students');
let ingresar = document.getElementById('ingresar');
let inputName = document.getElementById('input-name');
let password = document.getElementById('input-password');
let form = document.getElementById('form');
let countAverageContainer = document.getElementById('content-count-average');


sede.style.display = 'none';
gen.style.display = 'none';

// Botones de login
ingresar.addEventListener('click', obtenerDatos = () => {
  let usuario1 = inputName.value;
  let password1 = password.value;

  if (usuario1 === 'lucile' && password1 === '123') {
    sede.style.display = 'block';
    form.style.display = 'none';
  } else {
    alert('Usuario no identificado');
  }
});

// Función para pintar sedes en el DOM
const sedes = (laboratoria) => {
  const containerButtonsCampus = document.getElementById('container-buttons-campus');
  for (key in laboratoria) {
    const seccion = document.createElement('seccion');
    seccion.classList.add('container');
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    const divCol = document.createElement('div');
    divCol.classList.add('col-4');
    const aElement = document.createElement('a');
    aElement.id = key;
    aElement.innerHTML = key.toUpperCase();
    seccion.appendChild(aElement);
    containerButtonsCampus.appendChild(seccion);

    seccion.addEventListener('click', () => generations(laboratoria));
  }
};

const generations = (laboratoria) => {
  gen.style.display = 'block';
  sede.style.display = 'none';
  const selectSede = event.target.id; // el evento (click en sede ) específico que está detonando arriba esta función 
  // console.log(selectSede);
  const containerButtonsGenerations = document.getElementById('container-buttons-generations');
  for (key in laboratoria) {
    if (key === selectSede) {
      generation1 = Object.keys(laboratoria[key].generacion); // Indico que quiero entrar a generación. Object.keys convierte a array mi objeto y marco la ruta a generaciones. Siempre indico la ruta antes de iterar.
      generation1.forEach(elements => { // generation1 es mi arreglo a iterar. forEach me regresa los elementos de ese array.
        generation1 = elements; // generation1 es igual a elements porque son las propiedades específicas (cuarta, quinta, tercera).

        const seccion = document.createElement('section');
        seccion.classList.add('container');
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        const divCol = document.createElement('div');
        divCol.classList.add('col-4');
        const aElement = document.createElement('a');
        aElement.id = generation1;
        aElement.innerHTML = generation1.toUpperCase();
        seccion.appendChild(aElement);
        containerButtonsGenerations.appendChild(seccion);

        seccion.addEventListener('click', () => dentroGen(laboratoria, selectSede));
      });
    }
  }
};
const dentroGen = (laboratoria, selectSede) => {
  countAverageContainer.style.display = 'block';
  // students.style.display = 'block';
  gen.style.display = 'none';
  const sedeActual = selectSede;
  const selectGeneration = event.target.id;
  const countAverage = document.getElementById('count-average');
  const containerClassifiedStudents = document.getElementById('container-classified-students');
  generation1 = Object.keys(laboratoria[sedeActual].generacion); // Indico que quiero entrar a generación. Object.keys convierte a array mi objeto y marco la ruta a generaciones. Siempre indico la ruta antes de iterar.
  generation1.forEach(element => { // generation1 es mi arreglo a iterar. forEach me regresa los elementos de ese array.
    let average2 = 0;
    generation1 = element; // generation1 es igual a elements porque son las propiedades específicas (cuarta, quinta, tercera).
    if (generation1 === selectGeneration) {
      const students1 = laboratoria[sedeActual].generacion[selectGeneration].estudiantes;
      count1 = students1.length;
      console.log(count1);
      for (student in students1) {
        average2 += students1[student].progreso.porcentajeCompletado; // Llegando al porcentajeCompletado (un número) se estará sumando.
        average1 = Math.round(average2 / students1.length); // Saca promedio y redondea la cifra.
        let nameStudent = students1[student].nombre;
        let turn = students1[student].turno;
        let completedPercentage1 = students1[student].progreso.porcentajeCompletado;
        if (completedPercentage1 < 60) {
          status = 'Alumna por debajo del 60';
        } else if (completedPercentage1 >= 90) {
          status = 'Alumna por arriba o igual a 90';
        } else {
          status = 'Alumna dentro de la media';
        }

        // mainAverage.innerHTML = `Porcentaje de completitud general en la plataforma LMS: ${average1} %`;
        // mainCount.innerHTML = `Número de alumnas: ${count1}`;
        

        // CREANDO PARA ESTUDIANTES
        // const div = document.createElement('div');
        // const aStudent = document.createElement('a');
        // div.classList.add('col-4');
        // div.appendChild(aStudent);
        // containerClassifiedStudents.appendChild(div);

        // // pintando average, count, estudiantes 
        // containerClassifiedStudents.innerHTML += ` ESTUDIANTE: ${nameStudent} PORCENTAJE: ${completedPercentage1}% STATUS: ${status} TURNO: ${turn}`;
        // containerAverage.innerHTML = `Porcentaje de completitud general en la plataforma LMS: ${average1} %`;
        // containerCount.innerHTML = `Número de alumnas: ${count1}`;
      }
      
      // PROMEDIO DE LA GENERACIÓN Y NUMERO DE ALUMNAS
      const seccion = document.createElement('section');
      seccion.classList.add('container');
      const divRow = document.createElement('div');
      divRow.classList.add('row');
      const mainCountContainer = document.createElement('main');
      const divMain = document.createElement('div');
      divMain.classList.add('col-6');
      mainCountContainer.id = count1;
      mainCountContainer.innerHTML = `Número de alumnas activas: <strong>${count1}<strong>`;
      // seccion.appendChild(mainCountContainer);
      const mainAverageContainer = document.createElement('main');
      const divMainAv = document.createElement('div');
      divMainAv.classList.add('col-6');
      mainAverageContainer.id = average1;
      mainAverageContainer.innerHTML = `Porcentaje de completitud general del LMS: <strong>${average1}%<strong>`;
      seccion.appendChild(mainAverageContainer);
      divRow.appendChild(mainAverageContainer);
      divRow.appendChild(mainCountContainer);
      seccion.appendChild(divRow);
      countAverage.appendChild(seccion);
    }
  });
};
