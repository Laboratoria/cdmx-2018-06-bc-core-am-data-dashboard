//let api = "https://api.myjson.com/bins/1efx86"

const json = 'https://api.myjson.com/bins/1efx86';

const getData = () => {
    fetch(json)
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
