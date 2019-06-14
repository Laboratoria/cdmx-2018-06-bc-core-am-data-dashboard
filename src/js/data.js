// best practice
'use strict';
// funcion que trae las sedes
window.getSedes = (laboratoria) => {
  //  objet.keys => arroja las llaves de un objeto
  const sedes = Object.keys(laboratoria);

  const sedesHTML = sedes.map(sede => (
    `<div class="alert alert-warning w-100 text-center" role="alert">
      Ir a <a href="./generaciones.html?sede=${sede}" class="alert-link">${sede.toUpperCase()}</a>.

    </div>`
  ));
  // Arreglo de div, que son las sedes
  // console.log(sedesHTML);

  document.getElementById('sedes-container').innerHTML = sedesHTML;
  return sedes;
}



// funcion que contiene las generaciones con 2 parametros
window.getGenerations = (laboratoria, sede) => {
  let generations = laboratoria[sede].generacion;
  generations = Object.keys(generations);
  // console.log(generations);

  const generationsHTML = generations.map(generation => (
    // templates donde se pintaran los datos
    `<div class="alert alert-warning w-100 text-center" role="alert">

      Ir a <a href="./alumnas.html?sede=${sede}&generation=${generation}" class="alert-link">${generation.toUpperCase()}</a>.

    </div>`
  ));


  // console.log(sedesHTML);
  document.getElementById('generations-container').innerHTML = generationsHTML;
  // return sedes;
  return generations;
}

window.getAlumnas = (laboratoria, sede, generation) => {
  let alumnas = laboratoria[sede].generacion[generation].estudiantes;
  // console.log(alumnas);
  const alumnasHTML = alumnas.map((alumna) => (

    `<tr>
      <th scope="row">${alumna.nombre.toUpperCase()}</th>
      <td>${alumna.correo}</td>
      <td>${alumna.progreso.porcentajeCompletado}%</td>
      <td>Estado General de la Alumna</td>
    </tr>`
  ));

  // Arreglo de 3 divs, que son las sedes
  // console.log(sedesHTML);

  document.getElementById('alumnas-container').innerHTML = alumnasHTML;
  // return sedes;
  return alumnas;
}

window.filterStudent = (student, search) => {
  let searchResult = [];
  student.forEach(element => {
    if (element.name.indexOf(search) !== -1) {
      searchResult.push(element);
    }
  });
  // console.log(element);
  return searchResult;
};

// Filtrar Sedes y generaciones
window.filterCampus = (student, search) => {
  let searchResult = [];
  student.forEach(element => {
    // console.log(element);
    if (element.campus === search) {
      searchResult.push(element);
    }
  });
  // console.log(element);
  return searchResult;
};

window.filterGeneration = (student, search) => {
  let searchResult = [];
  // console.log(student);
  student.forEach(element => {
    // console.log(search);
    if (element.generation === search) {
      searchResult.push(element);
    }
  });
  // console.log(searchResult);
  return searchResult;
};

window.filterStudents = (infoStudent, search) => {
  //   console.log(infoStudent);
  const busquedaResultado = infoStudent.filter(name => (infoStudent.name === search));
  return busquedaResultado;
};

window.computeStudentsStats = (laboratoria) => {
  // console.log(laboratoria, 1);
}

