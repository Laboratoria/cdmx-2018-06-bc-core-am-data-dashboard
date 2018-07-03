window.data = {
    cargandoDatos:() => {
      let laboratoria = fetch('https://raw.githubusercontent.com/ViniciaLaraRangel/cdmx-2018-06-bc-core-am-data-dashboard/javascriptFetch/data/laboratoria.json');
//Primera función para los test
      data.computeStudentsStats(laboratoria);
    },

      computeStudentsStats: (laboratoria) => {
              laboratoria.then(function(res){
                  return res.json();
              })
              .then(function(data){
                  let sedes = Object.getOwnPropertyNames(data);
                  let generaciones = Object.values(data);
                //Aquí hay que agregar el bucle que defina. PREGUNTAR AMALIA
                  //console.log(sedes);
                    //generaciones titulo
                  generaciones.forEach(function (elements){
                    let generation = Object.values(elements.generacion);
//error
                    generation.forEach(function (elements2){
                      let estudiantes = elements2.estudiantes;
                      estudiantes.forEach(function(elements3){
                          //let infoEstudiantes =Object.values(elements3);
                              let porcentajeCompl = elements3.progreso;
                              let nombres = elements3.nombre;
                                //console.log(nombres);
                    })

                    })

                  })
                  /*let obtenidos = data.lima.generacion.cuarta.estudiantes;
                  //console.log(data.lima.generacion.cuarta.estudiantes)
                  let contenedor = '';
                  obtenidos.forEach(element => {
                      contenedor += `<li>${element.nombre}</li>`;
                      //console.log(element.nombre);

                  });
                  let retornados = JSON.stringify(contenedor);
                  let result =  document.getElementById("resultado");
                  result.insertAdjacentHTML("beforeEnd", contenedor)
                  //console.log(retornados);*/
                  let obtenidos = data.lima.generacion.cuarta.estudiantes;
                  let i = 1;
                  let j = 1;
                  obtenidos.forEach(element =>{
                     document.getElementById(`nombre${i++}`).innerHTML = element.nombre;
                     let students = Object.values(element.progreso);  
                    document.getElementById(`porcentaje${j++}`).innerHTML = element.progreso.porcentajeCompletado;
                  })
              })
      },

      computeGenerationsStats: () => {

      },

      sortStudents: () => {

      },

      filterStudents: () => {

      }

   }
   /*


   fetch('../data/laboratoria.json')
   .then(function(res){
      return res.json();
   })
   .then(function(data){
          let laboratoria = data.lima.generacion.cuarta.estudiantes;
         let resultado = JSON.stringify(laboratoria);
         console.log(resultado);
          document.getElementById('resultado').innerHTML = resultado;
   })*/
