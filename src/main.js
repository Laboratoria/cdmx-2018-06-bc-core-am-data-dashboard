let sede = document.getElementById('buttons-campus');
let gen = document.getElementById('buttons-generations');
let ingresar = document.getElementById('ingresar');
let inputName = document.getElementById('input-name');
let password = document.getElementById('input-password');
let form = document.getElementById('form');
// let accessMexico = document.getElementById("mexico");
// let accesLima = document.getElementById("lima");
// let accessSantiago = document.getElementById("santiago");

// Ocultar las sedes
sede.style.display = 'none';
gen.style.display = 'none';

// Botones de login
ingresar.addEventListener('click', obtenerDatos = () => {
  let usuario1 = inputName.value;
  let password1 = password.value;

  if (usuario1 === 'lucile' && password1 === '123') {
    sede.style.display = 'block';
    form.style.display = 'none';
  } else {
    alert('Usuario no identificado');
  }
});

// Función para pintar sedes en el DOM
const sedes = (laboratoria) => {
  const containerButtonsCampus = document.getElementById('container-buttons-campus');
  for (key in laboratoria) {
    const divCol = document.createElement('div');
    const aElement = document.createElement('a');
    divCol.classList.add('col-4');
    aElement.id = key;
    aElement.innerHTML = key;
    divCol.appendChild(a);
    containerButtonsCampus.appendChild(divCol);

    divCol.addEventListener('click', () => generations(laboratoria));
  }
};

const generations = (laboratoria) => {
  sede.style.display = 'none';
  gen.style.display = 'block';
  const selectSede = event.target.id;
  const containerButtonsGenerations = document.getElementById('container-buttons-generations');
  for (key in laboratoria) {
    if (key === selectSede) {
      generation1 = Object.keys(laboratoria[key].generacion);
      generation1.forEach(elements => {
        generation1 = elements;

        const divCol = document.createElement('div');
        const aElement = document.createElement('a');
        divCol.classList.add('col-4');
        aElement.id = generation1;
        aElement.innerHTML = generation1;
        divCol.appendChild(a);
        containerButtonsGenerations.appendChild(divCol);
      });
    }
  }
};

// Botones de ingreso a generaciones
// accessMexico.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accesLima.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });

// accessSantiago.addEventListener("click", event => {
//     let access = event.target.id;
//     gettingData(access);
// });
