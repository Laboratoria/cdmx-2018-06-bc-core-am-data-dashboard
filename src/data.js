
let clicking = function(){
fetch(datos). /*then(function(enlace){
return datos.json();
}).*/ then(function(sedes){
    console.log(sedes.lima.generacion.tercera);
    let gen = sedes.lima.generacion.cuarta;
    console.log(gen);
    let gen2 = sedes.lima[0].generacion.tercera;
    console.log(gen2);
})
console.log(datos);
}
/*computeStudentsStats: (laboratoria) => {

};

computeGenerationsStats: (laboratoria) => {

};

sortStudents: (students, orderBy, orderDirection) => {

};

/* La función sortStudents() se encarga de ordenar la lista de estudiantes creada con computeStudentsStats() 
en base a orderBy y orderDirection.

Argumentos

students: Arreglo de objetos creado con computeStudentsStats().
orderBy: String que indica el criterio de ordenado. Debe permitir ordenar por nombre y porcentaje de completitud.
orderDirection: La dirección en la que queremos ordenar. Posibles valores: ASC y DESC (ascendente y descendente).
Valor de retorno

Arreglo de estudiantes ordenado.

filterStudents: (students, search) => {

}; */