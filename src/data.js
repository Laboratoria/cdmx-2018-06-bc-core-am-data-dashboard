/*let sedeLima = document.querySelector("#botonesSede");
let sedeMexico= document.querySelector("#botonesSede1");
let sedeSantiago = document.querySelector("#botonesSede2");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#cdmx2");

// Funcion que muestra datos de sedes y alumnas de lima en consolg
lima.addEventListener("click", function(){
    sede();
  });
  cdmx.addEventListener("click", function(){
    sede1();
  });
  cdmx2.addEventListener("click", function(){
    sede2();
  });
window.global.computeStudentsStats()*/
const container = document.getElementById('result');
/*let sede = function(){
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
/*let result = "";
    let nombres = est[i];
    //console.log(nombres, pintar);
    result = result + `<div class = "card">
                <div class= "info">
                 <p>Nombre:${nombres.name}</p>
                 <p>Correo:${nombres.correo}</p>
                 <p>Turno: ${nombres.turno}</p>
                 <p>:${nombres.progreso}</p>
                </div>
              </div>`

    /*`
          <tr>
            <th scope="row"></th>
            <td>${nombres.correo}</td>
            <td>${nombres.nombre}</td>
            <td>${nombres.turno}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>`*/
/*  }
  container.innerHTML = result;
}
})
      }
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
*/
