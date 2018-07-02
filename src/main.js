console.log("main.js conectado");
//Asignar variable a laboratoria.json desde el localhost
const laboratoria = "../data/laboratoria.json";
console.log(laboratoria);

//Login provisional
const usuaria = "Lucile";
const password = "Devendra";
//se declaran las variables que contendrán la entrada de los inputs
let inputUser = document.getElementById("user-name");
let passwordUser = document.getElementById("password");

function login (usuaria, pasword) {
    if (inputUser == usuaria && pasword == passwordUser) {
        return document.getElementById("welcome").write.usuaria
    }
    
}

//Función para ejecutar la función en los botones del menú sedes
const selecionSedes = () => {
    document.getElementById("Lima").addEventListener("click", sedeLima); 
}
//Función para ejecutar la función en los botones del menú generaciones