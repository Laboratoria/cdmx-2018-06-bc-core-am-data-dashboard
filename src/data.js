
console.log("conectado");

const showResult = document.getElementById("result-list");
//Definición de la primera función 
window.computeStudentsStats = (laboratoria) => {
//declaración de variables:
const student = [{
    name: "",
    campus: "",
    generation:"",
    
}];
console.log(student);
//se inicia la iteración en el primer nivel del objeto]]]
            for (findSede in laboratoria) {
                student.campus = findSede;
                console.log('1', Object.keys(laboratoria[findSede].generacion));
                const generations = Object.keys(laboratoria[findSede].generacion);
                     for (let i = 0; i < generations.length; i++) {
                        const findGeneration = laboratoria[findSede].generacion[generations[i]];
                        student.generation = Object.keys(findGeneration);
                        console.log('2', student.generation);
                            for (let i = 0; i < findGeneration.length; i++) {
                            const findName = laboratoria[findSede].generacion[generations[i]].estudiantes;
                            student.name = Object.keys(findName);
            
                            console.log('3', student.name);
                        }
                     console.log(laboratoria[findSede].generacion[generations[i]].estudiantes);
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

 /*
const computeStudentsStats = (laboratoria) => {

}

const computeGenerationsStats = (laboratoria) => {


}

const sortStudents = (students, orderBy, orderDirection) => {

}

const filterStudents = (students, search) => {

}

//se cierra el método getData del objeto dataDashboard
}
*/


//cierre del objeto window
//};

