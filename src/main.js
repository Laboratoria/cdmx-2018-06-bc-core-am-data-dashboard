// dataDashboard.loadSedes();
//
// const setDrawSedes = (laboratoria) => {
//     console.log(laboratoria);
//     let select = document.getElementById('selectSedes'); //selecSedes es el seleccionador de sedes y desde ahi parto a hacer el rastreo de la info de la data
//     for (let i = 0; i < laboratoria.length; i++) { //recorre todo el objeto y me permite obtener la informacion
//         let opt = document.createElement('option'); //se guarda en opt
//         opt.value = laboratoria[i]; //es la informacion en determinada posicion y se asigna a opt
//         opt.innerHTML = laboratoria[i];
//         select.appendChild(opt); //El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación
//     }
// }
// const setDrawGeneration = () => {
// 	document.getElementById('generation').innerHTML = ""; //Limiamps el select de generaciones cada vez que se seleccione una nueva sede
// 	document.getElementById('tabla').innerHTML = ""; //Limpiamos la tabla cada vez que se cambie la sede
// 	let sede = document.getElementById('selectSedes').value; //obtenemos el valor de la lista de sedes seleccionada, con el evento onchange detectamos cada vez que cambie la lista de sedes
// 	let select = document.getElementById('generation'); //guardamos el elemento select de generatoion en la variable select para poder hacer el contenido y llenarlo con la lista de generaciones
// 	let keys = dataDashboard.loadGeneration(sede);
// 	console.log(keys);
//     for (let i = 0; i < keys.length; i++) {//recorremos los keys del objeto data[valor]['generacion']
//         opt = document.createElement('option');//aqui creamos un elemento option que es la para el select(lista) de generaciones
//         opt.value = keys[i];//le asignamos el valor con el incide del elemento que le corresponda ejemplo keys[0]= tercera, esto se hace para poder tomar el valor despues y saber que generacion estan seleccionando
//         opt.innerHTML = keys[i];//le asignamos el mismo valor en el texto keys[0]= tercera
//         select.appendChild(opt);//creamos el valor y el texto al final del elemento ejemplo <option value="cuarta">cuarta</option>
//     }
//
// }
