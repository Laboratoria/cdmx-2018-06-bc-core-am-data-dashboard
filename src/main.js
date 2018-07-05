//Paso uno: Traemos la dirección del servidor propio
const host = '../data/laboratoria.json';
//se inserta dentro del objeto window con método onload para que cargue inmediatamente entrando
window.onload = () => {
  fetch(host)
    //obtenemos la traducción del host a .json para que sea leído
    .then(response => response.json())
    //haremos una segunda promesa que guarda en data el response.json
    .then((data) => {
      createInfo(data);
      //createInfo es una función que se declara en el data.js para crear elementos en DOM
    })
    .catch((error) => {
      console.log(error);
      //.catch buscará errores en el enlace FETCH
    })
};











// console.log("main.js conectado");
// //Asignar variable a laboratoria.json desde el localhost
// const laboratoria = "../data/laboratoria.json";
// console.log(laboratoria);
// dataDashboard.conectado();
// dataDashboard.getData(laboratoria);

// //Login provisional
// const usuaria = "Lucile";
// const password = "Devendra";
// //se declaran las variables que contendrán la entrada de los inputs
// let inputUser = document.getElementById("user-name");
// let passwordUser = document.getElementById("password");

// function login (usuaria, pasword) {
//     if (inputUser == usuaria && pasword == passwordUser) {
//         return document.getElementById("welcome").write.usuaria
//     }
// }
//Función para ejecutar la función en los botones del menú sedes
//const seleccionSedeL = () => {
//     document.getElementById("Lima").addEventListener("click", sedeLima); 
// }
// const seleccionSedeM = () => {
//     document.getElementById("Mexico").addEventListener("click",sedeMx);
// }
// const seleccionSedeS = () => {
//     document.getElementById("Santiago").addEventListener("click", sedeSantiago);
// }
//Función para ejecutar la función en los botones del menú generaciones
