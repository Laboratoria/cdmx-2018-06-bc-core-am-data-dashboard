console.log("conectado");

const showResult = document.getElementById("result-list");
//Definición de la primera función 
window.computeStudentsStats = (laboratoria) => {
    //declaración de variables:
    let student = [];

    let campus = "";
    let generation = "";
    let name = "";
    let email = "";
    let turn = "";

    let stats = {
        status: "",
    };


    for (findSede in laboratoria) {
        campus = findSede;
        const generations = Object.keys(laboratoria[findSede].generacion);
        for (let i = 0; i < generations.length; i++) {
            // const findGeneration = Object.keys(laboratoria[findSede].generacion[generations[i]]);
            generation = generations[i];
            let generationLevel = generations[i];
            //console.log(student);
            let studentsLength = laboratoria[findSede].generacion[generationLevel].estudiantes;
            for (let i = 0; i < studentsLength.length; i++) {
                name = studentsLength[i].nombre;
                email = studentsLength[i].correo;

                student.push({ "name": name, "email": email, "campus": campus, "generation": generation, "stats": stats });
                // console.log(student); 
            }

        }
    }

};

// computeGenerationsStats(laboratoria)
// Esta función es la responsable de "crear" los status de cada generación que vamos 
//a "pintar" en la pantalla. La idea es "recorrer" el objeto que se encuentra dentro de la "data".
// La función debe devolver un nuevo arreglo de generaciones donde cada objeto 
//generation deberá tener una propiedad con el nombre average y dentro el promedio de
// completedPercentage de todas las estudiantes de la generación.
// Argumentos
// laboratoria: Objeto obtenido de la data en bruto.
// Valor de retorno 
// Un arreglo de objetos generation con las siguientes propiedades:
// campus: Sede a la cual la generación pertenece. ´
// generation: Generación a la cual pertence ´
// average: Promedio del porcentajeCompletado de todas las estudiantes de la generación, 
//si resulta un número flotante debería de ser redondeado al número entero más cercano.
// count: Número de estudiantes de la generación.

window.computeGenerationsStats = (laboratoria) => {
    //arreglo de objetos
    for (sedes in laboratoria) {
        campus = sedes;
        const gen = Object.keys(laboratoria[sedes].generacion);
        //console.log('1º for in', gen);
        for (let numberG of gen) {
            //console.log(numberG);
            generation = numberG;
            const stud = laboratoria[sedes].generacion[numberG].estudiantes;
            //sacar el número de estudiantes por generación
            let totalStud = stud.length;
            count = totalStud;
            console.log(totalStud);
            //sacar el 
            // console.log(stud);
            for (eachStudent in stud) {
                //console.log(eachStudent);
                const studentKey = laboratoria[sedes].generacion[numberG].estudiantes[eachStudent].progreso.porcentajeCompletado;
                
                Math.round(studentKey);
                console.log(studentKey);

                // for (eachProgressSt in studentKey) {
                // console.log(eachProgressSt);
                // const studentProgress = Object.keys(laboratoria[sedes].generacion[numberG].estudiantes[eachStudent].progreso[studentKey].porcentajeCompletado);
                // console.log(studentProgress);
                // }
            }

            generations.push({"campus": campus, "generation": generation, "count": count}); 
            //console.log('2º for in', st);
        }
        
        console.log('puch!', generations);
    }

    //se cierra el segundo for in al nivel generaciones
    
}


//se cierra primer fon in al nivel sedes
// }

//}











window.sortStudents = (students, orderBy, orderDirection) => {

};

window.filterStudents = (students, search) => {

}

