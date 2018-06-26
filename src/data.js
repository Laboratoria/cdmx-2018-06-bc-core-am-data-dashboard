
debugger;

var requestURL = 'https://raw.githubusercontent.com/ViniciaLaraRangel/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = primera => {

  let sedes = request.response;
  mostrarSedes(sedes);
  generaciones= [];

        function mostrarSedes(sedes) {
            /*let sedes = "";*/
            let contador=0;
            for (let i in sedes) {
                /*sedes += i;*/
                contador++;

                if(contador==1){
                  document.getElementById("1").innerHTML=i;
                    let gen='';
                    let genera=0;
                    sedes.forEach((generaciones)=>{
                      gen=generaciones['gen'];
                      alert(gen);
                    };
                  )}
                }
              }
            }
