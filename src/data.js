// window.data = {
//   computeStudentsStats: () => {
//      let objData = $.getJSON("laboratoria.json", function(response){
//       console.log(objData);
//     });
//     // $.getJSON("laboratoria.json", function(response){
//     //   console.log(response);
//     // });
//   },
//     //return "Hola" },
//   computeGenerationsStats: () => { },
// };
var keys = Object.keys(data);
let select = document.getElementById('selectsedes');

for (let i = 0; i < keys.length; i++) {
  	var opt = document.createElement('option');
    opt.value = keys[i];
    opt.innerHTML = keys[i];
    select.appendChild(opt);
};
