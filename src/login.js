//Funciones de Login
// Nombre y contraseña
let name = document.getElementById('name').value;
let pw = document.getElementById('pw').value;

console.log(name)
console.log(pw)
// Compara si la información de registro es igual a la información de log in
 check = () => {
let logIn = document.getElementById("Login").addEventListener("click", (event)
    // información almacenada del registro
    let storedName = "Lucile";
    let storedPw = "laboratoria2018";

    // info metida del log in
    //var userName = document.getElementById('userName');
    //var userPw = document.getElementById('userPw');

    // comparar la información de registro
    if(name !== storedName || storedPw !== storedPw) {
        alert('ERROR');
    }else {
        alert('¡Bienvenidx!');
    }
}
