/*import { getUsefulContents } from '../data/laboratoria.json';

getUsefulContents('https://raw.githubusercontent.com/YocelinGR/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json',
    data => { doSomethingUseful(data); });*/

window.data = {

  getJson : () =>{
     let dataGenerations = [];
     let targetGenerations = [];
     let api = "https://api.myjson.com/bins/1amyo6";
      fetch(api).then(function(dataGenerations){
        return dataGenerations.json();
      }).then(function(dataGenerations){
        targetGenerations = Object.getOwnPropertyNames(dataGenerations);
        dataGenerations = Object.values(dataGenerations);
        //console.log(targetGenerations, dataGenerations);
        var result = Object.keys(dataGenerations).map(function(key) {
        return [dataGenerations[key]];
        });
        console.log(result);
        return result;
      })
      return result;
  },
   computeStudentsStats : () => {

  },
  computeGenerationsStats : (laboratoria) => {
    console.log("Funcion computeGenerationsStats");
  },
  sortStudents : (laboratoria) => {
    console.log("Funcion sortStudents");
  },
  filterStudents : (laboratoria) => {
    console.log("Funcion filterStudents");
  }
};
//module.exports = data.computeStudentsStats;
