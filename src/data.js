let laboratoria = fetch("https://raw.githubusercontent.com/NancyyM/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json")
  .then((response) => response.json())
  .then((dataJSON) => {
    return dataJSON;
  });

const loadsedes = () => {
  laboratoria.then(function(dataJSON) {
    //console.log(dataJSON);
    let keys = Object.keys(dataJSON); //asigno el objeto data en la variable keys, con objet.keys obtengo todo el data
    console.log(keys);
    let select = document.getElementById('selectSedes'); //selecSedes es el seleccionador de sedes y desde ahi parto a hacer el rastreo de la info de la data
    for (let i = 0; i < keys.length; i++) { //recorre todo el objeto y me permite obtener la informacion
        let opt = document.createElement('option'); //se guarda en opt
        opt.value = keys[i]; //es la informacion en determinada posicion y se asigna a opt
        opt.innerHTML = keys[i];
        select.appendChild(opt); //El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación
    }
  });
}
const loadgeneraciones = (sede,select) => {
  laboratoria.then(function(dataJSON) {
    let keys = Object.keys(dataJSON[sede]['generacion']);//obtenemos los keys del objeto data[valor]['generacion'] los cuales son keys = [cuarta,quinta,tercera]
    var opt = document.createElement('option');//aqui creamos un elemento option que es la para el select(lista) de generaciones
    opt.value = 0;//asignamos el valor de 0 al primer valor que tendra el select(lista) de generaciones
    opt.innerHTML = "";//EL texto que mostrara el select(lista) de generaciones
    select.appendChild(opt);//creamos el valor y el texto al final del elemento ejemplo <option value="0"></option>
    for (let i = 0; i < keys.length; i++) {//recorremos los keys del objeto data[valor]['generacion']
        opt = document.createElement('option');//aqui creamos un elemento option que es la para el select(lista) de generaciones
        opt.value = keys[i];//le asignamos el valor con el incide del elemento que le corresponda ejemplo keys[0]= tercera, esto se hace para poder tomar el valor despues y saber que generacion estan seleccionando
        opt.innerHTML = keys[i];//le asignamos el mismo valor en el texto keys[0]= tercera
        select.appendChild(opt);//creamos el valor y el texto al final del elemento ejemplo <option value="cuarta">cuarta</option>
    }
  });
}
const loadstudents = (sede,generation) => {
  laboratoria.then(function(dataJSON) {
    let estudiantes = dataJSON[sede]['generacion'][generation]['estudiantes'];//obtenemos el objeto basandonos en la informacion obtenida y accediendo a los keys ejmplo data[mexico]['generacion'][cuarta]['estudiantes']
      console.log(estudiantes);
        let keys = Object.keys(estudiantes);//obtenemos los keys del objeto antes guardado en estudiantes ejemplo [0,1,2,3,......]
        let keysprogreso = '';//cramos variables para usarlas despues seran los keys de los progresos, ya que este es un arreglo
        let duracionPrograma = '';//cramos variables para usarlas despues para guardar el valor de duracionprograma
        let porcentajeCompletado = '';//cramos variables para usarlas despues para guardar porcentajecompletado
        document.getElementById('tabla').innerHTML = "";//limpiamos la tabla cada vez que cambien el valor del select(lista) de generaciones y asi poder mostrar la nueva informacion de la generaciones seleccionada


        //Se crea tabla
        var table = document.getElementById('tabla');//obtenemos el elemento tabla del html, para poder crear su contenido despues.
        let titlecorreo = document.createTextNode('Correo');//creamos un nuevo nodo de texto que se convertira en el titulo de correo
        let titlenombre = document.createTextNode('Nombre');//creamos un nuevo nodo de texto que se convertira en el titulo de nombre
        let titleprograma = document.createTextNode('Duración del programa');//creamos un nuevo nodo de texto que se convertira en el titulo de Duracion del programa
        let titlecompletado = document.createTextNode('Porcentaje Completado');//creamos un nuevo nodo de texto que se convertira en el titulo de Porcentaje COmpletado
        let detalle = document.createTextNode('Acciones');
        let tr1 = document.createElement('tr');//creamos el nuevo elemento tr perteneciente de la tabla y lo guardamos en la variable tr
        let td10 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
        let td11 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
        let td12 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
        let td13 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
        let td14 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
        td10.appendChild(titlecorreo);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de correo
        td11.appendChild(titlenombre);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de nombre
        td12.appendChild(titleprograma);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de pograma
        td13.appendChild(titlecompletado);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de porcentaje completado
        td14.appendChild(detalle);
        tr1.appendChild(td10);//asignamos en el ultimo elmento del tr1 el valor del td10 que este ya trae el valor del titulo.
        tr1.appendChild(td11);//asignamos en el ultimo elmento del tr1 el valor del td11 que este ya trae el valor del titulo.
        tr1.appendChild(td12);//asignamos en el ultimo elmento del tr1 el valor del td12 que este ya trae el valor del titulo.
        tr1.appendChild(td13);//asignamos en el ultimo elmento del tr1 el valor del td13 que este ya trae el valor del titulo.
        tr1.appendChild(td14);
        table.appendChild(tr1);//asignamos el valor de tr1 en el ultimo elemento de la tabla para que se pueda visualizar, ejemplo de lo que crea <tr><td>Correo</td><td>Nombre</td><td>Duración del programa</td><td>Porcentaje Completado</td></tr>
        for (let i = 0; i < keys.length; i++) {
          /*console.log(estudiantes.indexOf(i));*/
            let tr = document.createElement('tr');//creamos el nuevo elemento tr perteneciente de la tabla y lo guardamos en la variable tr
            let td1 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los estudiantes
            let td2 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los estudiantes
            let td3 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los estudiantes
            let td4 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los estudiantes
            let correo = document.createTextNode(estudiantes[i]['correo']);//creamos un nuevo nodo de texto que se convertira en el contenido de la tabla ejemplo estudiantes[0]['correo'] = eppajurru-7184@yopmail.com
            let nombre = document.createTextNode(estudiantes[i]['nombre']);//creamos un nuevo nodo de texto que se convertira en el contenido de la tabla ejemplo estudiantes[0]['nombre'] = Luisa Hermia
            td1.appendChild(correo);//asignamos en el ultimo elemento del td1 el valor de texto ejemplo eppajurru-7184@yopmail.com
            td2.appendChild(nombre);//asignamos en el ultimo elemento del td1 el valor de texto ejemplo Luisa Hermia
            tr.appendChild(td1);//asignamos en el ultimo elmento del tr el valor del td1 que este ya trae el valor del estudiante ejemplo <td>eppajurru-7184@yopmail.com</td>
            tr.appendChild(td2);//asignamos en el ultimo elmento del tr el valor del td1 que este ya trae el valor del estudiante ejemplo <td>Luisa Hermia</td>
            keysprogreso =Object.keys(estudiantes[i]['progreso']);//progreso es un objeto, obtenemos sus keys para poder recorrerlo y tenelos los valores ejemplo [duracionPrograma,porcentajeCompletado,temas]
            //console.log(estudiantes[i]['progreso']);
            for (let j = 0; j < keysprogreso.length; j++) {//Recorremos los keys de progreso
              duracionPrograma = document.createTextNode(estudiantes[i]['progreso']['duracionPrograma']);//creamos el td para poder guardar la informacion del texto del progreso ejemplo estudiantes[i]['progreso']['duracionPrograma'] = 405
              porcentajeCompletado = document.createTextNode(estudiantes[i]['progreso']['porcentajeCompletado']);//creamos el td para poder guardar la informacion del texto del progreso ejemplo estudiantes[i]['progreso']['porcentajeCompletado'] = 89
            }
            td3.appendChild(duracionPrograma);//asignamos en el ultimo elemento del td3 el valor de texto ejemplo 405
            td4.appendChild(porcentajeCompletado);//asignamos en el ultimo elemento de td4 el valor de texto ejemplo 89
            tr.appendChild(td3);//asignamos en el ultimo elmento del tr el valor del td3 que este ya trae el valor, ejemplo de lo que agrega <td>405</td>
            tr.appendChild(td4);//asignamos en el ultimo elmento del tr el valor del td4 que este ya trae el valor, ejemplo de lo que agrega <td>89</td>
            let td15 = document.createElement('td');
            var btn = document.createElement('button'); // button element
            var texto = document.createTextNode("Detalle");
            btn.appendChild(texto);
            btn.setAttribute('onclick','studentsdetail('+i+')');
            td15.appendChild(btn);
            tr.appendChild(td15);
            table.appendChild(tr);//asignamos el valor de tr en el ultimo elemento de la tabla para que se pueda visualizar, ejemplo de lo que crea <tr><td>herehattu-9611@yopmail.com</td><td>Steph Perlie</td><td>405</td><td>89</td></tr>
        }
        document.body.appendChild(table);//creamos en el ultimo elemnto de body la tabla, todo lo anterior guardado en la variable tabla.
  });
}
const loadstudentsdetail = (sede,generation,id_students) => {
  laboratoria.then(function(dataJSON) {
    console.log(sede);
    console.log(generation);
    console.log(id_students);
    let students = dataJSON[sede]['generacion'][generation]['estudiantes'][id_students]['progreso']['temas'];
    let keys = Object.keys(students);
    console.log(students);
    console.log(keys);
    document.getElementById('tablastudents').innerHTML = "";
    var table = document.getElementById('tablastudents');
    let tr1 = document.createElement('tr');
    for (let i = 0; i < keys.length; i++) {
      let title = document.createTextNode(keys[i]);
      let td = document.createElement('td');
       td.appendChild(title);
       tr1.appendChild(td);
       table.appendChild(tr1);
      /*for (let i = 0; i < keys.length; i++) {

      }*/
    }
     document.body.appendChild(table);
  });
}
