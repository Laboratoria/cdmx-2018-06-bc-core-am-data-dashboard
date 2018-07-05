

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
// Funcion que muestra datos de sedes y alumnas de lima en consolg

  let sede = function(e){
    let campus= (e.target.value).toLowerCase();
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){


       
      let gen = data[campus].generacion;
     
      let generaciones = Object.keys(gen);

      


    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";
        console.log(data[campus]);
            let est=data[campus].generacion[generaciones[i]].estudiantes
             
            for(let i = 0; i<est.length; i++) {
              
           
        sedeLima.innerHTML+= "<div>" + est[i].nombre + "</div>";
        sedeLima.innerHTML+= "<div>" + est[i].correo + "</div>";
        sedeLima.innerHTML+= "<div>" + est[i].progreso.duracionPrograma+ "</div>";
        sedeLima.innerHTML+= "<div>" + est[i].progreso.porcentajeCompletado+ "</div>";
        sedeLima.innerHTML+= "<div>" + est[i].turno + "</div>";
            }
          }
//


//

      })

  }
  cdmx.addEventListener("click", function(){
    sede1();
  })
let sede1 = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.mexico.generacion);
      let sede1 = data.mexico.generacion;
      console.log(Object.keys(sede1));
      let generaciones = Object.keys(sede1);

      console.log(generaciones[0]);
    for(let i = 0; i<generaciones.length; i++) {
        sedeMexico.innerHTML+= "<div>" + generaciones[i] + "</div>";

    }
console.log(data.mexico.generacion.tercera.estudiantes);
console.log(data.mexico.generacion.cuarta.estudiantes);
console.log(data.mexico.generacion.quinta.estudiantes);
console.log(data.mexico.generacion.tercera.estudiantes[0].correo);
console.log(data.mexico.generacion.tercera.estudiantes[0].nombre);
console.log(data.mexico.generacion.tercera.estudiantes[0].progreso);
console.log(data.mexico.generacion.tercera.estudiantes[0].turno);
      })

   }
  cdmx2.addEventListener("click", function(){
    sede2();
  })
let sede2 = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.santiago.generacion);
      let sede2 = data.santiago.generacion;
      console.log(Object.keys(sede2));
      let generaciones = Object.keys(sede2);

    for(let i = 0; i<generaciones.length; i++) {
        sedeSantiago.innerHTML+= "<div>" + generaciones[i] + "</div>";

     }
console.log(data.santiago.generacion.tercera.estudiantes);
console.log(data.santiago.generacion.cuarta.estudiantes);
console.log(data.santiago.generacion.quinta.estudiantes);
console.log(data.santiago.generacion.tercera.estudiantes[0].correo);
console.log(data.santiago.generacion.tercera.estudiantes[0].nombre);
console.log(data.santiago.generacion.tercera.estudiantes[0].progreso);
console.log(data.santiago.generacion.tercera.estudiantes[0].turno);


      })

  }
