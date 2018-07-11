


// 

//const porque nunca cambia el div, solo la info depositada
const container = document.getElementById('result');

const dataLima = (data) => {
    document.getElementById('lima3').addEventListener('click', (event) => {
          let result = ''; 
          console.log(Object.keys(data.lima.generacion))
          const info = Object.keys(data.lima.generacion);
          console.log(Object.keys(info));

            for (var generacion in info) {                
                if(info.hasOwnProperty(generacion)) {
                    console.log("la clave es " + generacion + " y el valor es " + info[generacion])
               //console.log(info.lima.generacion)

               let arrLaboratoriaEstudiantesLima = data.lima.generacion[info[generacion]].estudiantes;
  
               for(i=0;  i<arrLaboratoriaEstudiantesLima.length; i++){
                    result += `
                    <div class='col xl4'>
                            <div class='card'>
                                
                                   <span class="card-title">Nombre: ${data.lima.generacion[info[generacion]].estudiantes[i].nombre}</span>
                                        <div class="card-content center">
                                            <p>"01-Introduccion-a-programacion" - Duracion: ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTema}</p>
                                        </div>
                               
                            </div>
                        </div>`
            
 
               }
                                     }
            container.innerHTML = result;
        
    } 
    });        


  } 

document.getElementById('other').addEventListener('click', (event) =>{
    container.innerHTML = '';
})

const dataMex = (data) => {
    document.getElementById('mex3').addEventListener('click', (event) => {
          let result = ''; 
          console.log(Object.keys(data.mexico.generacion))
          const info = Object.keys(data.mexico.generacion);
          console.log(Object.keys(info));

            for (var generacion in info) {                
                if(info.hasOwnProperty(generacion)) {
                    console.log("la clave es " + generacion + " y el valor es " + info[generacion])
               //console.log(info.mexico.generacion)

               let arrLaboratoriaEstudiantesMex = data.mexico.generacion[info[generacion]].estudiantes;
  
               for(i=0;  i<arrLaboratoriaEstudiantesMex.length; i++){
                    result += `
                    <div class='col xl4'>
                            <div class='card'>
                                
                                   <span class="card-title">Nombre: ${data.mexico.generacion[info[generacion]].estudiantes[i].nombre}</span>
                                        <div class="card-content center">
                                            <p>"01-Introduccion-a-programacion" - Duracion: ${data.mexico.generacion[info[generacion]].estudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTema}</p>
                                        </div>
                               
                            </div>
                        </div>`
            
 
               }
                                     }
            container.innerHTML = result;
        
    } 
    });        

}


const dataSantiago = (data) => {
    document.getElementById('san3').addEventListener('click', (event) => {
          let result = ''; 
          console.log(Object.keys(data.santiago.generacion))
          const info = Object.keys(data.santiago.generacion);
          console.log(Object.keys(info));

            for (var generacion in info) {                
                if(info.hasOwnProperty(generacion)) {
                    console.log("la clave es " + generacion + " y el valor es " + info[generacion])
               //console.log(info.lima.generacion)

               let arrLaboratoriaEstudiantesSan = data.santiago.generacion[info[generacion]].estudiantes;
  
               for(i=0;  i<arrLaboratoriaEstudiantesSan.length; i++){
                    result += `
                    <div class='col xl4'>
                            <div class='card'>
                                
                                   <span class="card-title">Nombre: ${data.lima.generacion[info[generacion]].estudiantes[i].nombre}</span>
                                        <div class="card-content center">
                                            <p>"01-Introduccion-a-programacion" - Duracion: ${data.lima.generacion[info[generacion]].estudiantes[i].progreso.temas["01-Introduccion-a-programacion"].duracionTema}</p>
                                        </div>
                               
                            </div>
                        </div>`
            
 
               }
                                     }
            container.innerHTML = result;
        
    } 
    });        


  } 


