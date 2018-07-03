let api = "https://api.myjson.com/bins/1efx86"
//console.log(api);

//Creando la variable del botón que al darle click ejecute la función que descarga
//toda la data dentro de nuestro .json.
const button = document.getElementById('jsonBtn');
button.addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch(api)
    .then(function(res) {
        console.log(res);
        return res.json();
        
    })
    .then(function(data) {
        
    
        let nombre1 = data.lima.generacion.cuarta.estudiantes[0].nombre;
        let correo1 = data.lima.generacion.cuarta.estudiantes[0].correo; 
        let progreso1 = data.lima.generacion.cuarta.estudiantes[0].progreso.duracionPrograma;
        let porcentaje1 = data.lima.generacion.cuarta.estudiantes[0].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado").innerHTML= nombre1;
        document.getElementById("resultado1").innerHTML= correo1;
        document.getElementById("resultado2").innerHTML= "Duracion del Programa " + progreso1;
        document.getElementById("resultado3").innerHTML= "Porcentaje del Programa " + porcentaje1;

        let nombre2 = data.lima.generacion.cuarta.estudiantes[1].nombre;
        let correo2 = data.lima.generacion.cuarta.estudiantes[1].correo; 
        let progreso2 = data.lima.generacion.cuarta.estudiantes[1].progreso.duracionPrograma;
        let porcentaje2 = data.lima.generacion.cuarta.estudiantes[1].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado4").innerHTML= nombre2;
        document.getElementById("resultado5").innerHTML= correo2;
        document.getElementById("resultado6").innerHTML= "Duracion del Programa " + progreso2;
        document.getElementById("resultado7").innerHTML= "Porcentaje del Programa " + porcentaje2;

        let nombre3 = data.lima.generacion.cuarta.estudiantes[2].nombre;
        let correo3 = data.lima.generacion.cuarta.estudiantes[2].correo; 
        let progreso3 = data.lima.generacion.cuarta.estudiantes[2].progreso.duracionPrograma;
        let porcentaje3 = data.lima.generacion.cuarta.estudiantes[2].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado8").innerHTML= nombre3;
        document.getElementById("resultado9").innerHTML= correo3;
        document.getElementById("resultado10").innerHTML= "Duracion del Programa " + progreso3;
        document.getElementById("resultado11").innerHTML= "Porcentaje del Programa " + porcentaje3;

        let nombre4 = data.lima.generacion.cuarta.estudiantes[3].nombre;
        let correo4 = data.lima.generacion.cuarta.estudiantes[3].correo; 
        let progreso4 = data.lima.generacion.cuarta.estudiantes[3].progreso.duracionPrograma;
        let porcentaje4 = data.lima.generacion.cuarta.estudiantes[3].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado12").innerHTML= nombre4;
        document.getElementById("resultado13").innerHTML= correo4;
        document.getElementById("resultado14").innerHTML= "Duracion del Programa " + progreso4;
        document.getElementById("resultado15").innerHTML= "Porcentaje del Programa " + porcentaje4;

        let nombre5 = data.lima.generacion.cuarta.estudiantes[4].nombre;
        let correo5 = data.lima.generacion.cuarta.estudiantes[4].correo; 
        let progreso5 = data.lima.generacion.cuarta.estudiantes[4].progreso.duracionPrograma;
        let porcentaje5 = data.lima.generacion.cuarta.estudiantes[4].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado16").innerHTML= nombre5;
        document.getElementById("resultado17").innerHTML= correo5;
        document.getElementById("resultado18").innerHTML= "Duracion del Programa " + progreso5;
        document.getElementById("resultado19").innerHTML= "Porcentaje del Programa " + porcentaje5;

        let nombre6 = data.lima.generacion.cuarta.estudiantes[5].nombre;
        let correo6 = data.lima.generacion.cuarta.estudiantes[5].correo; 
        let progreso6 = data.lima.generacion.cuarta.estudiantes[5].progreso.duracionPrograma;
        let porcentaje6 = data.lima.generacion.cuarta.estudiantes[5].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado20").innerHTML= nombre6;
        document.getElementById("resultado21").innerHTML= correo6;
        document.getElementById("resultado22").innerHTML= "Duracion del Programa " + progreso6;
        document.getElementById("resultado23").innerHTML= "Porcentaje del Programa " + porcentaje6;

        let nombre7 = data.lima.generacion.cuarta.estudiantes[6].nombre;
        let correo7 = data.lima.generacion.cuarta.estudiantes[6].correo; 
        let progreso7 = data.lima.generacion.cuarta.estudiantes[6].progreso.duracionPrograma;
        let porcentaje7 = data.lima.generacion.cuarta.estudiantes[6].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado24").innerHTML= nombre7;
        document.getElementById("resultado25").innerHTML= correo7;
        document.getElementById("resultado26").innerHTML= "Duracion del Programa " + progreso7;
        document.getElementById("resultado27").innerHTML= "Porcentaje del Programa " + porcentaje7;




        let nombre8 = data.lima.generacion.cuarta.estudiantes[7].nombre;
        let correo8 = data.lima.generacion.cuarta.estudiantes[7].correo; 
        let progreso8 = data.lima.generacion.cuarta.estudiantes[7].progreso.duracionPrograma;
        let porcentaje8 = data.lima.generacion.cuarta.estudiantes[7].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado28").innerHTML= nombre8;
        document.getElementById("resultado29").innerHTML= correo8;
        document.getElementById("resultado30").innerHTML= "Duracion del Programa " + progreso8;
        document.getElementById("resultado31").innerHTML= "Porcentaje del Programa " + porcentaje8;

        let nombre9 = data.lima.generacion.cuarta.estudiantes[8].nombre;
        let correo9 = data.lima.generacion.cuarta.estudiantes[8].correo; 
        let progreso9 = data.lima.generacion.cuarta.estudiantes[8].progreso.duracionPrograma;
        let porcentaje9 = data.lima.generacion.cuarta.estudiantes[8].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado32").innerHTML= nombre9;
        document.getElementById("resultado33").innerHTML= correo9;
        document.getElementById("resultado34").innerHTML= "Duracion del Programa " + progreso9;
        document.getElementById("resultado35").innerHTML= "Porcentaje del Programa " + porcentaje9;

        let nombre10 = data.lima.generacion.cuarta.estudiantes[9].nombre;
        let correo10 = data.lima.generacion.cuarta.estudiantes[9].correo; 
        let progreso10 = data.lima.generacion.cuarta.estudiantes[9].progreso.duracionPrograma;
        let porcentaje10 = data.lima.generacion.cuarta.estudiantes[9].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado36").innerHTML= nombre10;
        document.getElementById("resultado37").innerHTML= correo10;
        document.getElementById("resultado38").innerHTML= "Duracion del Programa " + progreso10;
        document.getElementById("resultado39").innerHTML= "Porcentaje del Programa " + porcentaje10;

        let nombre11 = data.lima.generacion.cuarta.estudiantes[10].nombre;
        let correo11 = data.lima.generacion.cuarta.estudiantes[10].correo; 
        let progreso11 = data.lima.generacion.cuarta.estudiantes[10].progreso.duracionPrograma;
        let porcentaje11 = data.lima.generacion.cuarta.estudiantes[10].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado40").innerHTML= nombre11;
        document.getElementById("resultado41").innerHTML= correo11;
        document.getElementById("resultado42").innerHTML= "Duracion del Programa " + progreso11;
        document.getElementById("resultado43").innerHTML= "Porcentaje del Programa " + porcentaje11;

        let nombre12 = data.lima.generacion.cuarta.estudiantes[11].nombre;
        let correo12 = data.lima.generacion.cuarta.estudiantes[11].correo; 
        let progreso12 = data.lima.generacion.cuarta.estudiantes[11].progreso.duracionPrograma;
        let porcentaje12 = data.lima.generacion.cuarta.estudiantes[11].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado43").innerHTML= nombre12;
        document.getElementById("resultado44").innerHTML= correo12;
        document.getElementById("resultado45").innerHTML= "Duracion del Programa " + progreso12;
        document.getElementById("resultado46").innerHTML= "Porcentaje del Programa " + porcentaje12;

        let nombre13 = data.lima.generacion.cuarta.estudiantes[12].nombre;
        let correo13 = data.lima.generacion.cuarta.estudiantes[12].correo; 
        let progreso13 = data.lima.generacion.cuarta.estudiantes[12].progreso.duracionPrograma;
        let porcentaje13 = data.lima.generacion.cuarta.estudiantes[12].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado47").innerHTML= nombre13;
        document.getElementById("resultado48").innerHTML= correo13;
        document.getElementById("resultado49").innerHTML= "Duracion del Programa " + progreso13;
        document.getElementById("resultado50").innerHTML= "Porcentaje del Programa " + porcentaje13;

        let nombre14 = data.lima.generacion.cuarta.estudiantes[13].nombre;
        let correo14 = data.lima.generacion.cuarta.estudiantes[13].correo; 
        let progreso14 = data.lima.generacion.cuarta.estudiantes[13].progreso.duracionPrograma;
        let porcentaje14 = data.lima.generacion.cuarta.estudiantes[13].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado51").innerHTML= nombre14;
        document.getElementById("resultado52").innerHTML= correo14;
        document.getElementById("resultado53").innerHTML= "Duracion del Programa " + progreso14;
        document.getElementById("resultado54").innerHTML= "Porcentaje del Programa " + porcentaje14;

        let nombre15 = data.lima.generacion.cuarta.estudiantes[14].nombre;
        let correo15 = data.lima.generacion.cuarta.estudiantes[14].correo; 
        let progreso15 = data.lima.generacion.cuarta.estudiantes[14].progreso.duracionPrograma;
        let porcentaje15 = data.lima.generacion.cuarta.estudiantes[14].progreso.porcentajeCompletado;   
          
        document.getElementById("resultado55").innerHTML= nombre15;
        document.getElementById("resultado56").innerHTML= correo15;
        document.getElementById("resultado57").innerHTML= "Duracion del Programa " + progreso15;
        document.getElementById("resultado58").innerHTML= "Porcentaje del Programa " + porcentaje15;

    

       
    })
 
} 


