let sede = document.getElementById('buttons-campus'); // Llamamos los id's del archivo html para manipularlos con javascript (aparecer y desaparecer elementos).
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
    const seccion = document.createElement('seccion'); // Creamos elementos anidados donde containerButtonsCampus es el padre y se encuentra en el archivo html.
    seccion.className = 'container';
    const divRow = document.createElement('div');
    divRow.className = 'row';
    const divCol = document.createElement('div');
    divCol.className = 'col-4';
    const aElement = document.createElement('a');
    aElement.id = key;
    aElement.innerHTML = key.toUpperCase(); // Imprimimos la variable 'key' en nuestro elemento 'a' vinculando la data con los botones dinámicos.
    seccion.appendChild(aElement);
    containerButtonsCampus.appendChild(seccion);

    seccion.addEventListener('click', () => generations(laboratoria)); // Seccion escucha el 'click' para detonar la función generations (laboratoria).
  }
};

const generations = (laboratoria) => {
  gen.style.display = 'block';
  sede.style.display = 'none';
  const selectSede = event.target.id; // el evento (click en sede) específico que está detonando arriba esta función 
  const containerButtonsGenerations = document.getElementById('container-buttons-generations');
  for (key in laboratoria) {
    if (key === selectSede) {
      generation1 = Object.keys(laboratoria[key].generacion); 
      generation1.forEach(elements => { 
        generation1 = elements; 

        const seccion = document.createElement('section');
        seccion.className = 'container';
        const divRow = document.createElement('div');
        divRow.className = 'row';
        const divCol = document.createElement('div');
        divCol.className = 'col-4';
        const aElement = document.createElement('a');
        aElement.id = generation1;
        aElement.innerHTML = generation1.toUpperCase();
        seccion.appendChild(aElement);
        containerButtonsGenerations.appendChild(seccion);

        seccion.addEventListener('click', () => dentroGen(laboratoria, selectSede)); // Pasamos la variable 'selecSede' como parámetro, para reutilizarla en nuestra siguiente función.
      });
    }
  }
};
const dentroGen = (laboratoria, selectSede) => { // 'dentoGen' significa dentro de la generación seleccionada.
  countAverageContainer.style.display = 'block';
  gen.style.display = 'none';

  const sedeActual = selectSede;
  const selectGeneration = event.target.id; // En esta variable, especificamos que el evento anterior, sed etona si el id = 'generation1'
  const countAverage = document.getElementById('count-average');
  const containerClassifiedStudents = document.getElementById('container-classified-students');
  const containerClassifiedStudents1 = document.getElementById('container-classified-students1');
  const containerClassifiedStudents2 = document.getElementById('container-classified-students2');
  generation1 = Object.keys(laboratoria[sedeActual].generacion); 
  generation1.forEach(element => { 
    let average2 = 0; // Esta variable indica que antes de cada iteración, la suma de averga2 vuelva a valer 0.
    generation1 = element; // generation1 es igual a element porque son las propiedades específicas (cuarta, quinta, tercera).
    if (generation1 === selectGeneration) {
      const students1 = laboratoria[sedeActual].generacion[selectGeneration].estudiantes;
      count1 = students1.length;
      for (student in students1) {
        average2 += students1[student].progreso.porcentajeCompletado; // Llegando al porcentajeCompletado (un número) se estará sumando.
        average1 = Math.round(average2 / students1.length); 
        let nameStudent = students1[student].nombre;
        let turn = students1[student].turno;
        let emailStudent = students1[student].correo;
        let completedPercentage1 = students1[student].progreso.porcentajeCompletado;
        

        if (completedPercentage1 < 60) { // Creamos una condicional para segmentar a las estudiantes por status de su porcentaje completado y su vez imprimimos en el DOM.
          status = completedPercentage1;
          const div = document.createElement('div');
          const pStudent = document.createElement('p');
          pStudent.className = 'parragraph row';
          div.appendChild(pStudent);
          containerClassifiedStudents.appendChild(div);
          pStudent.innerHTML = `${nameStudent} Porcentaje completado en el LMS: ${status} %  Turno: ${turn} Correo: ${emailStudent}`;
        } else if (completedPercentage1 >= 90) {
          status = completedPercentage1;
          const div = document.createElement('div');
          const aStudent = document.createElement('p');
          aStudent.className = 'parragraph1 row';
          div.appendChild(aStudent);
          containerClassifiedStudents1.appendChild(div);
          aStudent.innerHTML = `${nameStudent} Porcentaje completado en el LMS: ${status} %  Turno: ${turn} Correo: ${emailStudent}`;
        } else {
          status = completedPercentage1;
          const div = document.createElement('div');
          const aStudent = document.createElement('p');
          aStudent.className = 'parragraph2 row';
          div.appendChild(aStudent);
          containerClassifiedStudents2.appendChild(div);
          aStudent.innerHTML = `${nameStudent} Porcentaje completado en el LMS: ${status} %  Turno: ${turn} Correo: ${emailStudent}`;
        }
      }
      // PROMEDIO DE LA GENERACIÓN Y NUMERO DE ALUMNAS
      const seccion = document.createElement('section'); // Creamos y pintamos en el DOM las cajas donde indicamos el promedio de la generación y el número de alumnas activas.
      seccion.className = 'container';
      const divRow = document.createElement('div');
      divRow.className = 'row';
      const mainCountContainer = document.createElement('main');
      const divMain = document.createElement('div');
      divMain.className = 'col-6';
      mainCountContainer.id = count1;
      mainCountContainer.innerHTML = `Número de alumnas activas: <strong>${count1}<strong>`;
      const mainAverageContainer = document.createElement('main');
      const divMainAv = document.createElement('div');
      divMainAv.className = 'col-6';
      mainAverageContainer.id = average1;
      mainAverageContainer.innerHTML = `Porcentaje de completitud general del LMS: <strong>${average1}%<strong>`;

      seccion.appendChild(mainAverageContainer); // seccion es padre de mainAverageContainer.
      divRow.appendChild(mainCountContainer); // divRow es padre de mainCountContainer.
      divRow.appendChild(mainAverageContainer); // divRow es padre de mainAverageContainer
      seccion.appendChild(divRow); // seccion es padre de divRow
      countAverage.appendChild(seccion); // countAverage vive en el archivo html y es padre de seccion (linea 146).
    }
  });
};
