// let requestURL = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//   let datos = request.response;
//   console.log(datos);
// }
const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
const getData = () => {
  fetch(url)
  .then(resp => resp.json())
  .then(result => console.log(resp));

}; 
