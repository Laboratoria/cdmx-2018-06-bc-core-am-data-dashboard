loadsedes();
const generation = () => { //FUNCION GENERACION DE ACUERDO A LA SEDE SELECCIONADA
	document.getElementById('generation').innerHTML = ""; //Limiamps el select de generaciones cada vez que se seleccione una nueva sede
	document.getElementById('tabla').innerHTML = ""; //Limpiamos la tabla cada vez que se cambie la sede
	let valor = document.getElementById('selectSedes').value; //obtenemos el valor de la lista de sedes seleccionada, con el evento onchange detectamos cada vez que cambie la lista de sedes
	let select = document.getElementById('generation'); //guardamos el elemento select de generatoion en la variable select para poder hacer el contenido y llenarlo con la lista de generaciones
	loadgeneraciones(valor,select);

}

const students = () => {
	let sede = document.getElementById('selectSedes').value;//obtenemos el valor de las sedes, la sede que se selecciono
	let generation = document.getElementById('generation').value;//obtenemos el valor de las generaciones, la que se ha seleccionado
	loadstudents(sede,generation);
}

const studentsdetail = (id_students) => {
	let sede = document.getElementById('selectSedes').value;//obtenemos el valor de las sedes, la sede que se selecciono
	let generation = document.getElementById('generation').value;//obtenemos el valor de las generaciones, la que se ha seleccionado
	console.log(sede);
	console.log(generation);
	loadstudentsdetail(sede,generation,id_students);
}
