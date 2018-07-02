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

let api = "https://api.myjson.com/bins/vv6gi";

function tableData (data) {
    
    //Creates the header using keys from JSON

    let objectKeys = Object.keys(data[0]);
    let table = document.querySelector('table');
    let headerRow = document.createElement ('tr');
    
    for (i=0; i < objectKeys.length; i++) {
        let headerCell = document.createElement('th');
        if (objectKeys[i].startsWith("first")) {
            headerCell.append(document.createTextNode("Not First Name"));
        } else {
            headerCell.append(document.createTextNode(objectKeys[i]));
        }
        
        headerRow.append(headerCell);
    };
    
    table.append(headerRow);
    
};




//Get JSON, run function

fetch(api)
        .then(function (response) {
        return response.json();
    }).then(function (json) {
       tableData(json);
});

// Function

    function tableData (data) {
        
        // Create Headings
        
        let objectKeys = Object.keys(data[0]);
        let table = document.querySelector('table');
        let headerRow = document.createElement ('tr');
        
        for (let keyName of objectKeys) {
               let headerCell = document.createElement('th');
               headerCell.append(document.createTextNode(keyName));
               headerRow.append(headerCell);
           };
        
        table.append(headerRow);
        
        // Table Data
        
        for (let i = 0; i < data.length; i++) {
               let dataRow = document.createElement('tr');
               
               for (let keyName of objectKeys) {
                   let dataCell = document.createElement('td');
                   if (data[i][keyName] === null) {
                       dataCell.append(document.createTextNode("Not Known"));
                   } else if (data[i][keyName].startsWith("data:image")) {
                       let img = document.createElement('img');
                       img.src = data[i][keyName];
                       dataCell.append(img);
                   } else {
                       dataCell.append(document.createTextNode(data[i][keyName]));
                   };
                   
                   dataRow.append(dataCell);
               };
               
               table.append(dataRow);
           }
       };