let go= document.getElementById("go");
go.addEventListener("click",go)
go =()=>{
  if (document.form.password.value=='tmmex2018' && document.form.login.value=='Lucile'){ 
          document.form.submit(); 
      } 
      else{ 
           alert("Porfavor ingrese Usuario y Contraseña correctos."); 
      } 
  } 