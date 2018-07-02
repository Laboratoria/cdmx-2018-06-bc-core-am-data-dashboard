<<<<<<< HEAD
window.computeStudentsStats = (laboratoria) => {
=======
//Aqui van las funciones globles.
window.computeStudentsStats = (laboratoria) => {

}


window.computeGenerationsStats = (laboratoria) => {

}

window.sortStudents = (students, orderBy, orderDirection) => {

}


window.filterStudents = (students, search) => {

}



const Alumnas = document.getElementById('jsonBtn');
Alumnas.addEventListener('click', cargarJSON);
>>>>>>> 3e5d74afc1e7711916ce71d5b36ed0dad96251bd

}

window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
        campus: '',
        generation: '',
        average: 0,
        count: 0,
    };
    let average = 0;
    for (key in laboratoria) {
        obj.campus = key;
        average = 0;
        const generations = Object.keys(laboratoria[key].generacion);
        generations.forEach((generation) => {
            obj.generation = generation;
            const students = laboratoria[key].generacion[generation].estudiantes;
            for (student in students) {
                average += students[student].progreso.porcentajeCompletado;
                average = average / students.length;
                obj.average = average;
                obj.count = students.length;
                generationsArray.push(obj);

            }
        })

    }
    return generationsArray;
}

window.sortStudents = (laboratoria) => {

}

window.filterStudents = (laboratoria) => {

}