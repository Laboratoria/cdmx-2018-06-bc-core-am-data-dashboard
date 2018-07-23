// const host = '../data/laboratoria.json';
//const accessNav = document.getElementById("access-nav");
//accessNav.style.display = "none";

//Menú lateral desplegable Materialize frame  with jQuery
$(document).ready(function() {
  $(".sidenav").sidenav();
});
$(".dropdown-trigger").dropdown();

//git cloud host
const host =
  "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
console.log(host);

// LOGIN
let enter = document.getElementById("login");
let userSingin = document.getElementById("button-login");
const welcomeMessage = document.getElementById("welcome1");

userSingin.addEventListener("click", event => {
  let userEmail = document.getElementById("user-email").value;
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  if (userEmail === "lucile@laboratoria.la" && password === "Devendra") {
    enter.style.display = "none";
    const welcome = `<h4> ¡Bienvenida </h4>`;
    welcomeMessage.innerHTML = welcome + user + "!";
    accessNav.style.display = "block";
  } else {
    alert(
      `Password or User Name incorrect. 
            If you forget your password please contact us at email support@Mich&Vania.com
                
                  Have a nice day.
                  Best rewards, Mich&Vania Co. `
    );
  }
});
// LOG OUT
// const logOut = document.getElementById("exit");
// logOut.addEventListener("click", event => {
//   accessNav.style.display = "none";
//   enter.style.display = "block";
// });

//dropdown desplegable

// se inserta dentro del objeto window con método onload para que cargue inmediatamente entrando
window.onload = () => {
  fetch(host)
    // obtenemos la traducción del host a .json para que sea leído
    .then(response => response.json())
    // haremos una segunda promesa que guarda en data el response.json
    .then(laboratoria => {
      computeStudentsStats(laboratoria);
      computeStudentsStats();
      computeGenerationsStats(laboratoria);
      computeGenerationsStats();
      // createInfo es una función que se declara en el data.js para crear elementos en DOM
    })
    .catch(error => {
      console.log(error);
      // .catch buscará errores en el enlace FETCH
    });
};

// FUNCIONES PARA PINTAR DATOS DE LA SEGUNDA FUNCIÓN:
const container = document.getElementById("result");

printerComputeStudentsStats = studentLab => {
  document.getElementById("all-Students").addEventListener("click", event => {
    // console.log(studentLab);
    let result = "";

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
              <td> ${totalInfo[i].campus}</td>
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

document.getElementById("delete").addEventListener("click", event => {
  container.innerHTML = "";
});

printercomputeGenerationsStats = generations => {
  document.getElementById("btnG").addEventListener("click", event => {
    let result = "";
    const totalInfoG = Object.values(generations);
    for (let i = 0; i < generations.length; i++) {
      result += `<div class='table-responsive'>
      <table class='table'>
        <thead> Progress by Generations
          <tr>
            <th> Generation </th>
            <th> Campus </th>
            <th> Total Students </th>
            <th> Average </th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td> ${totalInfoG[i].generation}</td>
              <td> ${totalInfoG[i].campus}</td>
              <td> ${totalInfoG[i].count}</td>
              <td> ${totalInfoG[i].average}</td>
            </tr>
          </tbody>
          </table>
          </div>`;
      // console.log(result);
      console.log(container2);

      container2.innerHTML = result;
    }
  });
};

document.getElementById("delete").addEventListener("click", event => {
  container2.innerHTML = "";
});
