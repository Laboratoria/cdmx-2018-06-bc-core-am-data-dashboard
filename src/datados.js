const getCampuses = () => {
    let request = new XMLHttpRequest();
    //Live API de Laboratoria
    request.open('GET', 'https://laboratoria-la-staging.firebaseapp.com/campuses', true);
    request.onload = function() {
        //Pasamos los datos a un objeto Javascript
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            //Loop de objeto
            data.forEach(campuses => {
                //Para cada sede, se crea un botón
                let btn = document.createElement("BUTTON");
                //En cada iteración, se le agregar el nombre de la sede.
                let txt = document.createTextNode(campuses.name);
                //Los unimos
                btn.appendChild(txt);
                //Unimos el botón al body del HTML
                document.body.appendChild(btn);

            });
        } else {
            console.log('error');
        }
    }
    request.send();
}

/*const getGenerations = () => {
    let secRequest = new XMLHttpRequest();
    secRequest.open('GET', '')
}*/