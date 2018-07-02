const api = 'https://api.myjson.com/bins/1efx86';

const getData = () => {
    fetch(api)
    .then( response => response.json() )
    .then((res) => {
        const generations = computeGenerationsStats(res);
        const users = computeStudentsStats(res);
        drawCampus(generations);
    })
    .catch((error) => {
        console.log(error);
    });
}

getData();

const drawCampus = (data) => {
    const sedes = Object.keys(data);

    const containerCampus = document.getElementById('campus');
    sedes.forEach((sede) => {
        const option = document.createElement('option');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    });

    containerCampus.addEventListener('change', iteratorGenerations);
};


const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
};