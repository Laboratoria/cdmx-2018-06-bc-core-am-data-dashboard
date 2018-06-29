let getData = document.getElementById("get");
let result = document.getElementById("result");

getData.addEventListener("click", gettingData);
function gettingData() {
  result.innerHTML = window.data.getInform();
}
