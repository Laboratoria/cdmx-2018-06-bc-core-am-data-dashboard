//Todo lo que se muestre en pantalla va en este archivo
let primerCaja = document.querySelector("#inputs"); //Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById("entrar"); //id boton entrar
const pullInformation = () =>{ //Funcion para jalar la data
    const link= 'https://alppacat.github.io/data-dashboard/data/laboratoria.json'; //Variable para jalar la data
    fetch(link).then (response => response.json())
    .then(datos => {
        console.log(datos);
        
    })
}
 pullInformation();

botonEntrar.addEventListener("click", event =>{ //Evento del botón login
    let usuario = document.getElementById("usuario").value; //Valor de usuario
    let clave = parseInt(document.getElementById("clave").value); //Valor de clave
    if(usuario === "admin" && clave === 1234){ //Comparativo de simulación login
         primerCaja.style.display = "none"; //Se esconde sección para el siguiente paso
}else{
    alert("¡Verifica los datos ingresados!") //Alerta de falta de datos
};
})

  
