const computeStudentsStats = (laboratoria) => {
    //  console.log(datos)
    let numEst = laboratoria.lima.generacion.cuarta.estudiantes;
    
    name.innerHTML = "";
    
    for (let i = 0; i < numEst.length; i++) {
        name.innerHTML += `
        <tr>
        <th scope="col"> ${numEst[i].nombre}</th>
        <th scope="col"> ${numEst[i].correo}</th>
        </tr>
        `
    }
}