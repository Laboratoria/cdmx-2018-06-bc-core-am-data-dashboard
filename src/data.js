window.computeStudentsStats = (laboratoria) => {

    for (key in laboratoria){
        let campus = key;
        // console.log(campus);
        const generations = Object.keys(laboratoria[key].generacion);
        let generation;
        let students;
        generations.forEach((generation) => {
            generation = generation;
            students = laboratoria[key].generacion[generation].estudiantes
            // console.log(students);
        })
        // let student;
        // students.forEach((student) =>{
        //     student = student;
        //     console.log(student);
        // })
        name.innerHTML = "";  
        for (let i = 0; i < students.length; i++) {
            // listaEstudiantes.style.display = "block";
            name.innerHTML += `
            <tr>
            <th scope="col"> ${students[i].nombre}</th>
            <th scope="col"> ${students[i].correo}</th>
            </tr>
            `        
        }
    }
}





// window.computeStudentsStats = (laboratoria) => {

// }

window.computeGenerationsStats = (laboratoria) => {
    // const arrayResult = [];
    
    const obj = {
        campus: '',
        generation: '',
        average: 0,
        count: 0,
    }
    
    for (key in laboratoria){       
        //rellenando propiedad 'campus' con la key de Laboratoria
        obj.campus = key;
        
        
         //devolviendo un array del objeto de generaciones
              
        const generaciones = Object.keys(laboratoria[key].generacion);
        // console.log(generaciones);
        generaciones.forEach((generation) => {
            obj.generation = generation;       
             
            const students = laboratoria[key].generacion[generation].estudiantes;            
            for(student in students){
                average = 0;
                average += students[student].progreso.porcentajeCompletado;
                // console.log(students.length);
                average /= students.length;
                obj.average = Math.round(average);
                obj.count = students.length;
            }
            console.log(obj);
                        
         })     
    }
    return obj
}
