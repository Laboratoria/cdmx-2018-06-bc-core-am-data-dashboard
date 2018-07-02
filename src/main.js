//url para obtener el json
let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//crear let para poder pintar datos
let showGeneraciones= document.querySelector("#sedes");
let showSedes= document.querySelector("#generaciones");
let showAlumnas= document.querySelector("#alumnas");
let nombre= document.querySelector("#nombre");
let correo = document.querySelector("#correo");
// a través del boton iniciar funcion

//SEDES
sedesAll.addEventListener("click", function(){
  sede(); 
})
//GENERACIONES
sed.addEventListener("click", function(){
  generacion(); 
})

//ALUMNAS

alumnasA.addEventListener("click", function(){
  alumnas(); 
})

let sede = function () {
  fetch(url).then(function (datos) {
    return datos.json();
  }).then(function (data) {
    console.log(data);
    let sedes = data;
    console.log(Object.keys(sedes));
    let allSedes = Object.keys(sedes);
    console.log(allSedes[0]);
    for (let i = 0; i < allSedes.length; i++) {
      showSedes.innerHTML += "<div>" + allSedes[i] + "</div>";
    }

let sede = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data);
  let sedes= data;
  console.log(Object.keys(sedes));
  let allSedes = Object.keys(sedes);
  console.log(allSedes[0]);
  for(let i = 0; i<allSedes.length; i++) {
        showSedes.innerHTML+= "<div>" + allSedes[i] + "</div>";
    }

  })
}


let generacion = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data.lima);
  let sedeLima= data.lima.generacion;
  console.log(Object.keys(sedeLima));
  let sedesLima = Object.keys(sedeLima);
  console.log(sedesLima[0]);
  for(let i = 0; i<sedesLima.length; i++) {
        showSedes.innerHTML+= "<div>" + sedesLima[i] + "</div>";
    }

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
  
  /*console.log(Object.keys(sedeLimaGeneracion));
  let generacionesLimaAlumanas = Object.keys(sedeLimaGeneracion);
  console.log(generacionesLimaAlumanas[0]);
  for(let i = 0; i<generacionesLimaAlumanas.length; i++) {
        showAlumnas.innerHTML+= "<div>" + generacionesLimaAlumanas[i] + "</div>";
    }*/

  })
}
