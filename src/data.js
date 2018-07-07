
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
            
                student.push({"name": name, "email": email, "campus": campus, "generation": generation, "stats": stats});
                
            }
            //console.log(student); 
        }
        console.log(student); 
    }
};

window.computeGenerationsStats = (laboratoria) => {


};

window.sortStudents = (students, orderBy, orderDirection) => {

};

window.filterStudents = (students, search) => {

}

