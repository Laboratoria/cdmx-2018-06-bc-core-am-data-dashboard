
const container = document.getElementById('result'); 
 
laboratoria = (data) =>{
  document.getElementById('boton1').addEventListener('click', (event) => {
    let estudiante = data.lima.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    for(progress  of  estudiante){
      let pro = progress.progreso;
     for (let i = 0; i < estudiante.length; i++) {
      let nombres = estudiante[i];
      result += `   
          <tr>
            <th scope="row"></th>
            <td>${nombres.nombre}</td>
            <td>${nombres.correo}</td>
            <td>${nombres.turno}</td>
            <td>${pro.duracionPrograma}</td>
            <td>${pro.porcentajeCompletado}</td>
           </tr>
          
                         `;
        }
      
  
        container.innerHTML = result;
        return result;
      
    }
  })
  


  document.getElementById('boton2').addEventListener('click', (event) => {
    let estudiante = data.santiago.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    let x = 0;
    let y = 0;
    let z = 0;
    for (progress of estudiante) {
      let pro = progress.progreso.porcentajeCompletado;
      // console.log(estudiante);
      // console.log(progress); 
      // console.log(pro);
      if (pro >= 60){
        x++;
      } else if (pro <= 60){
        y++;
      }else if (pro >= 90){
        z++;
      }
      console.log(x);
      console.log(y);
      console.log(z);
      
      for (let i = 0; i < estudiante.length; i++) {
        let nombres = estudiante[i];
        result += `<div class="card">
            <div class = "estudiante">
          
            <p>nombre: ${nombres.nombre}</p>
            <p>Correo: ${nombres.correo}</p>
            <p>Turno: ${nombres.turno}</p>
            <p>Duracion del programa: ${pro.duracionPrograma}</p>
            <p>Porcentaje completado: ${pro.porcentajeCompletado}</p>
            </div>
            </div> `;
      }
      
    };
    container.innerHTML = result;
    return result;
  }),


  document.getElementById('boton3').addEventListener('click', (event) => {
    let estudiante = data.mexico.generacion.cuarta.estudiantes;
    let progress = estudiante.progreso;
    let result = '';
    for (progress of estudiante) {
      let pro = progress.progreso;
      // console.log(pro);
      for (let i = 0; i < estudiante.length; i++) {
        let nombres = estudiante[i];
        // console.log(nombres);
        result += `<div class="card">
          <div class = "estudiante">
        
          <p>nombre: ${nombres.nombre}</p>
          <p>Correo: ${nombres.correo}</p>
          <p>Turno: ${nombres.turno}</p>
          <p>Duracion del programa: ${pro.duracionPrograma}</p>
          <p>Porcentaje completado: ${pro.porcentajeCompletado}</p>
          </div>
          </div> `;
      }
      container.innerHTML = result;
      return result;
    }
    })
};