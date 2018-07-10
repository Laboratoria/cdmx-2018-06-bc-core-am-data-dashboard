
// funcion para el inicio de sesion
window.abrirPagina = () => {
  let user=document.getElementById("name").value;
  let loginUser=document.getElementById("login").value;
  // console.log(user);
  // console.log(loginUser);

  if( user === "admin" && loginUser === "123admin"){

    window.open("index_1.html");
    window.close("index.html");

  } else {

    alert("Revisa bien tus datos");
  }

}
