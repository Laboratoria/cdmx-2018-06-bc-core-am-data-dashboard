// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
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

  }  