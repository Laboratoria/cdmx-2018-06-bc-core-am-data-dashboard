
const gettingData = () => {
    let url = "https://raw.githubusercontent.com/soberanesmajo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"

    fetch(url).then(data => data.json())
     .then(data => {
         console.log(data);
     });

}

gettingData();