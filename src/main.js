let sede = document.getElementById('buttons-campus');
let gen = document.getElementById('buttons-generations');
let contentGeneration = document.getElementById('content-generation');
let students = document.getElementById('students');
let student = document.getElementById('student');
let progress = document.getElementById('progress');
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

        
        
        
        
        
      

        
        
        
        
        
        
        div.addEventListener('click', () => dentroGen(laboratoria, selectSede));
      });
    }
  }
};
const dentroGen = (laboratoria, selectSede) => {
  students.style.display = 'block';
  gen.style.display = 'none';
  const sedeActual = selectSede;
  const selectGeneration = event.target.id;
  const containerAverage = document.getElementById('container-average');
  const containerCount = document.getElementById('container-count');
  const containerClassifiedStudents = document.getElementById('container-classified-students');
  const students1 = laboratoria[sedeActual].generacion[selectGeneration].estudiantes;
  const generation1 = element;
  console.log(generation1);
  let status;
  for (student in students1) {
    let nameStudent = students1[student].nombre;
    let completedPercentage1 = students1[student].progreso.porcentajeCompletado;
    if (completedPercentage1 < 60) {
      status = 'Alumna por debajo del 60';
    } else if (completedPercentage1 >= 90) {
      status = 'Alumna por arriba o igual a 90';
    } else {
      status = 'Alumna dentro de la media';
    }

  
    const div = document.createElement('div');
    const aStudent = document.createElement('a');
    div.classList.add('col-4');
    div.appendChild(aStudent);
    containerClassifiedStudents.appendChild(div);
           
    // pintando average, count, estudiantes 
    containerClassifiedStudents.innerHTML += ` Estudiante: ${nameStudent} Porcentaje: ${completedPercentage1}% Status: ${status}`;
    // containerAverage.innerHTML = `Porcentaje de completitud general en la plataforma LMS: ${average1} %`;
    // containerCount.innerHTML = `Número de alumnas: ${count1}`;
  }
};
  // console.log(students1);
  // for (key in laboratoria) {
  //   sede = key; // Está me arroja las llaves del objeto JSON (lima, mexico, santiago)
  //   // console.log(sede);
  //   generation1 = Object.keys(laboratoria[sede].generacion); // Indico que quiero entrar a generación. Object.keys convierte a array mi objeto y marco la ruta a generaciones. Siempre indico la ruta antes de iterar.
  //   generation1.forEach(element => { // generation1 es mi arreglo a iterar. forEach me regresa los elementos de ese array.
  //     let average2 = 0;
  //     generation1 = element; // generation1 es igual a elements porque son las propiedades específicas (cuarta, quinta, tercera).
  //     // if (generation1 === selectGeneration) {
  // const students = laboratoria[sedeActual].generacion[selectGeneration].estudiantes;
  // console.log(students);
  // for (student in students1) {
  // if (generation1 === selectGeneration) {
  // PROMEDIO DE LA GENERACIÓN Y NUMERO DE ALUMNAS
  // average2 += students[student].progreso.porcentajeCompletado; // Llegando al porcentajeCompletado (un número) se estará sumando.
  // average1 = Math.round(average2 / students.length); // Saca promedio y redondea la cifra.
  // count1 = students.length;
  // NOMBRE, CORREO Y PORCENTAJE POR ALUMNA
   
  // emailStudent = students1[student].correo;
  // completedPercentage1 = students1[student].progreso.porcentajeCompletado; // Trazamos la ruta hacia porcentajeCompletado y creamos condiacionales para identificar el status de cada estudiante.
  // if (completedPercentage1 < 60) {
  //   status = 'Alumna por debajo del 60';
  // } else if (completedPercentage1 >= 90) {
  //   status = 'Alumna por arriba o igual a 90';
  // } else {
  //   status = 'Alumna dentro de la media';
  // }

  // CREANDO PARRAFO DE PROMEDIO DE LA GENERACION
//   const parr = document.createElement('p');
//   parr.classList.add('col-4');
//   containerAverage.appendChild(parr);
//   // CREANDO PARRAFO DE NUMERO DE ALUMNAS
//   const pElement = document.createElement('p');
//   pElement.classList.add('col-4');
//   containerCount.appendChild(pElement);
//   // CREAR PARRAFO PARA CREAR ESTUDIANTES
//   const div = document.createElement('div');
//   const aStudent = document.createElement('a');
//   div.classList.add('col-4');
//   div.appendChild(aStudent);
//   containerClassifiedStudents.appendChild(div);
         
//   // pintando average, count, estudiantes 
//   containerClassifiedStudents.innerHTML += ` Estudiante: ${nameStudent} Porcentaje: ${completedPercentage1}% Status: ${status}`;
//   containerAverage.innerHTML = `Porcentaje de completitud general en la plataforma LMS: ${average1} %`;
//   containerCount.innerHTML = `Número de alumnas: ${count1}`;

//       })
//     }
//   }
// };

