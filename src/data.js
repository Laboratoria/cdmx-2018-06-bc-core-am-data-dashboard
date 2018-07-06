
console.log("conectado");

const showResult = document.getElementById("result-list");
//Definición de la primera función 
window.computeStudentsStats = (laboratoria) => {
    //declaración de variables:
    const student = [{
        name: "",
        campus: "",
        generation: "",

    }];
    console.log(student);
    //se inicia la iteración en el primer nivel del objeto para obtener sus keys
    for (findSede in laboratoria) {
        student.campus = findSede;
        console.log("sedes", student.campus)
        //console.log('1', Object.keys(laboratoria[findSede].generacion));
        const generations = Object.keys(laboratoria[findSede].generacion);
        console.log("generations", generations);
        for (let i = 0; i < generations.length; i++) {
            const findGeneration = Object.keys(laboratoria[findSede].generacion[generations[i]]);
            student.generation = findGeneration;
            console.log("objeto estudiante", student.generation);
            for (let i = 0; i < findGeneration.length; i++) {
                const findStudentList = laboratoria[findSede].generacion[generations[i]].estudiantes;
                //studentList = Object.keys(findStudentList);
                //console.log("lista de estudiantes", studentList);
                findStudentList.map((itemStudent) => {
                    let itemStudent1 = {}; 
                    itemStudent1[itemStudent] = itemStudent.nombre;
                    //console.log(itemStudent1);
                    student.name = itemStudent1;
                    console.log("nombre:", student.name);
                    return student.name;
                    // console.log(itemStudent)});
                    // for (let i= 0; i < itemStudent.length; i++) {
                    //     const findEachName = itemStudent.nombre;
                    //     console.log("Nombre de cada estudiante",findEachName);
                     })
                
                // for (findEachStudent of studentList) {
                //     console.log("Número de cada estudiante", studentList[findEachStudent]);
                //         // for (let i =0; i < findEachStudent.length; i++) {
                        // const findStudentName = findEachStudent[0].nombre;
                        // student.name = findStudentName;
                        // console.log("lista de nombres", student.name);
                        // }
                     
                //     console.log("Nombre dentro de cada array", findStudentName);
                //     
                //    // 
                //}
                    }
            //console.log(laboratoria[findSede].generacion[generations[i]].estudiantes);
        }
    }

    //     for (propertyname in laboratoria) {
    //        const sedes = Object.keys(laboratoria[i])
    //        console.log(sedes);

    //     };
    //     for (propertynames in laboratoria.generacion) {
    //         const generation = Object.keys(laboratoria[i].generacion);
    //         console.log(generation);    
    //     };    
    //     console.log();
    // }
    // return sedes = new Array [""];
    //laboratoria[0] ${'campus:'} + propertyname ) 

    //se cierra la función
}

// console.log("data.js está conectado");

// const pintarSedes = (data) => {
//     const ul = document.getElementById("ul-prueba");
//     for (let i in data) {
//         const listSedes = document.createElement("li");
//         const listLink = document.createElement("a");
//         listLink.innerHTML = i;
//         listSedes.classList.add("menu");
//         listSedes.addEventListener("click", prueba);
//         listSedes.appendChild(listLink);
//         ul.appendChild(listSedes);
//      }
// }
// const prueba = (event) => {
//     console.log(event.target);
// }
// //Se crea el objeto dataDashboard como método del objeto window
// window.dataDashboard = {
//     //asignar la función de pintar como propiedad y llamarla dentro del main
// conectado : () => { console.log("holaDashBoard");},
// getData : (laboratoria) =>  {
//     laboratoriaData = "";
//     console.log(laboratoria);

// //Realizar enlace fetch con arrow function
//     fetch(laboratoria)
//     .then((response) => {
//        // laboratoriaData = response.json();       
//         console.log(response);
//         return response.json()
//     }).then((chooseSede) => {
//         //se ejecuta como .json
//         console.log("Data",chooseSede);
//     //Debe enlazar la funcion al click en "sedes"
//         pintarSedes(chooseSede)


/* if (addEventListener("click", sedeLima)) { 
     const sedeLima = () => {
         chooseSede = laboratoria.lima; 
         console.log(chooseSede);
         if (addEventListener("click", terceraGen)) {
             chooseSede = lima.tercera;
             console.log(chooseSede);
         }
         else if (addEventListener("click", cuartaGen)) {
             chooseSede = lima.cuarta;
             console.log(chooseSede);
         }
         else {
             chooseSede = lima.quinta;
             console.log(chooseSede);
         }
     }
 }
 else if (addEventListener("click", sedeMx)) {
     const sedeMX = () => {
         chooseSede = laboratoria.mexico;
     }
 }
 else {
     const sedeSantiago = () => {
         chooseSede = laboratoria.santiago;
     }
//     }*/
// })
// .catch((error) => {
//     console.log("errordeMV", error);
// });

// }
//se cierra getData




window.computeGenerationsStats = (laboratoria) => {


};

window.sortStudents = (students, orderBy, orderDirection) => {

};

window.filterStudents = (students, search) => {

}

//se cierra el método getData del objeto dataDashboard




//cierre del objeto window
//};

