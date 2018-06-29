//aqui la pintada 

//Hosteamos a "laboratoria.json" en un API y guardamos la URL en una variable. 
let api = "https://api.myjson.com/bins/1efx86"
//console.log(api);

//Funcion para cargar el archivo .json
fetch (api) (response => response.json)