/*Código que tenga que ver con  funciones que  obtienen y manipulan los datos*/
const url = `https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`;
fetch(url)
.then(respuesta => respuesta.json())
.then (respuesta => {


console.log(respuesta)
 })
