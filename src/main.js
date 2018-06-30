let sede =document.getElementById("buttons");
let ingresar =document.getElementById("ingresar");
let inputName = document.getElementById("input-name");
let password = document.getElementById("input-password");
let form= document.getElementById("form");

// ocultar las sedes y generaciones
sede.style.display="none";

ingresar.addEventListener("click", obtenerDatos = ()=> { 
    let usuario1 = inputName.value;
    //  console.log(usuario1);
    let password1 = password.value;
    //  console.log(password1);
        if (usuario1==="lucile" && password1==="123"){
        sede.style.display="block";
        form.style.display="none";

    }else{
        alert("Usuario no identificado");
    }
});


const json = '../data/laboratoria.json';// sabemos que tiene que haber un fetch para "jalar" la info. de la carpeta laboratoria.json, pero como está en un servidor necesitamos cargarlo. y cerrarlo después

const getData = () => {// cuando jale la información, quiero que la convierta en json con el método .json()
    fetch(json).then (response => response.json())// haciendo fetch de json y aplicando las promesas .then para que realicen una acción (función)
    .then((res)=>{
        const generations = computeGenerationStats(res);
        const users= computeStudentsStats(res);
        drawCampus(generations);
    })
};
getData();
    

const drawCampus = (data) => {
    const sedes = Object.keys(data)
}


