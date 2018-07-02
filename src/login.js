let pass= document.querySelector("#pass");
let name= document.querySelector("#user");

document.querySelector("#login").addEventListener('click', () => {
    if (pass && name === ""){
        alert ("Debes ingresar informacion para acceder");
        console.log (hola)
    }
    if (pass === "" || name === "") {
        alert("Debes llenar todos los campos para ingresar");
    } else {
        document.querySelector("#href").href = "index.html";
        console.log (login)
    }
});

  