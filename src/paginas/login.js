function usrpas() {
  if (document.form1.txt.value == 'staff' && document.form1.num.value == 123) {
    alert('Error en Usuario o Contraseña. Intenta de nuevo.');
  } else {
    
    window.location = '../index.html';
  }
}


function password() {
  alert('Usuario: staff ' + '\nContraseña: 123');
}
