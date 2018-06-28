//Este es el código en FETCH, comenzar a enlazar con window data y main para cargar el JSON
window.data = {
    cargarData: () => {
        let laboratoriaJSON = fetch('https://github.com/ViniciaLaraRangel/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/data/laboratoria.json');
//Hacer que la data sea tomada por las funciones
        data.computeStudentsStats(laboratoriaJSON);
//Usar coma para cerrar    
    },
//Crear la promesa para la primera función 
    computeStudentsStats: (laboratoriaJSON) => {
        laboratoria.then(function(res){
            return res.json();
    })
        .then(function(data){
            let sedes = Object.getOwnPropertyNames(data);
            let generaciones = Object.values(data);
            console.log(sedes);
//Aquí acaba el primer nivel
                generaciones.forEach(function(generacionesSeg){
                    let generacionesInfo = Object.values(generacionesSeg.generacion);
                    generacionesInfo.forEach(function(estudiantesSegundo){
                        let estudiantesInfo = estudiantesSegundo.estudiantes;
                        estudiantesInfo.forEach(function(avanceTercer){
                            let porcentajeCompl = avanceTercer.progreso;
                            let nombres = avanceTercer.nombre;
                                console.log(nombres);
                        })
                })
            })

    })
//Usar coma para cerrar
},

    computeGenerationsStats: () => {

    },

    sortStudents: () => {  

    }

    filterStudents: () => {

    }
};
