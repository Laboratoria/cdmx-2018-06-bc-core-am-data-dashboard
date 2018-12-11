function usrpas() {
  if (document.form1.txt.value === 'Staff' && document.form1.num.value === 123) {
    window.location = '../index.html';
  } else {
    alert('Error en Usuario o Contraseña. Intenta de nuevo.');
  }
}
document.oncontextmenu = new Function('return false');


function password() {
  alert('Usuario: staff ' + '\nContraseña: 123');
}
