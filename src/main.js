let sede = document.getElementById('buttons-campus');
let gen = document.getElementById('buttons-generations');
let contentGeneration = document.getElementById('content-generation');
let students1 = document.getElementById('students1');
let ingresar = document.getElementById('ingresar');
let inputName = document.getElementById('input-name');
let password = document.getElementById('input-password');
let form = document.getElementById('form');
let accessMexico = document.getElementById('mexico');
let accesLima = document.getElementById('lima');
let accessSantiago = document.getElementById('santiago');


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
    const div = document.createElement('div');
    const aElement = document.createElement('a');
    // div.classList.add('col-4');
    aElement.id = key;
    aElement.innerHTML = key.toUpperCase();
    div.appendChild(aElement);
    containerButtonsCampus.appendChild(div);

    div.addEventListener('click', () => generations(laboratoria));
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

        const div = document.createElement('div');
        const aElement = document.createElement('a');
        div.classList.add('col-4');
        aElement.id = generation1;
        aElement.innerHTML = generation1;
        div.appendChild(aElement);
        containerButtonsGenerations.appendChild(div);

        div.addEventListener('click', () => dentroGen(laboratoria));
      });
    }
  }
};

const dentroGen = (laboratoria) => {
  students1.style.display = 'block';
  gen.style.display = 'none';
  const selectGeneration = event.target.id;
  const containerAverage = document.getElementById('container-average');
  const containerCount = document.getElementById('container-count');
  for (key in laboratoria) {
    sede = key; // Está me arroja las llaves del objeto JSON (lima, mexico, santiago)
    generation1 = Object.keys(laboratoria[sede].generacion); // Indico que quiero entrar a generación. Object.keys convierte a array mi objeto y marco la ruta a generaciones. Siempre indico la ruta antes de iterar.
    generation1.forEach(elements => { // generation1 es mi arreglo a iterar. forEach me regresa los elementos de ese array.
      let average2 = 0;
      generation1 = elements; // generation1 es igual a elements porque son las propiedades específicas (cuarta, quinta, tercera).
      if (generation1 === selectGeneration) {
        const students = laboratoria[sede].generacion[generation1].estudiantes;
        for (student in students) {
          average2 += students[student].progreso.porcentajeCompletado; // Llegando al porcentajeCompletado (un número) se estará sumando.
          average1 = Math.round(average2 / students.length); // Saca promedio y redondea la cifra.
          count1 = students.length;

          const parr = document.createElement('p');
          parr.classList.add('col-4');
          containerAverage.appendChild(parr);

          const pElement = document.createElement('p');
          pElement.classList.add('col-4');
          containerCount.appendChild(pElement);

          containerAverage.innerHTML = `Porcentaje de completitud general en la plataforma LMS: ${average1} %`;
          containerCount.innerHTML = `Número de alumnas: ${count1}`;
        }
      }
    });
  }
};

const drawClassifiedStudents = (laboratoria) => {
  for (key in laboratoria) {
    const containerClassifiedStudents = document.getElementById('container-classified-students');
    campus = key;
    generation1 = Object.keys(laboratoria[campus].generacion);
    generation1.forEach(elements => {
      generation1 = elements;
      const students = laboratoria[campus].generacion[generation1].estudiantes; // Nos situamos a partir de las estudiantes.
      for (laboStudent in students) { // Iteramos students para acceder al nombre y correo.
        nameStudent = students[laboStudent].nombre;
        emailStudent = students[laboStudent].correo;
        completedPercentage1 = students[laboStudent].progreso.porcentajeCompletado; // Trazamos la ruta hacia porcentajeCompletado y creamos condiacionales para identificar el status de cada estudiante.
        if (completedPercentage1 < 60) {
          let status = 'Alumna por debajo del 60';
        } else if (completedPercentage1 >= 90) {
          status = 'Alumna por arriba o igual a 90';
        } else {
          status = 'Alumna dentro de la media';
        }

        const parr = document.createElement('p');
        parr.classList.add('col-4');
        containerClassifiedStudents.appendChild(parr);

        containerClassifiedStudents.innerHTML = `Estudiantes: ${nameStudent} Status: ${status}`;
      }
    });
  }
};


// Botones de ingreso a generaciones
// accessMexico.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accesLima.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accessSantiago.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });
