function usrpas() {
    if (document.form1.txt.value == "Lucile" && document.form1.num.value == "123") {
      window.location = "../index.html"
    } else {
      alert("Error en Usuario o Contraseña. Intenta de nuevo.")
    }
  }
  document.oncontextmenu = new Function("return false");