let ingresar =document.getElementById("ingresar");
let inputName = document.getElementById("input-name");
let password = document.getElementById("input-password");
let form= document.getElementById("form");
let sede =document.getElementById("buttons");
let accessMexico = document.getElementById("access-mexico");
let accessLima = document.getElementById("access-lima");
let accessSantiago = document.getElementById("access-santiago")

// ocultar las sedes y generaciones
sede.style.display="none";

ingresar.addEventListener("click", obtenerDatos = () => { 
    let usuario1 = inputName.value;
    let password1 = password.value;
    
        if (usuario1==="lucile" && password1==="123"){
        sede.style.display="block";
        form.style.display="none";

    }else{
        alert("Usuario no identificado");
    }
});

// LLAMANDO JSON


accessCDMX.addEventListener("")

const iterandoCampus = (data) => { // vamos a iterar sobre las propiedades de todo el objeto (sedes)
    const sedes = Object.keys(data);// obteniendo propiqedades de toda la data 
    const containerCampus = document.getElementById("campus");// agregando un select que guarde las sedes y nos deje elegir. Nosotras ya tenemos las cajas donde vamos a guardar las generaciones
    // forEach nos sirve para pintar los elementos del arreglo 
    sedes.forEach((sede) => { 
        const option = document.createElement('option');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    })
    containerCampus.addEventListener('change', iterandoGeneracion);
};

// const iterandoGeneracion = (e) => {

// }





























//         const generations = computeGenerationStats(res);
//         const users= computeStudentsStats(res);
//         drawCampus(generations);
//     })
// };
// getData();
    

// const drawCampus = (data) => {
//     const sedes = Object.keys(data)
// }


