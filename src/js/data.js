// best practice
'use strict';
// funcion que trae las sedes
window.getSedes = (laboratoria) => {
  //  objet.keys => arroja las llaves de un objeto
  const sedes = Object.keys(laboratoria);

  const sedesHTML = sedes.map(sede => (
    `<div class="alert alert-warning w-100 text-center" role="alert">
      Ir a <a href="/views/generaciones.html?sede=${sede}" class="alert-link">${sede.toUpperCase()}</a>.
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
      Ir a <a href="/views/alumnas.html?sede=${sede}&generation=${generation}" class="alert-link">${generation.toUpperCase()}</a>.
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

  const alumnasHTML = alumnas.map((alumna, indice) => (
    `<tr>
      <th scope="row">${indice + 1}</th>
      <td>${alumna.nombre.toUpperCase()}</td>
      <td>${alumna.correo}</td>
      <td>${alumna.progreso.porcentajeCompletado}%</td>
    </tr>`
  ));

  // Arreglo de 3 divs, que son las sedes
  // console.log(sedesHTML);

  document.getElementById('alumnas-container').innerHTML = alumnasHTML;
  // return sedes;
  return alumnas;
}

window.computeStudentsStats = (laboratoria) => {
  console.log(laboratoria, 1);
}

