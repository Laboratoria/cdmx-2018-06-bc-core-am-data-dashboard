let keys = Object.keys(data);
let select = document.getElementById('selectSedes');

for (let i = 0; i < keys.length; i++) {
  	let opt = document.createElement('option');
    opt.value = keys[i];
    opt.innerHTML = keys[i];
    select.appendChild(opt);
}; 