
//url para obtener el json
//let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//crear let para poder pintar datos
let showGeneraciones= document.querySelector("#sedes");
let showSedes= document.querySelector("#generaciones");
let showAlumnas= document.querySelector("#alumnas");
let nombre= document.querySelector("#nombre");
let correo = document.querySelector("#correo");
// a través del boton iniciar funcion

//SEDES
/*check1.addEventListener("click", function(){
  sede(); 
})*/
//GENERACIONES
/*sed.addEventListener("click", function(){
  generacion(); 
})*/

//ALUMNAS

/*alumnasA.addEventListener("click", function(){
  alumnas(); 
})*/

//GENERACIONES LIMA
const generacionLima = (allGeneraciones) => {
  //id donde se creara un hijo para despues pintarlo
  const generaciones = document.getElementById('generacionesLima');
  allGeneraciones.forEach((generacion) => {
  //se crea el label donde se pintara el hijo creado
  const newLabel = document.createElement('label');
  newLabel.innerHTML = generacion + ' generación';
  generaciones.appendChild(newLabel);
});
}

//GENERACIONES MEXICO
const generacionMexico = (allGeneraciones) => {
  //id donde se creara un hijo para despues pintarlo
  const generaciones = document.getElementById('generacionMexico');
  allGeneraciones.forEach((generacion) => {
  //se crea el label donde se pintara el hijo creado
  const newLabel = document.createElement('label');
  newLabel.innerHTML = generacion + ' generación';
  generaciones.appendChild(newLabel);
});
}

//GENERACIONES SANTIAGO
const generacionSantiago = (allGeneraciones) => {
  //id donde se creara un hijo para despues pintarlo
  const generaciones = document.getElementById('generacionSantiago');
  allGeneraciones.forEach((generacion) => {
  //se crea el label donde se pintara el hijo creado
  const newLabel = document.createElement('label');
  newLabel.innerHTML = generacion + ' generación';
  generaciones.appendChild(newLabel);
});
}

const container = document.getElementById('resultadosAlumnas');


renderInfo = (data) => {
  document.getElementById("alumnas").addEventListener("click", (event) => {
    //RESULTADOS
    let result = "";
    //SEDES
    console.log(Object.values(data))
    let name = "";
    console.log(Object.values(data.lima.generacion.cuarta.estudiantes))
    let estudianteLima = data.lima.generacion.cuarta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    console.log(progresos)   
    result += `<div class="card">
                            <div class="info">
                                <p>Nombre: ${alumna.nombre}</p>
                                <p>Correo: ${alumna.correo}</p>
                                <p>Duración de Programa: ${progresos.duracionPrograma}</p>
                                <p>Porsentaje Completado: ${progresos.porcentajeCompletado}</p>
                            </div>
                        </div>`
  };
 
   
  container.innerHTML = result;

  })
}








/*let generacion = function(){
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
}*/



  /*console.log(Object.keys(sedeLimaGeneracion));
  let generacionesLimaAlumanas = Object.keys(sedeLimaGeneracion);
  console.log(generacionesLimaAlumanas[0]);
  for(let i = 0; i<generacionesLimaAlumanas.length; i++) {
        showAlumnas.innerHTML+= "<div>" + generacionesLimaAlumanas[i] + "</div>";
    }*/

  





