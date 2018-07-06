let data = document.forms["data"]
button = document.getElementById("button")
button.addEventListener("click", cuenta)

function cuenta(log) {
    log.preventDefault();
    let user = data.querySelector('input[type="text"]')
    let password = data.querySelector('input[type="password"]')
    if (user.value === "lucile@laboratoria.la" && password.value === "123") {
        window.location.href = "index.html"
    } else {
        alert("Ingresa una cuenta válida")
    }
}
