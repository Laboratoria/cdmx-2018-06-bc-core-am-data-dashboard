const url = 'http://api.myjson.com/bins/1efx86';

//la data se carga el reload la pagina
window.onload = () => {
    fetch(url)
    .then( response => response.json() )
    .then((data) => {
        //aquí van toda las funciones que ultilizaran la data (las de window y las de dibujar)
        console.log(data)
        computeStudentsStats(data);
        computeGenerationsStats(data)
        sortStudents(data)
        filterStudents(data)
    })
    .catch((error) => {
        console.log(error);
    });
}



