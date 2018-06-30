
//url para obtener el json
let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//crear let para poder pintar datos
let showSedes= document.querySelector("#generaciones");
let showAlumnas= document.querySelector("#alumnas");
// a través del boton iniciar funcion

//SEDES
sedesAll.addEventListener("click", function(){
  generacion(); 
})
//GENERACIONES
sed.addEventListener("click", function(){
  sede(); 
})

//ALUMNAS

alumnasA.addEventListener("click", function(){
  alumnas(); 
})


let generacion = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data);
  let generaciones= data;
  console.log(Object.keys(generaciones));
  let generacionesLima = Object.keys(generaciones);
  console.log(generacionesLima[0]);
  for(let i = 0; i<generacionesLima.length; i++) {
        showSedes.innerHTML+= "<div>" + generacionesLima[i] + "</div>";
    }

  })
}


let sede = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data.lima);
  let sedeLima= data.lima.generacion;
  console.log(Object.keys(sedeLima));
  let generacionesLima = Object.keys(sedeLima);
  console.log(generacionesLima[0]);
  for(let i = 0; i<generacionesLima.length; i++) {
        showSedes.innerHTML+= "<div>" + generacionesLima[i] + "</div>";
    }

  })
}



let alumnas = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data.lima);
  let sedeLimaGeneracion= data.lima.generacion.cuarta.estudiantes;
  console.log(Object.keys(sedeLimaGeneracion));
  let generacionesLimaAlumanas = Object.keys(sedeLimaGeneracion);
  console.log(generacionesLimaAlumanas[0]);
  for(let i = 0; i<generacionesLimaAlumanas.length; i++) {
        showAlumnas.innerHTML+= "<div>" + generacionesLimaAlumanas[i] + "</div>";
    }

  })
}





