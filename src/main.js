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

// Función para pintar sedes en el DOM
const sedes = (laboratoria) => {
    // let result = laboratoria;
    const containerButtons= document.getElementById("container-buttons");
    for(key in laboratoria){
        const divCol = document.createElement("div");
        const a= document.createElement("a");
        divCol.classList.add("col-4");
        a.id=key;
        a.innerHTML=key;
        divCol.appendChild(a); 
        // falta agregar evento al divCol para que ese button detone una funcion
        containerButtons.appendChild(divCol);
        // console.log(key);
    }
}

//Botones de ingreso a generaciones
// accessMexico.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accesLima.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accessSantiago.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });