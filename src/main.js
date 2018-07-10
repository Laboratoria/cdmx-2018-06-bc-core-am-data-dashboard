<<<<<<< HEAD
//Paso uno: Traemos la dirección del servidor propio
//const host = '../data/laboratoria.json';
const host = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
console.log(host);
//se inserta dentro del objeto window con método onload para que cargue inmediatamente entrando
window.onload = () => {
  fetch(host)
    //obtenemos la traducción del host a .json para que sea leído
    .then(response => response.json())
    //haremos una segunda promesa que guarda en data el response.json
    .then((laboratoria) => {
      computeStudentsStats(laboratoria);
      //console.log(laboratoria);
      computeStudentsStats();
      computeGenerationsStats(laboratoria);
      computeGenerationsStats();
      //createInfo es una función que se declara en el data.js para crear elementos en DOM
    })
    .catch((error) => {
      console.log(error);
      //.catch buscará errores en el enlace FETCH
    })

};

//window.computeGenerationsStats(laboratoria);

//manejar DOM para imprimir los datos de estudiantes en lista
// document.getElementById('btn-students').addEventListener("click", (event) => {
//   let result = "";
//   console.log( );
//   } )
//VARIABLES DE LA SEGUNDA FUNCIÓN

let generations = [];
//objetos generation
let campus = "";
let generation = "";
let average = "";
let count = "";

//usage 
let eachGenPercent = 0;
let totalStudentsOfHoleWorld = 0;

//---- se introduce sentencia para ligar al botton de siguiente Pantalla-1//
document.getElementById('delete').addEventListener('click', (event) =>{
  container.innerHTML ="";
})
=======
// Paso uno: Traemos la dirección del servidor o de un link 
>>>>>>> upstream/FETCH

// const host = '../data/laboratoria.json';
const host = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
console.log(host);

// LOGIN PROVISIONAL
let enter = document.getElementById('login');
let userSingin = document.getElementById('buttonLogin');

userSingin.addEventListener('click', event => {
  let user = document.getElementById('user').value;
  let password = document.getElementById('password').value;
  if (user === 'lucile@laboratoria.la' && password === 'Devendra') {
    enter.style.display = 'none';
    // document.write('Welcome' + 'Lucile !');
  } else {
    alert(
      `Password or User Name incorrect. 
            If you forget your password please contact us at email support@Mich&Vania.com
                
                  Have a nice day.
                  Best rewards, Mich&Vania Co. `);
  }
});

    // se inserta dentro del objeto window con método onload para que cargue inmediatamente entrando
    window.onload = () => {
      fetch(host)
      // obtenemos la traducción del host a .json para que sea leído
        .then(response => response.json())
      // haremos una segunda promesa que guarda en data el response.json
        .then((laboratoria) => {
          computeStudentsStats(laboratoria);
          computeStudentsStats();
          computeGenerationsStats(laboratoria);
          computeGenerationsStats();
          // createInfo es una función que se declara en el data.js para crear elementos en DOM
        })
        .catch((error) => {
          console.log(error);
          // .catch buscará errores en el enlace FETCH
        });
    };

    // FUNCIONES PARA PINTAR DATOS DE LA SEGUNDA FUNCIÓN:
    const container = document.getElementById('result');

    printerComputeStudentsStats = (studentLab) => {
      document.getElementById('btn').addEventListener('click', (event) => {
        // console.log(studentLab);
        let result = '';

        // console.log(Object.values(studentLab));
        const totalInfo = Object.values(studentLab);
        // console.log(totalInfo);
        for (let i = 0; i < totalInfo.length; i++) {
          // console.log(totalInfo[i]);
          result += `<div class='table-responsive'>
      <table class='table'>
        <thead>
          <tr>
            <th> Photo </th>
            <th> Full Name </th>
            <th> Email </th>
            <th> Generation </th>
            <th> Turn </th>
            <th> Campus </th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td> <img src='../images/venussymbol.jpg' id='perfil-image'> </td>
              <td> ${totalInfo[i].name}</td>
              <td> ${totalInfo[i].email}</td>
              <td> ${totalInfo[i].generation}</td>
              <td> ${totalInfo[i].turn}</td>
              <td>Lima ${totalInfo[i].campus}</td>
            </tr>
          </tbody>
          </table>
          </div>`;
    
          // console.log(result);
          console.log(container);
    
          container.innerHTML = result;
        }
      });
    };

    document.getElementById('delete').addEventListener('click', (event) =>{
      container.innerHTML = '';
    });
 
 
