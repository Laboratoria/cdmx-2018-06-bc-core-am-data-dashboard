
//window.dashBoard {

//llamar al botón de prueba
document.getElementById("Data").addEventListener("click", obtenerJson());

/* Declarar variables globales
let sede = document.getElementById("sede");
let generacion = document.getElementById("generación");
let nombre = document.getElementById("nombre"); */


// Llamar a la base de datos en objeto json
function obtenerJson() {
fetch("https://raw.githubusercontent.com/VaniushaR/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json") 
.then(datos => (datos.json())) 

.then (laboratoriaData => {
    //mostrar en consola  todos los datos de la base
console.log(laboratoriaData)
console.log(laboratoriaData.lima)
}) 
/*.then (sedeLima => (laboratoriaData.lima))
console.log(sedeLima)
}
/*.then ( 
    for (let sedes in sede) { 
        console.log(sedes)
    }
 )



/*}).then(function(sedes){
    console.log(sedes.lima[0]);
    let gen = sedes.lima[0].generacion.tercera;
    console.log(gen);
    let gen2 = sedes.lima[0].generacion.cuarta;
    console.log(gen2);
})
console.log(datos);
} /*
/*computeStudentsStats: (laboratoria) => {

};

computeGenerationsStats: (laboratoria) => {

};

sortStudents: (students, orderBy, orderDirection) => {

};

 La función sortStudents() se encarga de ordenar la lista de estudiantes creada con computeStudentsStats() 
en base a orderBy y orderDirection.

Argumentos

students: Arreglo de objetos creado con computeStudentsStats().
orderBy: String que indica el criterio de ordenado. Debe permitir ordenar por nombre y porcentaje de completitud.
orderDirection: La dirección en la que queremos ordenar. Posibles valores: ASC y DESC (ascendente y descendente).
Valor de retorno

Arreglo de estudiantes ordenado.

filterStudents: (students, search) => {
*/
