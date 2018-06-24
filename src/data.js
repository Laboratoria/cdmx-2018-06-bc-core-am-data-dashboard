
debugger;

$(documento).ready(function(){
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
