/* funcion enla cual guardamos el valor de fetch*/
window.getData = () => {
    fetch(`https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`)
    .then( response => response.json() )
    .then((res) => {

renderInfo(res)
//const limaData=computeStudentsStats(resdata);

//const mexData=computeGenerationsStats(resdata);
//console.log(limaData)


    })
    .catch((error) => {

    });
}

getData();



window.computeStudentsStats = (laboratoria,genera,sede) => {
let generac =genera;
let sedelima= sede;
console.log(sedelima)
  let resultado ="";
  let estudiante = laboratoria[sede].generacion[genera].estudiantes;


  for (let i = 0; i < estudiante.length; i++) {
  let nombre_tercera=estudiante[i];

  let progreso =nombre_tercera.progreso;

  resultado+=  `

  <div class="form-group">

      <label for="exampleFormControlSelect2"></label>

      <select multiple class="form-control" id="exampleFormControlSelect2">

        <option>Nombre: ${nombre_tercera.nombre}</option>
        <option>Correo: ${nombre_tercera.correo}</option>
        <option>Sede: ${sedelima}</option>
        <option>Generacion:${generac}</option>

        <option>Progreso</option>
        <option>Duracion Programa: ${progreso.duracionPrograma}</option>
        <option>Porcentaje Completado: ${progreso.porcentajeCompletado}</option>
      </select>
  </div>

`
}
pintar_estudiantes.innerHTML = resultado;

  };

  window.computeGenerationsStats = (laboratoria) => {

    };



window.sortStudents = (laboratoria) => {


};


window.filterStudents = (laboratoria) => {


};







/*window.getdata = {


fetch(`https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`)

.then(respuesta => respuesta.json())
.then (data=> {



console.log(data)
Estu(data)

})
}*/

/*
computeStudentsStats: (laboratoria) => {
}
const Estu = (data) => {
let resultado ="";
let estudiante = data.lima.generacion.tercera.estudiantes;

for (let i = 0; i < estudiante.length; i++) {

let nombre_tercera=estudiante[i];
let progreso =nombre_tercera.progreso;
console.log(progreso.temas)

resultado+=  `

<div class="form-group">

    <label for="exampleFormControlSelect2"></label>

    <select multiple class="form-control" id="exampleFormControlSelect2">

      <option>Nombre: ${nombre_tercera.nombre}</option>
      <option>Correo: ${nombre_tercera.correo}</option>
      <option>Progreso</option>
      <option>Duracion Programa: ${progreso.duracionPrograma}</option>
      <option>Porcentaje Completado: ${progreso.porcentajeCompletado}</option>
    </select>
</div>

`


}
laboratoria.innerHTML = resultado;
return(resultado)
}


}*/
