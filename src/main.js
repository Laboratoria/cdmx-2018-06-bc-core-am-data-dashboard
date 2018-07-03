
//llamamos el json desde servidor
const json = "https://raw.githubusercontent.com/ViniciaLaraRangel/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//creamos una funcion que acceda a los datos json
const getData = () => {
fetch(json)

  .then(response => response.json())
  .then((res) => {
const generations = computeGenerationsStats(res);
console.log(generations);
const users = computeStudentsStats(res);
})
  .catch((error) => {
    console.log("error Judith");
  });
}

//getData();

 const drawCampus = (data) => {
    const sedes = Object.keys(data);
    const containerCampus = document.createElement("mostrar");
    sedes.forEach((sede) => {
    const option = document.createElement("option");
      option.innerHTML = sede;
      containerCampus.appendChild("mostrar");

    });
    containerCampus.addEventListener("change",drawCampus);
};
  const drawGenerations = (e) => {
  //  computeGenerationsStats(laboratoria);
  };

  document.getElementById("campus").addEventListener("click",getData);
