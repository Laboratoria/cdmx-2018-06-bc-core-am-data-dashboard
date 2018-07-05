const loginUsuario = () => {

  let user=document.getElementById("name").value;

  let loginUser=document.getElementById("login").value;
  console.log(user);
  console.log(loginUser);

  if(user === "admin" && loginUser === "123admin"){
    window.open("index_1.html");


  }else {

      alert("Revisa bien tus datos");
  }

}
