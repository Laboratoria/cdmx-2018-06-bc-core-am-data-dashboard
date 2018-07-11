

// funcion para el inicio de sesion
window.abrirPagina = () => {
    let user=document.getElementById("usuario").value;
    let loginUser=document.getElementById("clave").value;
    console.log(user);
    // console.log(loginUser);
  
    if( user === "admin" && loginUser === "123admin"){
  
      window.open("../views/sedes.html");
      window.close("index.html");
  
    } else {
  
      alert("Revisa bien tus datos");
    }
  
  }