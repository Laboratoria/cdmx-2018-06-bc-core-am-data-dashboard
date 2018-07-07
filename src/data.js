<<<<<<< HEAD
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Hosteamos a "laboratoria.json" en un API y guardamos la URL en una variable. 
=======
const url = 'https://raw.githubusercontent.com/emeraldng/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

window.onload = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //esta func aun no existe, aqui van tantas fun necesites con la misma info
            renderInfo(data);

        })
        .catch(error => {
            console.log('errormio');

        })


}
>>>>>>> upstream/master
