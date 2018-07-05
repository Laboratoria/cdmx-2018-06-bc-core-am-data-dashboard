<<<<<<< HEAD
/*// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
//let urlDirection obtiene el json de la data desde git hub
//Des-comentar la línea de abajo
=======

//Declaracion de variables
>>>>>>> upstream/master
let urlDirection = "https://api.myjson.com/bins/ag4ny";
let sedeLima = document.querySelector("#botonesSede");
let sedeMexico= document.querySelector("#botonesSede1");
let sedeSantiago = document.querySelector("#botonesSede2");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#cdmx2");

// Funcion que muestra datos de sedes y alumnas de lima en consolg
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
<<<<<<< HEAD

      console.log(generaciones[1]);
=======

>>>>>>> upstream/master
    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";

            let est=data.lima.generacion.tercera.estudiantes

            console.log(data.lima.generacion.tercera.estudiantes);
            let gen=Object.keys(est);
            for(let i = 0; i<gen.length; i++) {
        sedeLima.innerHTML+= "<div>" + gen[i] + "</div>";
            }
          }
//


//
console.log(data.lima.generacion.tercera.estudiantes);
console.log(data.lima.generacion.cuarta.estudiantes);
console.log(data.lima.generacion.quinta.estudiantes);
console.log(data.lima.generacion.tercera.estudiantes);
console.log(data.lima.generacion.tercera.estudiantes[0].nombre);
console.log(data.lima.generacion.tercera.estudiantes[0].progreso);
console.log(data.lima.generacion.tercera.estudiantes[0].turno);
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
