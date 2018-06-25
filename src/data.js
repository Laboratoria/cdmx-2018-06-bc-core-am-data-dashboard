
debugger;
var requestURL = "https:/github.com/JudithCortes/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/data/laboratoria.json";
var request= new XMLHttpRequest();
request.open("GET",requestURL);
request.responseType="json"
request.send();
request.onload= function (){
  var sedes=request.response;
  populateHeader(sedes);
  showSedes(sedes);
}
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['generacion'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Generacion: ' + jsonObj['generacion'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
function showSedes(jsonObj) {
  var Sede = jsonObj['generacion'];

  for (var i = 0; i < sede.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = sede[i].name;
    myPara1.textContent = 'generacion: ' + sede[i].generacion;

    var sedeGene = sedes[i].powers;
    for (var j = 0; j < sedeGene.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = sedeGene[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

/*$(documento).ready(function(){
$.getJSON("imprime", function(response){
  console.log(JSON.stringfy(response));
});

});

/*var json={
  "empleados": [{"nombre":"eugenio", "edad":35},
                {"nombre":"maria", "edad":45},
              ],
  "autos": [{"marca":"Ford", "modelo":2016},
           {"marca":  [{"submarca1":"sub1"},{"submarca2":"sub2"}] },
              ]

};

$("#res").text(json.autos [1].marca[1].submarca1 );


/*window.onload()=>{
  datosJSON();
}

function datosJSON() {
  var dato=document.getElementById('datosJSON');
  dato.onclick=_function(){
    requestServer("GET", "data/laboratoria.json", "text", mostrardatosJSON
}
function mostrardatosJSON(rpta){
  alert(rpta);
}*/

/*/function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "data/laboratoria.json", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("data/laboratoria.json", function(text){
    var data = JSON.parse(text);
    // console.log(data(0));
    console.log(data(0));
});*/
