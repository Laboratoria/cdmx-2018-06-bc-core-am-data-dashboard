let api = "https://api.myjson.com/bins/1efx86"

//const porque nunca cambia el div, solo la info depositada
const container = document.getElementById('result');

const renderInfo = (data) => {
    document.getElementById('btn').addEventListener('click', (event) => {
        let result = '';
        console.log(Object.keys(data.lima.generacion))
        const info = Object.keys(data.lima.generacion);
        console.log(Object.keys(info));

        for (var generacion in info) {
            if (info.hasOwnProperty(generacion)) {
                console.log("la clave es " + generacion + " y el valor es " + info[generacion])
                //console.log(info.lima.generacion)

                let arrLaboratoriaEstudiantes = data.lima.generacion[info[generacion]].estudiantes;

                for (i = 0; i < arrLaboratoriaEstudiantes.length; i++) {
                    result += `<div class='card'>
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

