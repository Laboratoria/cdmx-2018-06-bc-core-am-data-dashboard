
const gettingData= ()=> {
    let url = "https://raw.githubusercontent.com/DianaCarrillo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"

    fetch(url).then(data => data.json())
    .then(data => {
        console.log(data);
    });
}

gettingData();


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