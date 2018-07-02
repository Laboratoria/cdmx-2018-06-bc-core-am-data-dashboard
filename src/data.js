window.global = {
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
      for (let i = 0; i <estudiante.length; i++) {
        let nombres = estudiante[i];
        //console.log(nombres, pintar);
        result = result + `
          <tr>
            <th scope="row">1</th>
            <td>${nombres.correo}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${estudiante.nombre}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${nombres.turno}</td>
            <td></td>
            <td></td>
          </tr>


`


      }
      pintar.innerHTML = result;
    }
