// alert("data vinculado");


window.dataDashboard = {

    computeStudentsStats : (laboratoria)  => {
    /* Esta función es la responsable de "crear" la lista de estudiantes
    que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo 
    de estudiantes que se encuentra dentro de laboratoria.json.*/
    let student = [];

    return 



    // Valor de retorno: Un arreglo de objetos "student".
    },

    computeGenerationsStats : (laboratoria) => { return },
    /* Esta función es la responsable de "crear" los status de cada generación 
    que vamos a "pintar", devolver un nuevo arreglo de generaciones donde cada 
    objeto generation con una propiedad con el nombre average y dentro el 
    promedio de completedPercentage de todas las estudiantes de la generación */

    sortStudents : (students, orderBy, orderDirection) => { return },
    /* Ordenar la lista de estudiantes creada con computeStudentsStats()
            -students: Arreglo de objetos creado con computeStudentsStats()
            -orderBy: String. Ordenar por nombre y porcentaje de completitud.
            - orderDirection: valores: ASC y DESC (ascendente y descendente)
        retorna: nuevo arreglo ordenado */
    
    filterStudents : (students, search) => { return },
    /* -students: Arreglo de objetos creado con computeStudentsStats()
       -search: String de búsqueda. 
        retorna: nuevo arreglo con solo aquellos usuarios que cumplan la 
        condición de filtrado, es decir, aquellos que contengan el string busqueda
        en el nombre (name) de las estudiantes. */


    

}