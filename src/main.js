
//pintar tabla de estudiantes
let listaEstudiantes = document.getElementById("tablaEstudiantes");

//Variable que pintara la lista de estudiantes.
let listaResult = document.getElementById("lista_estudiantes");
let containerG = document.getElementById("contenido_general");

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

//evento para jalar lista de estudiantes
clickEstudiantesTodos.addEventListener("click", (event) => {
  computeStudentsStats();
  //  listaEstudiantes.style.display = "block";
  containerG.style.display = "none";
  listaEstudiantes.style.display = "block";
});

clickCdmx.addEventListener("click", (event) => {
  computeStudentsStats();
  listaEstudiantes.style.display = "none";
  containerG.style.display = "block";
});

clickLima.addEventListener("click", (event) => {
  computeStudentsStats();
  listaEstudiantes.style.display = "none";
  containerG.style.display = "block";
});

clickSantiago.addEventListener("click", (event) => {
  computeStudentsStats();
  listaEstudiantes.style.display = "none";
  containerG.style.display = "block";
});
