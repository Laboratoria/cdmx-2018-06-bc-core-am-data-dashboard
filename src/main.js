const url = 'http://api.myjson.com/bins/1efx86';

//la data se carga el reload la pagina
window.onload = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      //aquí van toda las funciones que ultilizaran la data (las de window y las de dibujar)
      console.log(data)
      const students = computeStudentsStats(data);
      const generations = computeGenerationsStats(data);
      const renderInfo(data);
      //drawStudents(students);
      //drawCampus(generations);
      //sortStudents(data)
      //filterStudents(data)
    })
    .catch((error) => {
      console.log(error);
    });
}


//const porque nunca cambia el div, solo la info depositada
const container = document.getElementById('result');

$(".dropdown-trigger").dropdown();//para el menú de mail


const renderInfo = (data) => {
    document.getElementById('btn').addEventListener('click', (event) => {
        let result = '';
        console.log(Object.keys(data.lima.generacion.cuarta))
        const info = Object.keys(data.lima.generacion);
        console.log(Object.keys(info));

        for (var generacion in info) {
            if (info.hasOwnProperty(generacion)) {
                console.log("la clave es " + generacion + " y el valor es " + info[generacion])
                //console.log(info.lima.generacion)

                let arrLaboratoriaEstudiantes = data.lima.generacion[info[generacion]].estudiantes;

                for (i = 0; i < arrLaboratoriaEstudiantes.length; i++) {
                    result += `<div class='table'>
                                <div class='info'>
                                   <p>Nombre: ${data.lima.generacion[info[generacion]].estudiantes[i].nombre}</p>
                                   <p>"01-Introduccion-a-programacion" - Duracion: ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTema}</p>
                                    </div>
                                    </div>`


                                    
                }
            }
            container.innerHTML = result;


        }
    });
}

document.getElementById('delete').addEventListener('click', (event) => {
    container.innerHTML = '';
})
