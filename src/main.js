let api = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
let btn = document.querySelector("#btn");
let box = document.querySelector("#box");

btn.addEventListener("click", function(){
    clicking();
});

let clicking = function() {
    fetch(api).then(function(data){
        return data.json();
    })
    console.log(data.json());
   
};