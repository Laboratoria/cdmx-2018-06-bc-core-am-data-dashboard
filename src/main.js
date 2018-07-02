
let goes= document.getElementById("go");
goes.addEventListener("click",go())
go =()=>{
  if (document.form.password.value=='tmmex2018' && document.form.login.value=='Lucile'){ 
          document.form.submit(); 
          let generaciones =gettinAPI(laboratoria);
          let cardTitle= document.getElementById("cards");
          let contry = document.createElement("p");
          contry.innerHTML=generaciones[4].generacion;
          cardTitle.appendChild(contry);
      } 
      else{ 
           alert("Porfavor ingrese Usuario y Contraseña correctos."); 
      } 
  } 

const laboratoria = "https://api.myjson.com/bins/1amyo6";
let getData = document.getElementById("get");
let result = document.getElementById("result");

getData.addEventListener("click", gettingData);
function gettingData() {
  result.innerHTML = gettinAPI(laboratoria);
}
/*gettinAPI genera acceso al obj de laboratoria.json que se encuentra en la API
por medio de FETCH*/
  const gettinAPI = (laboratoria) => {
    fetch(laboratoria)
    .then(data => data.json())
    .then((data) => {
       //const venues = computeVenuesStats(data);
       const generations = computeGenerationsStats(data);
       //const students = computeStudentsStats(data);
       //const orderBy ="percentage";
       //const orderDirection = "DESC";
       //const sort =sortStudents(students, orderBy, orderDirection);
       //const search = 'Aileen Edwyna';
       //const filter = filterStudents(students,search);
       //const students = deepStudentsStats(data);
       
    })
    .catch((error) => {
      console.log(error);
      //Ve a pagina de error si no hay conexión
      //window.location="../views/errorFiles/errorpopup.html";
      console.log("Error");
    });
    return generations;
  }


