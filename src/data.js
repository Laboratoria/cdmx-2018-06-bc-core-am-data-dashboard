// Se llama al id de los botones de las sedes.
let btnSedes = document.getElementsByClassName('dropdown-menu');
// console.log(btnSedes[0]);
// Se crea el obejto global.
window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fech.
  getData: (laboratoria) => {
    const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        // Se guarda el valor de la data en una función.
        estudiante(data);
      });
  }
};
// Función que contiene la data.
const estudiante = (data)=> {
// Se declaran las valriables que guardaran los datos obtenidos.
  let arrayEvento;
  let arrayEstudiantes;
  let result = '';
  let array2 = [];
  let finalArray = [];
  let temas = '';

  for (let i = 0; i < btnSedes.length; i++) {
    btnSedes[i].addEventListener('click', event => {
      result = ' ';
      document.getElementById('pintar').innerText = result;
      arrayEvento = event.target.id.split('-');
      // console.log(arrayEvento[0], arrayEvento[1]);
      // console.log(data[arrayEvento[0]].generacion[arrayEvento[1]].estudiantes);
      arrayEstudiantes = data[arrayEvento[0]].generacion[arrayEvento[1]].estudiantes;
      for (let i = 0; i < arrayEstudiantes.length; i++) {
        let nombres = arrayEstudiantes[i];
        const progreso = arrayEstudiantes[i].progreso.temas;
        let porcentajeCompletado = nombres.progreso.porcentajeCompletado;
        // console.log(progreso);
        // console.log(arrayEstudiantes[i].progreso.temas);
        // console.log(arrayEstudiantes[i].progreso.temas);

        // En esta variable se esta guardando lo que se va imprimir
        result = result + `
            <th scope="col">${nombres.nombre}</th>
            <th scope="col"> ${nombres.correo}</th>
            <th scope="col"> ${nombres.turno}</th>
            <th scope="col"> ${porcentajeCompletado}%</th>
            </tr>
                `;
        // console.log(result);
        for (key in progreso) {
          temas = key;
          let porcentajeCompletado2 = progreso[key].porcentajeCompletado;
          // console.log(porcentajeCompletado2);
          const subtema = Object.keys(progreso[key].subtemas);
          // console.log(temas, subtema);
          let porcentajeCompletado3 = progreso[key].subtemasCompletados;
          // console.log(porcentajeCompletado3);
        }
      }
      document.getElementById('pintar').innerHTML = result;
      document.getElementById('tabla').style.display = 'initial';
    });
  }
};
