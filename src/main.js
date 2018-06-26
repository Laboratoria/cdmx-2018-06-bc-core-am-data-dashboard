
//url para obtener el json
let apiUrl = "https://raw.githubusercontent.com/monicelica/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
// a través del boton iniciar funcion
sed.addEventListener("click", function(){
  sede(); 
})



let sede = function(){
	fetch(apiUrl).then(function(datos){
	return datos.json();
	}).then(function(data){
	console.log(data);
	})
}






/*let clicking = function(){
  fetch(api).then(function(datos){
  return datos.json();
  }).then(function(data){
  console.log(data.results[0].name.first);
    let nombre = data.results[0].name.first; 
    let apellido = data.results[0].name.last;
    let fullnameAPI = nombre + ' ' + apellido;
    
    fullname.innerHTML = fullnameAPI;
    
    
    let emailAPI = data.results[0].email;
    email.innerHTML = emailAPI;
    
    let usernameAPI = data.results[0].login.username;
    username.innerHTML = usernameAPI;
    
    let cityAPI = data.results[0].location.city;
    city.innerHTML = cityAPI;
    
    let avatarAPI = data.results[0].picture.large;
    avatar.setAttribute("src", avatarAPI);

  })
} */    
