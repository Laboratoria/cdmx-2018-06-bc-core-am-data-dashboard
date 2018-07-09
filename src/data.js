console.log("conectado");

const showResult = document.getElementById("result-list");
//Definición de la primera función 
window.computeStudentsStats = (laboratoria) => {
    //declaración de variables:
    let student = [];
    
        let campus = "";
        let generation = "";
        let name = "";
        let email = "";
        let turn = "";
        let completedPercentage = 0;
        
        let stats = {           
        "status": "" , 
        "completedPercentage": 0, 
        "topics": { 
            "topic":{ "topic": "",
                "completedPercentage": 0, 
                "percentageDuration": 0,
                "subtopics": {
                    "subtopics": "" ,
                    "completedPercentage": 0,
                    "duration": 0 ,
                    "type": ""
                }
                }
    }};
        
        
    for (findSede in laboratoria) {
        campus = findSede;
        const generations = Object.keys(laboratoria[findSede].generacion);
        generations.forEach((eachGeneration) => {
        generationLevel = eachGeneration ;
        //console.log("2.2", generationLevel);
        const studentsLength = laboratoria[findSede].generacion[generationLevel].estudiantes;
        studentsLength.forEach((students) => {            
        name = students.nombre;
        email = students.correo;
        turn = students.turno ; 
        completedPercentage = students.progreso.porcentajeCompletado;
        status = completedPercentage;
        if (status <= 60){
            studentPerformance = "Rendimiento por debajo del 60%.";
        }else if (status > 90 ) {
            studentPerformance = "Rendimiento, por arriba del 90%.";
        } else {
            studentPerformance = "Rendimiento dentro del promedio.";
     };
       const  studentsTopics = students.progreso.temas;
        for(topic in studentsTopics) {
        completedPercentage1 = studentsTopics[topic].porcentajeCompletado;
        let durationTheme = studentsTopics[topic].duracionTema;
        completedTheme = studentsTopics[topic].duracionTemaCompletado;
        percentageDuration = parseInt((completedTheme * 100) / durationTheme );
        //console.log("8", percentageDuration );
       
        const subTopics = studentsTopics[topic].subtemas;
        for (subItem in subTopics){
        type = subTopics[subItem].tipo;
        subItemDuration = subTopics[subItem].duracionSubtema;
        }
        const  totalSubTopics = subTopics[subItem].subtemasTotales; 
        const completedTopics = subTopics[subItem].subtemasCompletados; 
        completedPercentage2 = parseInt((completedTopics * 100 )/ totalSubTopics )
    }
        
        student.push({
        "name": name, 
        "email": email, 
        "campus": campus, 
        "generation": generationLevel, 
        "turn": turn, 
        "stats": { 
            "status": studentPerformance , 
            "completedPercentage":completedPercentage, 
            "topics": { 
                "topic":{ "topic": topic ,
                    "completedPercentage": completedPercentage1, 
                    "percentageDuration":percentageDuration,
                    "subtopics": {
                        "subtopics": subItem ,
                        "completedPercentage": completedPercentage2,
                        "duration": subItemDuration ,
                        "type": type
                    }
                    }
        }
        }
        }); 
    });   
       
        });
    }
     console.log("1.1", student);
}
 