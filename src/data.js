let keys = Object.keys(data); //asigno el objeto data en la variable keys, con objet.keys obtengo todo el data
let select = document.getElementById('selectSedes'); //selecSedes es el seleccionador de sedes y desde ahi parto a hacer el rastreo de la info de la data

for (let i = 0; i < keys.length; i++) { //recorre todo el objeto y me permite obtener la informacion
  	let opt = document.createElement('option'); //se guarda en opt
    opt.value = keys[i]; //es la informacion en determinada posicion y se asigna a opt
    opt.innerHTML = keys[i]; 
    select.appendChild(opt); //El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación
}; 