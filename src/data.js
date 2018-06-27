
const gettingData= ()=> {
    let url = "https://raw.githubusercontent.com/DianaCarrillo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"

    fetch(url).then(data => data.json())
    .then(data => {
        console.log(data);
    });
}

gettingData();


window.computeStudentsStats = () => {

    let student = [ 
        {
            name: 
        }

};

window.computeGenerationsStats = () => {

};

window.sortStudents = () => {

};

window.filterStudents = () => {

};    
