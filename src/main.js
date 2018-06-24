// alert("main también");

// $.ajax({
//     url: `../data/laboratoria.json`
// });

// var laboratoria = new XMLHttpRequest();
// lanoratoria.open('GET', '../data/laboratoria.json');
// document.getElementById("prueba").innerHTML = xhr;



const xhr = new XMLHttpRequest();
const laboratoria = xhr.open ('GET', '../data/laboratoria.json');
let students = document.getElementsByClassName("estudiantes");
students.innerHTML = laboratoria;