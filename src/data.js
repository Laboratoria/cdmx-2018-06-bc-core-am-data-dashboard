//Primera funcion que requiere retorne un arreglo de objetos
window.computeStudentsStats = (laboratoria) => {
  computeGenerationsStats(laboratoria);
  const students = [
    {
      campus : "",
      generation: "",
      stats: {
        completedPercentage: 0,
        percentageDuration: 0,
        subtopic: {
            completado: 1,
            duracionSubtema: 55,
            tipo: "lectura"
        }
      }
    }
  ];
};

//Se obtiene el campus
window.getCampus = (laboratoria) => {
  const campusArray = [];
  for (key in laboratoria) {
    const obj = {
        campus: ''
    };
      obj.campus = key;
      campusArray.push(obj.campus);
    }
    for (let i = 0; i < campusArray.length; i++) {
      console.log(campusArray[i]);
      drawCampus(campusArray[i]);
    };
};


//Manejo de la data para generaciones
window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    const obj = {
        campus: '',
        generation: '',
        average: 0,
        count: 0,
    };
    // let average = 0;
    for (key in laboratoria) {
        obj.campus = key;
        generationsArray.push(obj);
        campusArray.push(key);

    }
    for (let i = 0; i < campusArray.length; i++) {
      //console.log(generationsArray[i]);
      //drawCampus(campusArray[i]);
    };
    return generationsArray;
};
