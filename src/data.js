window.global = {
  //Se genera una función y dentro de ella una constante con la url del JSON para llamarlo
  computeStudentsStats: (laboratoria) => {
    const url = `https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        const generaciones = data.lima.generacion;
        estudiante(data)
      })
  }
};

estudiante = (data) => {
  let estudiante = data.lima.generacion.cuarta.estudiantes;
  let result = "";
  for (let i = 0; i < estudiante.length; i++) {
    let nombres = estudiante[i];
    //console.log(nombres, pintar);
    result = result + `
          <tr>
            <th scope="row"></th>
            <td>${nombres.correo}</td>
            <td>${nombres.nombre}</td>
            <td>${nombres.turno}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
`
  }
  //Impresión del resultado
  pintar.innerHTML = result;
}
