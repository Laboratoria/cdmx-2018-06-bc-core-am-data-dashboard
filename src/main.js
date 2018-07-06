

//Declaracion de variables

let urlDirection = "https://api.myjson.com/bins/ag4ny";
let sedeLima = document.querySelector("#botonesSede");
let sedeMexico= document.querySelector("#botonesSede1");
let sedeSantiago = document.querySelector("#botonesSede2");

const campus =document.getElementsByClassName("campus");

for(let i=0; i<campus.length; i++){
  campus[i].addEventListener("click", function(e){
    sede(e);
  })


}
// Funcion que muestra datos de sedes y estudiantes  

  let sede = function(e){
    let campus= (e.target.value).toLowerCase();
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
console.log(data);

       
      let gen = data[campus].generacion;
     
      let generaciones = Object.keys(gen);

      


    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";
        console.log(data[campus]);
            let est=data[campus].generacion[generaciones[i]].estudiantes
             
            for(let i = 0; i<est.length; i++) {

           
        sedeLima.innerHTML+= "<div>" +"Nombre: "+est[i].nombre + "</div>";
        sedeLima.innerHTML+= "<div>" +"Correo: " +est[i].correo + "</div>";
        sedeLima.innerHTML+= "<div>" +"Duracion programa: " +est[i].progreso.duracionPrograma+ "</div>";
        sedeLima.innerHTML+= "<div>" +"Porcentaje completado: "+est[i].progreso.porcentajeCompletado+ "</div>";
        sedeLima.innerHTML+= "<div>" +"Turno: " +est[i].turno + "</div>";
            }
          }
//


//

      })

  }
  