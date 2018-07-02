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
    };
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
    };
  });
}
