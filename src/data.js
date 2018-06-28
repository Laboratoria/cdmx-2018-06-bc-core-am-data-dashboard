const Alumnas = document.getElementById('jsonBtn');
Alumnas.addEventListener('click', cargarJSON);

//console.log(Alumnas);
let api = "https://api.myjson.com/bins/1efx86"

function cargarJSON() {
   fetch(api)
   .then(function(res) {
       return res.json();
       console.log(res);

   })
   .then(function(data) {
       let nombre1 = (data.lima.generacion.cuarta.estudiantes[0].nombre);
       //console.log("nombre1");
       document.getElementById('resultado').innerHTML = nombre1;
   })

}
