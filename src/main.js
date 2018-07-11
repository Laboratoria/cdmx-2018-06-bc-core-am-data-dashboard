const url = 'https://raw.githubusercontent.com/emeraldng/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

window.onload = () => {
  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          //esta func aun no existe, aqui van tantas fun necesites con la misma info
          renderInfo(data);

      })
      .catch(error => {
          console.log('errormio');

      })


}