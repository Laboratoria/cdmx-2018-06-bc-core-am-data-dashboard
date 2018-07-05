/*Código que tenga que ver con mostrar los datos en la pantalla*/

let pintcampus=document.querySelector("pintar_campus");
let tercer=document.getElementById("lima_tercera");
let cuarta=document.getElementById("lima_cuarta");
let quinta=document.getElementById("lima_quinta");
let mtercer=document.getElementById("mex_tercera");
let mcuarta=document.getElementById("mex_cuarta");
let mquinta=document.getElementById("mex_quinta");
let santercer=document.getElementById("sant_tercera");
let sancuarta=document.getElementById("sant_cuarta");
let sanquinta=document.getElementById("sant_quinta");
let sedeLima="lima";
let sedeMex="mexico";
let sedeSant="santiago";
renderInfo = (res) => {

sedeLima="lima";
sedeMex="mexico";
sedeSant="santiago";

/*Boton tercera Lima*/
tercer.addEventListener("click",evento=>{
let botonLima = evento.target.innerHTML;
window.computeStudentsStats(res,botonLima,sedeLima)
});

/*Boton cuarta Lima*/
cuarta.addEventListener("click",evento=>{
let botonLima = evento.target.innerHTML;
window.computeStudentsStats(res,botonLima,sedeLima)
});


/*Boton quinta Lima*/
quinta.addEventListener("click",evento=>{
let botonLima = evento.target.innerHTML;
window.computeStudentsStats(res,botonLima,sedeLima)
});



/*Boton tercera Mex*/
mtercer.addEventListener("click",evento =>{
let botonMex = evento.target.innerHTML;
window.computeStudentsStats(res,botonMex,sedeMex)
});

/*Boton cuarta Mex*/
mcuarta.addEventListener("click",evento=>{
let botonMex = evento.target.innerHTML;
window.computeStudentsStats(res,botonMex,sedeMex)
});

/*Boton quinta Mex*/
mquinta.addEventListener("click",evento=>{
let botonMex = evento.target.innerHTML;
window.computeStudentsStats(res,botonMex,sedeMex)});



/*Boton tercera San*/
santercer.addEventListener("click",evento=>{
let botonSan = evento.target.innerHTML;
window.computeStudentsStats(res,botonSan,sedeSant)
});

/*Boton cuarta San*/
sancuarta.addEventListener("click",evento=>{
let botonSan = evento.target.innerHTML;
window.computeStudentsStats(res,botonSan,sedeSant)
});

/*Boton quinta San*/
sanquinta.addEventListener("click",evento=>{
let botonSan = evento.target.innerHTML;
window.computeStudentsStats(res,botonSan,sedeSant)
});
}


















/*let nombre_tercera =

laboratoria.innerHTML +=`

<div class="form-group">

   <label for="exampleFormControlSelect2"></label>

   <select multiple class="form-control" id="exampleFormControlSelect2">

     <option>Nombre: ${nombre_tercera.nombre}</option>
     <option>Correo: ${nombre_tercera.correo}</option>
     <option>Progreso</option>
     <option>Duracion Programa: ${progreso.duracionPrograma}</option>
     <option>Porcentaje Completado: ${progreso.porcentajeCompletado}</option>
   </select>
</div>

`*/
