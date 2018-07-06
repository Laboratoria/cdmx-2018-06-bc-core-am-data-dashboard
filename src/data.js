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





window.onload = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderInfo(data);
  })
  .catch(error => {
      console.log('error');
  })
}


/*let alumnas = function(){
  fetch(url).then(function(datos){
  return datos.json();
  }).then(function(data){
  //OBTENER NOMBRE
  console.log(data.lima.generacion.cuarta.estudiantes[0].nombre);
  let result = "";
  let estudianteLima = data.lima.generacion.cuarta.estudiantes;
  for(let i = 0; i < estudianteLima.length; i++){
    let alumna = estudianteLima[i];
    let progresos = alumna.progreso;
    console.log(progresos)
    result+= (" Nombre: " + alumna.nombre) + (" Correo: " + alumna.correo) + 
    (" Progreso duración del programa: " + progresos.duracionPrograma) +  
    (" Progreso porcentaje completado: " + progresos.porcentajeCompletado);   
  };
  nombre.innerHTML = result;
  return(result)

    })
}*/
  