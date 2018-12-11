
const password = function password() {
  alert('Usuario: staff ' + '\nContraseña: web123');
};


let emailAdmin = document.getElementById('email-admin');
let passwordAdmin = document.getElementById('password-admin');
let logInBtnAdmin = document.getElementById('login');

const registroAdmin = () => {
  if (emailAdmin.value === 'staff' && passwordAdmin.value === 'web123') {
    location.href = '../index.html';
  } else {
    alert('El usuario y/o la contraseña son incorrectos');
  }
};
logInBtnAdmin.addEventListener('click', registroAdmin);
