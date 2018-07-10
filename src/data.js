
//Declaracion de variables
let urlDirection = 'https://api.myjson.com/bins/ag4ny';
let resultado = document.querySelector('#botonesSede');

const campus = document.getElementsByClassName('campus');


for(let i = 0; i<campus.length; i++){
  campus[i].addEventListener('click', function(e){
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
        let est = data[campus].generacion[generaciones[i]].estudiantes
        document.getElementById('titulos').innerHTML += 
              '<tr >' + 
                '<td>' +campus+ '</td>' +
                '<td>' +generaciones[i]+ '</td>' +
                '<td>' +est.length+ '</td>' +
             '</tr>'
         //pinta sedes            
            for(let i = 0; i<est.length; i++) {
              console.log(document.getElementById('estadisticas'))
              document.getElementById('titulos').innerHTML += 
              '<tr class= "black">' + 
                '<td>' + est[i].nombre + '</td>' +
                '<td>' + est[i].correo + '</td>' +
                '<td>' + est[i].turno + '</td>' +
                '<td>' + est[i].progreso.porcentajeCompletado + '</td>' +
                '<td>' + est[i].progreso.duracionPrograma + '</td>' +
              '</tr>'
            }
          }
//
//

      })

  }
  
document.getElementById('delete').addEventListener('click', (event) =>{
    document.getElementById("estadisticas").innerHTML= '';
    document.getElementById("titulos").innerHTML= '';
})