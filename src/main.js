let json = ("https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json");

//Aqui se trata el json
const getData = () => {
    fetch(json)
    .then( response => response.json() )
    .then((res) => {
        const generations = window.getCampus(res);
        //const users = computeStudentsStats(res);
        drawCampus();
				//drawCampus(generations);
    })
    .catch((error) => {
        console.log(error);
    });
}

//Se trata al json
getData();


//Elemento select para agregar las sedes
const containerCampus = document.getElementById('campus');

//Muestra las sedes
const drawCampus = (data) => {
	const option = document.createElement('option');
	option.innerHTML = data;
	containerCampus.appendChild(option);
};

//Muestra las generaciones
const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
};
