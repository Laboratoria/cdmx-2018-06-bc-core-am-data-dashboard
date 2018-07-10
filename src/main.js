const url = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// Se genera una función y dentro de ella una constante con la url del JSON para llamarlo
window.onload = () => {
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
      laboratoria(data);
    })
    .catch(error =>{
      console.log('Te equivocaste');
    });
};