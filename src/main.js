document.addEventListener('DOMContentLoaded', ()=>{//DOMContentLoaded es un evento
    realoadJSON();
    },false)

const json = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

window.realoadJSON = () => {

    fetch(json)
    .then(response => response.json())
    .then((res) => {
        const infoStudent = computeStudentsStats(res);
        const infoGeneration = computeGenerationsStats(res);
        filterStudents(infoStudent);
        studentDraw(infoStudent);
        generationDraw(infoGeneration);
    })
    // .catch((error) => {
    //     console.log(error)
    // });
}

//pintar tabla de estudiantes
let listaEstudiantes = document.getElementById("tablaEstudiantes");

//Variable que pintara la lista de estudiantes.
let listaResult = document.getElementById("lista_estudiantes");
let containerG = document.getElementById("contenido_general");
let carrusel = document.getElementById("carrusel");
let search = document.getElementById("search");



//llamados id de links
let clickEstudiantesTodos = document.getElementById("estudiantes");
let clickEstudiantesC4 = document.getElementById("estudiantesC4");
let clickEstudiantesC5 = document.getElementById("estudiantesC5");
let clickEstudiantesC6 = document.getElementById("estudiantesC6");
let clickEstudiantesL4 = document.getElementById("estudiantesL4");
let clickEstudiantesL5 = document.getElementById("estudiantesL5");
let clickEstudiantesL6 = document.getElementById("estudiantesL6");
let clickEstudiantesS4 = document.getElementById("estudiantesS4");
let clickEstudiantesS5 = document.getElementById("estudiantesS5");
let clickEstudiantesS6 = document.getElementById("estudiantesS6");

let clickCdmx = document.getElementById("cdmx");
let clickLima = document.getElementById("lima");
let clickSantiago = document.getElementById("santiago");

let clickbtnSearch = document.getElementById("btnSearch");

window.studentDraw = (infoStudent) => {

    let n = 1;
    for (let i = 0; i<infoStudent.length; i++) {
        listaResult.innerHTML += `
            <tr><th scope="col"> ${n+i}</th>
                <th scope="col"> ${infoStudent[i].name}</th>
                <th scope="col"> ${infoStudent[i].mail}</th>
                <th scope="col"> ${infoStudent[i].turnoStudent}</th>
                <th scope="col"> ${infoStudent[i].stats.completedPercentage}</th>
                <th scope="col"> ${infoStudent[i].campus}</th>
            </tr>
            ` ;
    }
}

window.generationDraw = (infoGeneration) => {

    for (let i = 0; i<infoGeneration.length; i++) {
        containerG.innerHTML += `
        <div id="cardColor" class="card">
            <div class="info">
                <p>Sede: ${infoGeneration[i].campus}</p>
                <p>Generación: ${infoGeneration[i].generation}</p>
                <p>% LMS: ${infoGeneration[i].average}</p>
                <p># de Estudiantes: ${infoGeneration[i].count}</p>
            </div>
        </div> `
    }
}


//evento para jalar lista de estudiantes
clickEstudiantesTodos.addEventListener("click", (event) => {

    carrusel.style.display="none";
    containerG.style.display = "none";
    listaEstudiantes.style.display = "block";
});

clickCdmx.addEventListener("click", (event) => {

    carrusel.style.display="none";
    listaEstudiantes.style.display = "none";
    containerG.style.display = "block";
});

// clickLima.addEventListener("click", (event) => {
//
//     carrusel.style.display="none";
//     listaEstudiantes.style.display = "none";
//     containerG.style.display = "block";
// });
//
// clickSantiago.addEventListener("click", (event) => {
//
//     carrusel.style.display="none";
//     listaEstudiantes.style.display = "none";
//     containerG.style.display = "block";
// });

// clickbtnSearch.addEventListener("click", (event) => {
//
// let clickSearch = window.filterStudents(
//   infoStudent,
//   search.value
//
// );
// console.log(infoStudent);
//     carrusel.style.display="none";
//     listaEstudiantes.style.display = "none";
//     containerG.style.display = "block";
// });
