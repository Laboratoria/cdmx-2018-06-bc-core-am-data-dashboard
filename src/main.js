let sede = document.getElementById("buttons");
let ingresar = document.getElementById("ingresar");
let inputName = document.getElementById("input-name");
let password = document.getElementById("input-password");
let form = document.getElementById("form");
let accessMexico = document.getElementById("mexico");
let accesLima = document.getElementById("lima");
let accessSantiago = document.getElementById("santiago");

// Ocultar las sedes
sede.style.display="none";

// Botones de login
ingresar.addEventListener("click", obtenerDatos = ()=> { 
    let usuario1 = inputName.value;
    //  console.log(usuario1);
    let password1 = password.value;
    //  console.log(password1);
        if (usuario1==="lucile" && password1==="123"){
        sede.style.display="block";
        form.style.display="none";

    }else{
        alert("Usuario no identificado");
    }
});

//Botones de ingreso a generaciones
accessMexico.addEventListener("click", event => {
    let access = event.target.id;
    gettingData(access);
});

accesLima.addEventListener("click", event => {
    let access = event.target.id;
    gettingData(access);
});

accessSantiago.addEventListener("click", event => {
    let access = event.target.id;
    gettingData(access);
});
   //generation = campus[1];
   //console.log(generation);
   //console.log(event.target.id);
//});

//accessLima.addEventListener("click", obtenerGeneracionesLima = () => {
//});

//accessSantiago.addEventListener("click", obtenerGeneracionesSantiago = () => {
//});





// const json = '../data/laboratoria.json';// sabemos que tiene que haber un fetch para "jalar" la info. de la carpeta laboratoria.json, pero como está en un servidor necesitamos cargarlo. y cerrarlo después

// const getData = () => {// cuando jale la información, quiero que la convierta en json con el método .json()
//     fetch(json).then (response => response.json())// haciendo fetch de json y aplicando las promesas .then para que realicen una acción (función)
//     .then((res)=>{
//         const generations = computeGenerationStats(res);
//         const users= computeStudentsStats(res);
//         drawCampus(generations);
//     })
// };
// getData();
    

// const drawCampus = (data) => {
//     const sedes = Object.keys(data)
// }


