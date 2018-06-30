// BOTONES DE LOGIN 
//let sede =document.getElementsByClassName("col-12");
let sede = document.getElementById("buttons");
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

// LLAMANDO JSON

const json = "../data/laboratoria.json";
    
const gettingData = () => {
    fetch(json).then(res => res.json()) //Mando a llamar a json mediante fetch, entonces le digo que esa información la convierta en archivo json.
    .then((laboratoria => {   //Aquí le asigo el nombre de laboratoria a la información que envió.
    campus(laboratoria);  //Aquí estoy diciendo que a mi siguiente función (campus)le estoy mandando la data.
    })
}

gettingData();

const campus = (laboratoria) => {
 
}


