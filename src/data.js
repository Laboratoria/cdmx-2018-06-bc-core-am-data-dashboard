//Se crea el objeto dataDashboard como método del objeto window
window.dataDashboard = {

getData : (laboratoria) =>  {
//Realizar enlace fetch con arrow function
const gettingFetch = () => {
    fetch(laboratoria).then((response) => {response.json(); })
    console.log(response.json)
//se ejecuta como .json
    .then((sedes) => {
//Debe enlazar la funcion al click en "sedes"
        
const chooseSede = "";
        if (addEventListener("click", sedeLima) = true) { 
            const sedeLima = () => {
                chooseSede = laboratoria.lima;
                
            }
         }
        else if () {
            const sedeMX = () => {
                chooseSede = laboratoria.mexico;
            }
        }
        else () {
            const sedeSantiago = () => {
                chooseSede = laboratoria.santiago;
            }
        }
    })
    .catch((errordeM&V) => {
        console.log(errordeM&V);
    });
        

    })
}

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
//cierre del objeto window
};