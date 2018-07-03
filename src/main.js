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
    let password1 = password.value;
    
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






//         const generations = computeGenerationStats(res);
//         const users= computeStudentsStats(res);
//         drawCampus(generations);
//     })
// };
// getData();
    

// const drawCampus = (data) => {
//     const sedes = Object.keys(data)
// }


