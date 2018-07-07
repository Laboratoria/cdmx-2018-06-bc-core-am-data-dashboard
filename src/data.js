
window.computeStudentsStats = (laboratoria) => {
    const students = [];
    const obj = {
        campus: '',
        generation: '',
    };
    

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
        //aqui la solucion a la vida, eso de retornar una fun que declaraste en el window y la usaras para dibujar.
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

  