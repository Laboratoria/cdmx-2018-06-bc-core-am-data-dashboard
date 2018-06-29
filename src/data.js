/*Código que tenga que ver con  funciones que  obtienen y manipulan los datos*/
window.datadashboard = {

computeStudentsStats: (laboratoria) => {
fetch(`https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`)
.then(respuesta => respuesta.json())
.then ( data=> {

tabla(data)
})


function tabla(data) {

let estudiante = data.lima.generacion.cuarta.estudiantes;
for (var i = 0; i < estudiante.length; i++) {
let nombre_tercera=  estudiante[i].nombre;
console.log(nombre_tercera);
laboratoria.innerHTML = (nombre_tercera);
}


}
}
}
