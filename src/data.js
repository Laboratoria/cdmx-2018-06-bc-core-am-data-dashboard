window.computeStudentsStats = () =>{

};
window.computeGenerationsStats = () =>{

};
window.sortStudents = () => {

};
window.filterStudents = () => {

};

window.computeStudentsStats = () =>{

};
window.computeGenerationsStats = () =>{

};
window.sortStudents = () => {

};
window.filterStudents = () => {

};

//url para obtener el json
let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

//pintar datos en menu
let sede = function(){
    //ingresar la url
  fetch(url).then(function(datos){
    //decir q datos es un .json
  return datos.json();
  }).then(function(data){
    //sedes se pinten en el munu a traves del getElementById
    document.getElementById('lima').innerHTML = Object.keys(data)[0];
    document.getElementById('mexico').innerHTML = Object.keys(data)[1];
    document.getElementById('santiago').innerHTML = Object.keys(data)[2];
    //pintando generaciones
 	generacionLima(Object.keys(data.lima.generacion));
    generacionMexico(Object.keys(data.mexico.generacion));
    generacionSantiago(Object.keys(data.santiago.generacion));
    })
  
}



let alumnas = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  //OBTENER NOMBRE
  console.log(data.lima.generacion.cuarta.estudiantes[0].nombre);
  let nombreLima = data.lima.generacion.cuarta.estudiantes[0].nombre;
  nombre.innerHTML = nombreLima;
  /*console.log(data.lima.generacion.cuarta.estudiantes.nombre);
  let nombreLima = data.lima.generacion.cuarta.estudiantes.nombre;
  console.log(Object.keys(nombreLima));
  let allnombres = Object.keys(nombreLima);
  console.log(allnombres[0]);
  for(let i = 0; i<allnombres.length; i++) {
    nombre.innerHTML+= "<div>" + allnombres[i] + "</div>";
  }*/
  //OBTENER CORREO
  console.log(data.lima.generacion.cuarta.estudiantes[0].correo);
   let correoLima = data.lima.generacion.cuarta.estudiantes[0].correo;
    correo.innerHTML = correoLima;

    })
}
  