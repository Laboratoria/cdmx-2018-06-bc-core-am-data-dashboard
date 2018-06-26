// //let data = "data/laboratoria.json";
// let generation = document.getElementById("generation");
// let botonSede = document.getElementById("sede");
//
// botonSede.addEventListener("click", event => {
//   let sede = window.data.computeStudentsStats(
//   );
//   //Muestra el retorno de cipher encode
//   console.log(sede);
//   generation.innerHTML = sede;
//   //outputTextC.defaultValue = encodeValueBean;
// });
const generation = (e) => {
	document.getElementById('generation').innerHTML = "";
	document.getElementById('tabla').innerHTML = "";
	let valor = document.getElementById('selectsedes').value;
	let select = document.getElementById('generation');
	let keys = Object.keys(data[valor]['generacion']);
	var opt = document.createElement('option');
	opt.value = 0;
	opt.innerHTML = "";
	select.appendChild(opt);
	for (let i = 0; i < keys.length; i++) {
	  	opt = document.createElement('option');
	    opt.value = keys[i];
	    opt.innerHTML = keys[i];
	    select.appendChild(opt);
	};

}

const students = (e) => {
	let valor = document.getElementById('selectsedes').value;
	let generation = document.getElementById('generation').value;
	let estudiantes = data[valor]['generacion'][generation]['estudiantes'];

	let keys = Object.keys(estudiantes);
	let keysprogreso = '';
	let duracionPrograma = '';
	let porcentajeCompletado = '';
	document.getElementById('tabla').innerHTML = "";
	//Se crea tabla
	var table = document.getElementById('tabla');
	let titlecorreo = document.createTextNode('Correo');
	let titlenombre = document.createTextNode('Nombre');
	let titleprograma = document.createTextNode('Duración del programa');
	let titlecompletado = document.createTextNode('Porcentaje Completado');
	let tr1 = document.createElement('tr');
	let td10 = document.createElement('td');
	let td11 = document.createElement('td');
	let td12 = document.createElement('td');
	let td13 = document.createElement('td');
	td10.appendChild(titlecorreo);
	td11.appendChild(titlenombre);
	td12.appendChild(titleprograma);
	td13.appendChild(titlecompletado);
	tr1.appendChild(td10);
	tr1.appendChild(td11);
	tr1.appendChild(td12);
	tr1.appendChild(td13);
	table.appendChild(tr1);
	for (let i = 0; i < keys.length; i++) {
		/*console.log(estudiantes.indexOf(i));*/
	  	let tr = document.createElement('tr');
	    let td1 = document.createElement('td');
	    let td2 = document.createElement('td');
	    let td3 = document.createElement('td');
	    let td4 = document.createElement('td');
	    let correo = document.createTextNode(estudiantes[i]['correo']);
	    let nombre = document.createTextNode(estudiantes[i]['nombre']);
	    td1.appendChild(correo);
	    td2.appendChild(nombre);
	    tr.appendChild(td1);
	    tr.appendChild(td2);
	    keysprogreso =Object.keys(estudiantes[i]['progreso']);
	    //console.log(estudiantes[i]['progreso']);
	    for (let j = 0; j < keysprogreso.length; j++) {
	    	duracionPrograma = document.createTextNode(estudiantes[i]['progreso']['duracionPrograma']);
	    	porcentajeCompletado = document.createTextNode(estudiantes[i]['progreso']['porcentajeCompletado']);
	    }
	    td3.appendChild(duracionPrograma);
	    td4.appendChild(porcentajeCompletado);
	    tr.appendChild(td3);
	    tr.appendChild(td4);
	    table.appendChild(tr);
	};
	document.body.appendChild(table);

}
