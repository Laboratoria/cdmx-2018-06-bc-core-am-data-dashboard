window.computeStudentsStats = () =>{

};
window.computeGenerationsStats = () =>{

};
window.sortStudents = () => {

};
window.filterStudents = () => {

};


//url para obtener el json
let url = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";

window.onload = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    render(data);
  })
  .catch(error => {
      console.log('error');
  })
}