


let sede =document.getElementById("ciudad-generacion");
let ingresar=document.getElementById("cuadro-ingresar");
// ocultar las sedes y generaciones
sede.style.display="none";

document.getElementById("ingresar").addEventListener("click", obtenerDatos=()=>{
    const usuario= "Lucile";
    const contraseña= "contraseña";
    if (usuario==="Lucile" && contraseña==="contraseña"){
        
        sede.style.display="block";
        ingresar.style.display="none";

    }else{
        alert("Usuario no identificado");
 
}
});