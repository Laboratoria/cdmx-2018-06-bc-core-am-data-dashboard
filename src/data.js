window.computeStudentsStats = (laboratoria) => {

};
const json = "../data/laboratoria.json";
    
const gettingData = () => {
    fetch(json)
    .then(res => res.json()) //Mando a llamar a json mediante fetch, entonces le digo que esa información la convierta en archivo json.
    .then((laboratoria) => {   //Aquí le asigo el nombre de laboratoria a la información que envió.
        // const generations= computeGenerationsStats(laboratoria);
        // const campus = campus(laboratoria);  //Aquí estoy diciendo que a mi siguiente función (campus)le estoy mandando la data.
       computeGenerationsStats(laboratoria);
       console.log(laboratoria);
    })
    .catch((error) => {
        console.log(error);
    });
}
gettingData();

window.computeGenerationsStats = (laboratoria) => {
    let generation = [];
      let campus = '';
       let generation = '';
       let average = 0;
       let count = 0;
 
for (key in laboratoria){ // para iterarla y obtener lo que nos piden necesito hace "for in"
         campus= key;   // console.log(key) nos va a dar: lima, mex, sant
         const generations = Object.keys(laboratoria[key].generacion);// si hacemos laboratoria[key] nos va a dar cada uno de los objetos que pertenecen a esos keys
        // console.log(generations);      
         // ahora vamos a llenar "generation" con cuarta, quinta, sexta iterando sobre los obj generations
          generations.forEach((generation1) => { //  iteramos sobre genearation
          generation = generation1;// obtenemos las generaciones (4,5,3) de todas las sedes y las guardamos en la key vacía de generation
            // console.log (obj) nos muestra lo que llevamos de nuestro nuevo objeto
            // console.log(generation); 
            // para obtener el promedio significa que tenemos que resolver la función de computeStudentsStats donde está el % de c/u  podemos objetener el total
            const students = laboratoria[key].generacion[generation]; 
            console.log(students);
            // for(keyStudents in students ) {
            })
         }
};

window.sortStudents = () => {

};

window.filterStudents = () => {

}; 


/*const json = '../data/laboratoria.json'

const getData = () => {
fetch(json)
.then((response) => {
    return response.json();
})
.then((res) => {
    iterator(res);
})
.catch((error) => {
    console.log(error);
});
}

getData();

const iterator = (data) => {
 const sedes = Object.keys((data) =>
     
 
}*/
