
// funcion para el inicio de sesion
window.abrirPagina = () => {
  let user = document.getElementById('name').value;
  let loginUser = document.getElementById('login').value;


  if (user === 'admin' && loginUser === '123admin') {
    window.open('principal.html');
    window.close('index.html');
  } else {
    alert('Revisa bien tus datos');
  }
};
