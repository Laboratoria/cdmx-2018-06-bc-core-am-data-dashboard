

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
    // document.getElementById('btn').addEventListener('click', (event) => 
    // let result ="";
    let campus= (e.target.value).toLowerCase();
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
console.log(data);

       
      let gen = data[campus].generacion;
     
      let generaciones = Object.keys(gen);

      


    for(let i = 0; i<generaciones.length; i++) {
        sedeLima.innerHTML+= "<div>" +"Generacion: "+generaciones[i] + "</div>";//pinta sedes
        console.log(data[campus]);
            let est=data[campus].generacion[generaciones[i]].estudiantes
             
            for(let i = 0; i<est.length; i++) {
              console.log(est)
//               result += `<div class="card">
//                             <div class="info">
//                                 <p>Nombre: ${info[i].nombre}</p>
//                                 <p>Correo: ${info[i].correo}</p>
//                                 <p>Duracion: ${info[i].progreso.duracionPrograma}</p>
//                                 <p>Progreso: ${info[i].progreso.porcentajeCompletado}</p>
//                             </div>
//                         </div>`
//         }
//         container.innerHTML = result;
//     };
// }



// // renderInfo = (data) => {
// //     document.getElementById('btn').addEventListener('click', (event) => {
// //         let result = '';
// //         console.log(Object.values(data)[0])
// //         const info = Object.values(data)[0];

// //         for (let i = 0; i < info.length; i++) {
// //             console.log(info[i].progress.javascript)
// //             result += `<div class="card">
// //                             <div class="info">
// //                                 <p>Nombre: ${info[i].name}</p>
// //                                 <p>Active: ${info[i].active}</p>
// //                                 <p>Progress Javascript: ${info[i].progress.javascript}</p>
// //                                 <p>Progress UX: ${info[i].progress.ux}</p>
// //                             </div>
// //                         </div>`
// //         }
// //         container.innerHTML = result;
// //     });
// // }



           
        sedeLima.innerHTML+= "<div>" +"Nombre: "+est[i].nombre + "</div>";
        sedeLima.innerHTML+= "<div>" +"Correo: " +est[i].correo + "</div>";
        sedeLima.innerHTML+= "<div>" +"Duracion programa: " +est[i].progreso.duracionPrograma+" hrs"+ "</div>";
        sedeLima.innerHTML+= "<div>" +"Porcentaje completado: "+est[i].progreso.porcentajeCompletado+"%"+ "</div>";
        sedeLima.innerHTML+= "<div>" +"Turno: " +est[i].turno + "</div>";
        console.log(est[i].progreso.porcentajeCompletado);

            }
          }
//


//

      })

  }
  