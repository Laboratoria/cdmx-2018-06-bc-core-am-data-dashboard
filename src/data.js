//var exports : module.exports = {};
window.data = {
  global : null,
  /*getJson : () =>{
    let dataVen = [];
    let dataGenerations = [];
    let dataStudents = [];
    let api = "https://api.myjson.com/bins/1amyo6";

    fetch(api).then(function(dataGenerations){
      return dataGenerations.json();
      }).then(function(dataVenues){
      global = dataVenues;
      let i=0;
      for (let valor of dataVenues.mexico.generacion.cuarta.estudiantes){
        dataVen[i] = valor;
        i++;
      }
        console.log(dataVen);
        return dataVen;
      })
      return global;
    },
  funPrub : () =>{
    console.log(data.getJson());
  },*/
  getInform :()=>{
    let lab = fetch("https://api.myjson.com/bins/1amyo6");
    data.computeStudentsStats(lab);
  },
  computeStudentsStats: (lab) =>{
    let sedesName =[];
    let dataSedes =[];
    let generacionName =[];
    let dataGeneracion = [];
    let students = [];
    let alumnasDate = [];
    let i=0;
    lab.then(retorno => {return retorno.json()})
       .then(data =>{
         sedesName = Object.getOwnPropertyNames(data);
         dataSedes = Object.values(data);
         dataSedes.forEach(items =>{
           generacionName = Object.getOwnPropertyNames(items.generacion);
           dataGeneracion = Object.values(items.generacion);
           dataGeneracion.forEach(alumnos =>{
             alumnasDate = Object.values(alumnos.estudiantes);//15 ultimas alumnas de Santiago
             alumnasDate.forEach(alumnosInfo =>{
               students[i]=alumnosInfo; i++;//Todas las alumnasDate
             })
           })
         })
         console.log(students[88].nombre);
         console.log(students[0]);
       })
      global = [sedesName,dataSedes,generacionName, dataGeneracion, alumnasDate, students];
      return global;
  }
};
//module.exports = data.computeStudentsStats;
