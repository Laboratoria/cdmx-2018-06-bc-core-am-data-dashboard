let laboratoria = fetch("https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json")
  .then((response) => response.json())
  .then((dataJSON) => {
    return dataJSON;
  });

window.dataDashboard  = {

	loadSedes : () => {
    laboratoria.then(function(dataJSON) {
        let keys = Object.keys(dataJSON);
        setDrawSedes(keys);
    });
	},

  loadGeneration : (sede) => {
    laboratoria.then(function(dataJSON) {
        let keys = Object.keys(dataJSON[sede]['generacion']);
        console.log(sede);
        console.log(keys);
        return keys;
    });
	},


};
