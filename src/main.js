const cargarJSON = ()=>{
    const json = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
    fetch(json)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        computeStudentsStats(data)          
        })
 };

  
//interacción click estudiantes
let clickEstudiantes = document.getElementById("estudiantes");
clickEstudiantes.addEventListener("click", cargarJSON);

//Variable que pintara la lista de estudiantes.
let name = document.getElementById("lista_estudiantes");
 
