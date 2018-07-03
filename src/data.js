
// LLAMANDO JSON        

const json = "https://raw.githubusercontent.com/soberanesmajo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
    
const gettingData = (data) => {
    //Mando a llamar a json mediante fetch.
    fetch(data) 
    .then((res) => { //Aquí ya tiene la información.
        return res.json();  //Entonces le digo que a esa información la retorne como un archivo json.
    })
    .then((laboratoria) => {  //Aquí le asigno el nombre de laboratoria a la información que envió.
        //console.log(laboratoria);
        sedes(laboratoria)
        computeGenerationsStats(laboratoria); //Aquí estoy diciendo que a mis siguienten funciones, les estoy mandando esa data.
   // computeStudentsStats(laboratoria);
   // obtenerGenraciones(laboratoria);
    })
    .catch((error) => {
        console.log(error);
        //Aquí va mi función para un posible error.
    })
}
gettingData(json);


 const sedes = (laboratoria) => {
    // let result = laboratoria;
    const containerButtons= document.getElementById("container-buttons");
    for(key in laboratoria){
        const divCol = document.createElement("div");
        const a= document.createElement("a");
        divCol.classList.add("col-4");
        a.id=key;
        a.innerHTML=key;
        divCol.appendChild(a); 
        // falta agregar evento al divCol para que ese button detone una funcion
        containerButtons.appendChild(divCol);
        // console.log(key);

    }

    // pintar(result)
}


// const pintar = (result) => {
//    document.write(result.generacion)
// }

window.computeGenerationsStats = (laboratoria) => {

        let generation = "";
        let campus = "";
        let average = 0;
        let count = 0;
    
    for(key in laboratoria){ // Key en Laboratoria noos da sedes.
        campus = key; // Le estamos diciendo que nuestra variable campus sea igual a la key del objeto laboratoria.
	 //console.log(campus);
        const generations = Object.keys(laboratoria[key].generacion);//nos da 3 arreglos de las generaciones 
        generations.forEach((generacion2) => { //iterar sobre generations  y obtener todas las graciones.
        generation = generacion2;
	//console.log(generation);
		const students = (laboratoria[key].generacion[generation]);
		let average1 = students[progreso];
	// console.log(students);

    })
    
    
    // if(key === mexico){
    //     let obtenerGeneracionesMexico = () => {
    //         laboratoria[key].mexico.generacion;
    //         console.log(mexico);
    // }
    // }
    //if(campus === accessMexico){
        //return obtenerGeneracionesMexico();
    }
}

    
   /*let obtenerGenracionesCDMX = (laboratoria) => {
    console.log(obtenerGenracionesCDMX);
        //let sedes = Object.keys(laboratoria);*/
        

    
// obtenerGenracionesCDMX();
// };


window.computeStudentsStats = () => {

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
