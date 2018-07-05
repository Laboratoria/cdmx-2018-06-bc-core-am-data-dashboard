/*// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
//let urlDirection obtiene el json de la data desde git hub
//Des-comentar la línea de abajo
let urlDirection = "https://api.myjson.com/bins/ag4ny";
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
      console.log(data.lima);


      let sede = data.lima.generacion;
      console.log(Object.keys(sede));
      let generaciones = Object.keys(sede);

      console.log(generaciones[1]);
    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";
            }


      })

  }
  cdmx.addEventListener("click", function(){
    sede1();
  })
let sede1 = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.mexico);
      let sede1 = data.mexico.generacion;
      console.log(Object.keys(sede1));
      let generaciones = Object.keys(sede1);

      console.log(generaciones[0]);
    for(let i = 0; i<generaciones.length; i++) {
        sedeMexico.innerHTML+= "<div>" + generaciones[i] + "</div>";

    }

      })

   }
  cdmx2.addEventListener("click", function(){
    sede2();
  })
let sede2 = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.santiago);
      let sede2 = data.santiago.generacion;
      console.log(Object.keys(sede2));
      let generaciones = Object.keys(sede2);
      console.log(generaciones[0]);
    for(let i = 0; i<generaciones.length; i++) {
        sedeSantiago.innerHTML+= "<div>" + generaciones[i] + "</div>";

    }


      })

  }  */
  //Declaracion de variables
let user = document.getElementById("users");
let pass = document.getElementById("password");
let login = document.getElementById("login");
let labo = document.getElementById("logo")
let sedes = document.getElementById("visualSedes");

let urlDirection = "https://api.myjson.com/bins/ag4ny";
let sedeLima = document.querySelector("#botonesSede");
let sedeMexico= document.querySelector("#botonesSede1");
let sedeSantiago = document.querySelector("#botonesSede2");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#cdmx2");

sedes.style.display= "none";
logo.style.display = "block";

//funcion del login
login.addEventListener("click",userdat =() =>{
  let usuaria = user.value;
  let contraseña = pass.value;
  if ((usuaria == "")||(contraseña="")) {
    //se coloca login por que es el id del form que contiene los inputs y style es un metodo del display
     login.style.display ="none";
     logo.style.display = "block";
     sedes.style.display= "block";




  }
})


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

    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" + generaciones[i] + "</div>";

            let est=data.lima.generacion.tercera.estudiantes


            for(let i = 0; i<est.length; i++) {
        sedeLima.innerHTML+= "<div>" + est[i].nombre + "</div>";
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

        let est=data.mexico.generacion.tercera.estudiantes


        for(let i = 0; i<est.length; i++) {
    /*sedeMexico.innerHTML+= "<div>" + est[i].nombre + "</div>";*/
let result = "";
    let nombres = est[i];
    //console.log(nombres, pintar);
    result = result + `
          <tr>
            <th scope="row"></th>
            <td>${nombres.correo}</td>
            <td>${nombres.nombre}</td>
            <td>${nombres.turno}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
`
  }
}
})

      //Impresión del resultado
      sedeMexico.innerHTML = result;

console.log(data.mexico.generacion.tercera.estudiantes);
console.log(data.mexico.generacion.cuarta.estudiantes);
console.log(data.mexico.generacion.quinta.estudiantes);
console.log(data.mexico.generacion.tercera.estudiantes[0].correo);
console.log(data.mexico.generacion.tercera.estudiantes[0].nombre);
console.log(data.mexico.generacion.tercera.estudiantes[0].progreso);
console.log(data.mexico.generacion.tercera.estudiantes[0].turno);
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

        let est=data.santiago.generacion.tercera.estudiantes


        for(let i = 0; i<est.length; i++) {
    sedeSantiago.innerHTML+= "<div>" + est[i].nombre + "</div>";
        }
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
