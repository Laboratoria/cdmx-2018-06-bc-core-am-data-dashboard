window.datadashboard = {


computeStudentsStats: (laboratoria) => {

fetch(`https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`)

.then(respuesta => respuesta.json())
.then (data=> {



console.log(data)
Estu(data)

})

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


}

}
