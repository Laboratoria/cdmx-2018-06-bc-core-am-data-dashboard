// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
// la direccion para utilizar el JSON se sacó de la pagina http://myjson.com/ la cual creo una API para poder extraer los datos de JSON

let urlDirection = 'https://api.myjson.com/bins/9n48i';
let sede = document.getElementById('sedes');
console.log(sede);

// let sedeLima = document.querySelector('#botonesSede');
// let sedeMexico = document.querySelector('#botonesSede1');
// let sedeSantiago = document.querySelector('#botonesSede2');
// let btn = document.querySelector('#lima');
// let btn1 = document.querySelector('#cdmx');
// let btn2 = document.querySelector('#santiago');

// usando el boton de las sedes llamamos a la función para que aparezca en consola data>lima>generacion>cuarta
// addEventLister, escucha los eventos del DOM
sede.addEventListener('change', function (e) {
  let index = e.target.selectedIndex;
  let campus = e.target[index].dataset.sede;
  let generation = e.target[index].dataset.gen;


  // con el fetch se extrae la data del JSON y se realiza a través de promesas(then).
  fetch(urlDirection).then(function (datos) {
    // se retornan los datos del jason
    return datos.json();
  }).then(function (data) {
    // Object.keys, devuelve un array cuyos elementos son strings correspondientes
    // a las propiedades enumerables que se encuentran dentro de un OBJETO
    let infoEst = data[campus].generacion[generation].estudiantes;
    console.log(infoEst);
    const container = document.getElementById('result');
    

    //let estudiantes = data[sedes[i]].generacion[generaciones[j]]//.estudiantes;
    for (let l = 0; l < infoEst.length; l++) {
      document.getElementById('tabla').innerHTML +=
        `<div class="card">
        <div class="info">
        <p>Nombre: ${infoEst[l].nombre}</p>
        <p>Correo: ${infoEst[l].correo}</p>
        <p>Turno: ${infoEst[l].turno}</p>
        <p>Progreso: ${infoEst[l].progreso.porcentajeCompletado}</p> `
    }

    document.getElementById('delete').addEventListener('click', (event) => {
      container.innerHTML = '';
      console.log(container);
    })

    console.log(infoEst);

    let sedes = Object.keys(data);

    // va a crear un arreglo dentro de un arreglo 
    let arrFinal = [];

    // sede es un arreglo
    // variableSedes es un ARREGLO, el for se repite hasta que la condición especificada se evalúa como false.
    // es un bucle o un loop, tambien es un ciclo que se repite un número especifico de veces,
    // en este caso se repetira hasta que recorra todas las sedes de la variable Sedes
    // .length de un objeto String representa la longitud de una cadena
    for (let i = 0; i < sedes.length; i++) {
      let drawSede = sedes[i];
      // sede.innerHTML = drawSede;

      // el loop recorre las 3 generaciones de la variable generaciones
      let generaciones = Object.keys(data[sedes[i]].generacion);

      for (let j = 0; j < generaciones.length; j++) {
        let drawGeneracion = generaciones[j];
      
        // el map  recorre todas las respuestas y devuelve un arreglo con las promesas de extraer la respuesta en JSON.
        // en este caso recorre la variable de estudiantes y nos regresa los arreglos dentro de ellas(nombre, mail,campus,%, etc..)
        let est = infoEst.map((usuario) => {
          // console.log(usuario);


          let porcentajeCompletado = usuario.progreso.porcentajeCompletado;
          let status = '';

          // si el porcentaje de completado es menor de 60, nos mostrara a las estudiantes con bajo desempeño
          if (porcentajeCompletado < 60) {
            status = 'Estudiante con bajo desempeño';

            // si no se cumple la primera entonces nos mostrara a las estudiantes que tengan un alto desempeño
          } else if (porcentajeCompletado > 90) {
            status = 'Estudiante con alto desempeño';

            // de no cumplirse ninguna de las dos anteriores se mostraran a las alumnas que se encuntran a la mitad del desempeño.
          } else {
            status = 'Estudiantes con desempeño medio';
          }

          // aquí se va a retornar la funcion de .map
          return {
            'name': usuario.nombre,
            'email': usuario.correo,
            'campus': drawSede,
            'generation': drawGeneracion,
            'stats': {
              'status': status,
              'completedPercentage': porcentajeCompletado,
            }
          };
        });
        arrFinal.push(est);
        // console.log(est);
      }
      // console.log(arrFinal);

      // concat se utiliza para unir dos o más arrays, no cambia el array existente; lo que va a hacer es devolver uno nuevo
      // arrconsolidado, nos va a unir el array que hemos creado y lo va a separar en objetos.
      let arrConsolidado = arrFinal[0].concat(
        arrFinal[1],
        arrFinal[2],
        arrFinal[3],
        arrFinal[4],
        arrFinal[5],
        arrFinal[6],
        arrFinal[7],
        arrFinal[8]);




      


      // console.log(arrConsolidado);



      // let  = document.getElementById('sedeLima');
      // for (let k = 0; k < arrFinal.length; k++) {
      //   console.log(arrFinal);
      //   const alumnasLima = name.filter();
      //   console.log(alumnasLima);
      // }


      // for (let sedeLima in alumnasLima){
      //  sedeLima = document.createElement("alumnas");
      //  
      //  //sedeLima.textContent = mostrasAlumnas;
      //
      //  arrConsolidado.appendChild(sedeLima);
      //  console.log(arrConsolidado.appendChild);
      //  
    }


    // .filter
  });
});
// lima.innerHTML = arrFinal;