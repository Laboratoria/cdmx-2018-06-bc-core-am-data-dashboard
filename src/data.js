//window.data
const gettingData= ()=> {
    let url = "https://api.myjson.com/bins/1hcchi"
    let laboratoria = fetch(url);
    data.computeStudentsStats(laboratoria);
},

computeStudentsStats: (laboratoria)=> {
    laboratoria.then(res => res.json())
    .then(dato => {
       let sede = Object.getOwnPropertyNames //esta imprime las propiedades del objeto (Lima.CDMX,Santiago)
       let generación = Object.values(data); // esta imprime los valores de esas propiedades
    }
}


//     then(data => data.json())
//     .then(data => {
//         console.log(data);
//     });
// }
// gettingData();


/*window.computeStudentsStats = () => {

};

window.computeGenerationsStats = () => {

};

window.sortStudents = () => {

};

window.filterStudents = () => {

}; */
