//Funciones de Login
// Nombre y contraseña
var name = document.getElementById('name');
var pw = document.getElementById('pw');

// Compara si la información de registro es igual a la información de log in
function check() {
var logIn = document.addEventListener("Login").click();
    // información almacenada del registro
    var storedName = "Lucile";
    var storedPw = "laboratoria2018";

    // entered data from the login-form
    //var userName = document.getElementById('userName');
    //var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(logIn.name !== storedName || logIn.storedPw !== storedPw) {
        alert('ERROR');
    }else {
        alert('¡Bienvenidx!');
    }
}
