
//pintar tabla de estudiantes
let listaEstudiantes = document.getElementById("tablaEstudiantes");

//Variable que pintara la lista de estudiantes.
let listaResult = document.getElementById("lista_estudiantes");

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



//evento para jalar lista de estudiantes
clickEstudiantesTodos.addEventListener("click", (event) => {

    computeStudentsStats();
    // for (let i = 0; i < students.length; i++) {
    //     listaResult.innerHTML += `
    //             <tr><th scope="col"> ${n+i}</th>
    //             <th scope="col"> ${nameStudent}</th>
    //             <th scope="col"> ${mailStudent}</th>
    //             <th scope="col"> ${turnoStudent}</th>
    //             </tr>
    //             `
    //         }

    listaEstudiantes.style.display = "block";
});

clickEstudiantesC4.addEventListener("click", (event) => {
    computeStudentsStats();
    listaEstudiantes.style.display = "block";
});
