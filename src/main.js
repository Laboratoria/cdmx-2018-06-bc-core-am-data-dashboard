lima.addEventListener("click",event => {
  let print = document.getElementById("generacionlima");
  print.innerHTML = window.generaciones.computeStudentsStats();
}
);
mex.addEventListener("click",event => {
  let print = document.getElementById("generacionmexico");
  print.innerHTML = window.generaciones.computeStudentsStats();
}
);
sant.addEventListener("click",event => {
  let print = document.getElementById("generacionsantiago");
  print.innerHTML = window.generaciones.computeStudentsStats();
}
);