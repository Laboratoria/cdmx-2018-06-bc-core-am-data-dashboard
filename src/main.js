
let goes= document.getElementById("go");
goes.addEventListener("click",go())
go =()=>{
  if (document.form.password.value=='tmmex2018' && document.form.login.value=='Lucile'){
          document.form.submit();
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
         //const generations = computeGenerationsStats(data);
         const students = computeStudentsStats(data);
         //const orderBy ="percentage";
         //const orderDirection = "DESC";
         //const sort =sortStudents(students, orderBy, orderDirection);
         const search = 'Aileen Edwyna';
         const filter = filterStudents(students,search);
         //const Students = deepStudentsStats(data);

         //printGenerations(generations);
         //printVenues(venues);
         //printGenerations(generations);
         //printStudents(students);
         //printSort(sort);
         printFilter(filter);
      })
      .catch((error) => {
        console.log(error);
        //Ve a pagina de error si no hay conexión
        //window.location="../views/errorFiles/errorpopup.html";
        console.log("Error");
      });
    }
    //gettinAPI(laboratoria);

  const printVenues = (venues) =>{
    const sedesConteiner = document.getElementById('venues');
    const sedes = (venues);
    sedes.forEach((sede)=>{
      const place = document.createElement('option');
      place.innerHTML = Object.values(sede);
      sedesConteiner.appendChild(place);
    });
  };
  const printGenerations = (generations) =>{
    const generacionesConteiner = document.getElementById('venues');
    //const generaciones = Object.keys(generations);
    const generaciones = (generations);
    //console.log(generations);
    generaciones.forEach((generacion)=>{
      const place = document.createElement('option');
      place.innerHTML = Object.values(generacion);
      generacionesConteiner.appendChild(place);
    });
  };
  const printStudents = (students) =>{
    const estudiantesConteiner = document.getElementById('venues');
    const estudiantes = (students);
    estudiantes.forEach((estudiante)=>{
      const place = document.createElement('option');
      place.innerHTML = Object.values(estudiante);
      estudiantesConteiner.appendChild(place);
    });
  };
  const printSort = (sort)=>{
    const sortConteiner = document.getElementById('venues');
    const Sort = (sort);
    Sort.forEach((so)=>{
      const place = document.createElement('option');
      place.innerHTML = Object.values(so);
      sortConteiner.appendChild(place);
    });
  };
  const printFilter = (filter)=>{
    const filterConteiner = document.getElementById('venues');
    const Filter = (filter);
    Filter.forEach((filt)=>{
      const place = document.createElement('option');
      place.innerHTML = Object.values(filt);
      filterConteiner.appendChild(place);
    });
  };
