// let json = ("https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json");
//
// //Aqui se trata el json
// const getData = () => {
//     fetch(json)
//     .then( response => response.json() )
//     .then((res) => {
//         const generations = window.getCampus(res);
//         //const users = computeStudentsStats(res);
//         //drawCampus(res);
// 				//drawCampus(generations);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }
// //Se trata al json
// getData();
//
//
// //Elemento select para agregar las sedes
// const containerCampus = document.getElementById('campus');
//
// //Muestra las sedes
// const drawCampus = (data) => {
// 	const option = document.createElement('option');
// 	option.innerHTML = data;
// 	containerCampus.appendChild(option);
// };
//
// //Muestra las generaciones
// const drawGenerations = (e) => {
//     //computeGenerationsStats(laboratoria)
// };







const container = document.getElementById("container-info");

drawCampus = (arrayCampus) => {
  let result="";
  for (let i = 0; i < arrayCampus.length; i++) {
    result += `<option value="volvo">${arrayCampus[0]}</option>`;
  }
}

// getData = (data) => {
  // console.log(Object.values(data)[0]);
  // console.log(Object.values(data)[1]);
  // console.log(Object.values(data)[2]);
  // document.getElementById("btn").addEventListener("click", (event) =>
  // {
  //   let result = "";
  //   console.log(Object.values(data)[0]);
  //   const info = Object.values(data)[0];
  //   for (let i = 0; i < info.length; i++) {
  //     console.log(info[i].progress.javascript);
  //     result += `<div class="card">
  //                 <div class="info">
  //                 <p>Nombre: ${info[i].name}</p>
  //                 <p>Active: ${info[i].active}</p>
  //                 <p>Progress JavaScript: ${info[i].progress.javascript}</p>
  //                 <p>Progress UX: ${info[i].progress.ux}</p>
  //                 </div>
  //               </div>`
  //   }
  //   container.innerHTML = result;
  // });
// }
