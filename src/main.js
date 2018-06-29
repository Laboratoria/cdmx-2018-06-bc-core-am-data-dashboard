/*Código que tenga que ver con mostrar los datos en la pantalla*/
let studentsimp=document.getElementById("pintar_estudiantes");
let tercer=document.getElementById("lima_tercera");

tercer.addEventListener("click",evento=>{window.datadashboard.computeStudentsStats(studentsimp)});
