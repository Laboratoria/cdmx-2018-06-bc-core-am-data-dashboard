
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



//SEDES
const containerSedes = document.getElementById('resultadosSedes');
//GENERACIONES
const containerGeneraciones = document.getElementById('resultadosGeneracionesLima');
//ALUMNAS
const container = document.getElementById('resultadosAlumnas');
render = (data) => {
  //SEDES
  document.getElementById("sedes").addEventListener("click", (event) => {
    let resultSedes = "";
    console.log(data)
    let sedesAll = data;
    let sedesOne = Object.keys(sedesAll)
    console.log(Object.keys(sedesAll))
    for(let i = 0; i < sedesOne.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PARA PINTARLA DESPUES
    let sedes = sedesOne[i];
    //PINTAR A TRAVES DEL ID SEÑALADO EN HTML
    resultSedes += `<p>Sedes:${sedes}</p>`
    };
    containerSedes.innerHTML = resultSedes;

  })
  //GENERACIONES LIMA
  //LLAMAR ID DEL BOTON PARA Q CORRA LA FUNSION
  document.getElementById("generacionesLima").addEventListener("click", (event) => {
    //RESULTADOS
    let resultadosGeneracionesLima = "";
    let generacionesAll = Object.keys(data.lima.generacion);
    console.log(generacionesAll)
    for(let i = 0; i < generacionesAll.length; i++){
      let generacionesLima = generacionesAll[i];
      resultadosGeneracionesLima += `<p>${generacionesLima} generación</p>`
    };
    containerGeneraciones.innerHTML = resultadosGeneracionesLima;

  })
  //ALUMNAS
  document.getElementById("alumnas").addEventListener("click", (event) => {
    //RESULTADOS
    let result = "";
    //SE HACE UN FOR PARA RECORRERR TODAS LAS ALUMNAS
    console.log(Object.values(data))
    console.log(Object.values(data.lima.generacion.cuarta.estudiantes))
    let estudianteLima = data.lima.generacion.cuarta.estudiantes;
    for(let i = 0; i < estudianteLima.length; i++){
    //GUARDAR EL VALOR EN UNA VARIABLE PRA DESPUÉS PINTARLO
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



  

  





