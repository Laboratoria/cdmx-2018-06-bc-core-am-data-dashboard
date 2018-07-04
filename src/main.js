const json = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

const realoadJSON = () => {
    fetch(json)
    .then( response => response.json() )
    .then((res) => {
        computeStudentsStats(res)
        computeGenerationsStats(res);
        // drawCampus(generacionesFun);
    })
    .catch((error) => {
        console.log(error)
    });
}


//pintar tabla
let listaEstudiantes = document.getElementById("tablaEstudiantes");

//Variable que pintara la lista de estudiantes.
let name = document.getElementById("lista_estudiantes");

//interacción click estudiantes
let clickEstudiantes = document.getElementById("estudiantes");

//evento para jalar data
clickEstudiantes.addEventListener("click", realoadJSON);









const drawCampus = (data) => {
    // const sedes = Object.keys(data);
    // const containerCampus = document.getElementById('campus');

/*    sedes.forEach((sede) => {
        const option = document.createElement('a');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    });

    containerCampus.addEventListener('change', iteratorGenerations);*/
};


// const drawGenerations = (e) => {
//     //computeGenerationsStats(laboratoria)
// };

