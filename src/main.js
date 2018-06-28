let sede =document.getElementById("ciudad-generacion");
let ingresar =document.getElementById("ingresar");
let inputName = document.getElementById("input-name");
let password = document.getElementById("input-password");
let form= document.getElementById("form");

// ocultar las sedes y generaciones
sede.style.display="none";

ingresar.addEventListener("click", obtenerDatos = ()=> { 
    let usuario1 = inputName.value;
     console.log(usuario1);
    let password1 = password.value;
     console.log(password1);
        if (usuario1==="lucile" && password1==="123"){
        sede.style.display="block";
        form.style.display="none";

    }else{
        alert("Usuario no identificado");
    }
});


