
let perritosAPI="https://dog.ceo/api/breeds//image/random"



  fetch(perritosAPI).then(response)=>{
  	return response.json();
  	  }.then((data)=>{
  	  	data.message;
  	  	document.getElemenById("aqui la imagen").src=data.message
  	  })12

