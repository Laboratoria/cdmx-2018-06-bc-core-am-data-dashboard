//Funciones y data en este archivo
const pullInformation = () =>{ //Funcion para jalar la data
    const link= 'https://alppacat.github.io/data-dashboard/data/laboratoria.json'; //Variable para jalar la data
    fetch(link).then (response => response.json())
    .then(datos => {
        console.log(datos);
        
    })
}
 pullInformation();

window.computeStudentsStats= () => {
    

};

 window.computeGenerationsStats = ()=> {

 };

 window.sortStudents = () => {

 };
 window.filterStudents = () => {

};
