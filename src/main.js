
//url para obtener el json
let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//crear let para poder pintar datos
let showSedes= document.querySelector("#generaciones");
// a través del boton iniciar funcion
sed.addEventListener("click", function(){
  sede(); 
})



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







