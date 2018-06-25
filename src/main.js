// Llamar a la base de datos en objeto json
let datos = "https://raw.githubusercontent.com/VaniushaR/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"
// Declarar variables globales
let sede = document.getElementById("sede");
let generacion = document.getElementById("generación");
let nombre = document.getElementById("nombre");
let btn = document.getElementById("btn");


//Llamar al DOM con click
btn.addEventListener("click", function (){
    clicking();
})



//Llamar a los arreglos generaciones depende la sede elegida anteriormente