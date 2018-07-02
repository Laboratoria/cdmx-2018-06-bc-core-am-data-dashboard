loadsedes();
const generation = () => { //FUNCION GENERACION DE ACUERDO A LA SEDE SELECCIONADA
	document.getElementById('generation').innerHTML = ""; //Limiamps el select de generaciones cada vez que se seleccione una nueva sede
	document.getElementById('tabla').innerHTML = ""; //Limpiamos la tabla cada vez que se cambie la sede
	let valor = document.getElementById('selectSedes').value; //obtenemos el valor de la lista de sedes seleccionada, con el evento onchange detectamos cada vez que cambie la lista de sedes
	let select = document.getElementById('generation'); //guardamos el elemento select de generatoion en la variable select para poder hacer el contenido y llenarlo con la lista de generaciones
	loadgeneraciones(valor,select);

}

const students = () => {
	let valor = document.getElementById('selectSedes').value;//obtenemos el valor de las sedes, la sede que se selecciono
	let generation = document.getElementById('generation').value;//obtenemos el valor de las generaciones, la que se ha seleccionado
	let estudiantes = dataJSON[valor]['generacion'][generation]['estudiantes'];//obtenemos el objeto basandonos en la informacion obtenida y accediendo a los keys ejmplo data[mexico]['generacion'][cuarta]['estudiantes']

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
	let tr1 = document.createElement('tr');//creamos el nuevo elemento tr perteneciente de la tabla y lo guardamos en la variable tr
	let td10 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
	let td11 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
	let td12 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
	let td13 = document.createElement('td');//creamos el td para poder guardar la informacion del texto de los titulos,
	td10.appendChild(titlecorreo);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de correo
	td11.appendChild(titlenombre);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de nombre
	td12.appendChild(titleprograma);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de pograma
	td13.appendChild(titlecompletado);//asignamos en el ultimo elemento del td10 el valor de texto de titulo de porcentaje completado
	tr1.appendChild(td10);//asignamos en el ultimo elmento del tr1 el valor del td10 que este ya trae el valor del titulo.
	tr1.appendChild(td11);//asignamos en el ultimo elmento del tr1 el valor del td11 que este ya trae el valor del titulo.
	tr1.appendChild(td12);//asignamos en el ultimo elmento del tr1 el valor del td12 que este ya trae el valor del titulo.
	tr1.appendChild(td13);//asignamos en el ultimo elmento del tr1 el valor del td13 que este ya trae el valor del titulo.
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
	    table.appendChild(tr);//asignamos el valor de tr en el ultimo elemento de la tabla para que se pueda visualizar, ejemplo de lo que crea <tr><td>herehattu-9611@yopmail.com</td><td>Steph Perlie</td><td>405</td><td>89</td></tr>
	};
	document.body.appendChild(table);//creamos en el ultimo elemnto de body la tabla, todo lo anterior guardado en la variable tabla.

}
