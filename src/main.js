lima.addEventListener("click",event => {
    let print = document.getElementById("generacionlima");
    print.innerHTML = window.generaciones.computeStudentsStats();
  }
  );
  mex.addEventListener("click",event => {
    let print = document.getElementById("generacionmex");
    print.innerHTML = window.generaciones.computeStudentsStats();
  }
  );
  sant.addEventListener("click",event => {
    let print = document.getElementById("generacionsant");
    print.innerHTML = window.generaciones.computeStudentsStats();
  }
  );