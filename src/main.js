// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
//let urlDirection obtiene el json de la data desde git hub

let urlDirection = 'https://raw.githubusercontent.com/ReikaMoss/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
let sedeLima = document.querySelector("#botonesSede");
let sedeMexico= document.querySelector("#botonesSede1");
let sedeSantiago = document.querySelector("#botonesSede2");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#cdmx2");

// usando el boton de las sedes llamamos a la función para que aparezca en consola data>lima>generacion>cuarta

lima.addEventListener("click", function(){
    sede();
  })

  let sede = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){

        console.log(data);
      let sede = data.lima.generacion;
      console.log(data.lima.generacion);
      let generaciones = Object.keys(sede);

    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";
        sedeLima.addEventListener("click",(e) =>{
          console.log(e.target.innerHTML);
        })
        console.log(data.lima.generacion[generaciones[i]]);
            }

console.log(data.lima.generacion.cuarta.estudiantes);
console.log(data.lima.generacion.quinta.estudiantes);
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


      })

    }
