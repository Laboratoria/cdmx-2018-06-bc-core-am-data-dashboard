console.log("main.js conectado");
dataDashboard.conectado();
const laboratoria = "../data/laboratoria.json";
console.log(laboratoria);
dataDashboard.getData(laboratoria);

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
const seleccionSedeL = () => {
    document.getElementById("Lima").addEventListener("click", sedeLima); 
}
const seleccionSedeM = () => {
    document.getElementById("Mexico").addEventListener("click",sedeMx);
}
const seleccionSedeS = () => {
    document.getElementById("Santiago").addEventListener("click", sedeSantiago);
}
//Función para ejecutar la función en los botones del menú generaciones
 