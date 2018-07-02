console.log("data.js está conectado");
//Asignar variable a laboratoria.json desde el localhost
const laboratoria = "../data/laboratoria.json";
console.log(laboratoria);

//Se crea el objeto dataDashboard como método del objeto window
window.dataDashboard = {
conectado : () => { console.log("holaDashBoard");},
getData : () =>  {
   laboratoriaData = "";
//Realizar enlace fetch con arrow function
fetch(laboratoria).then((response) => {laboratoriaData = response.json();       
    console.log(laboratoriaData);
})
//se ejecuta como .json
.then((chooseSede) => {
    console.log(response);
//Debe enlazar la funcion al click en "sedes"
        if (addEventListener("click", sedeLima)) { 
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
        }
    })
    .catch((error) => {
        console.log("errordeMV");
    });

    }
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
};
