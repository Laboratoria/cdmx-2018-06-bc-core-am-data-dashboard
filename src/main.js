'use strict';

window.onload = () => {
  // console.log('hola');
  // accede al json
  fetch('data/laboratoria.json')
    .then(response => response.json())
    .then(laboratoria => {
      const url = location.pathname;
      // se compara el indexOf y si contiene el 'string' lo reemplaza ''
      if (url.indexOf('sedes') >= 0) {
        getSedes(laboratoria);
      } else if (url.indexOf('generaciones') >= 0) {
        const sede = window.location.search.replace('?sede=', '');
        getGenerations(laboratoria, sede);
      } else if (url.indexOf('alumnas') >= 0) {
        const parametros = window.location.search.replace('?sede=', '').replace('generation=', '').split('&');
        const sede = parametros[0];
        const generacion = parametros[1];
        getAlumnas(laboratoria, sede, generacion)
        // console.log(parametros[0], parametros[1]);
      }


      // console.log(data.lima.generacion.cuarta.estudiantes)
      // computeStudentsStats(laboratoria)
    });
};
