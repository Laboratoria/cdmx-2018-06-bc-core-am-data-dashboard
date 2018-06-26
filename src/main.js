let getData = document.getElementById("get");
let getDatas = document.getElementById("gets");
let result = document.getElementById("result");
let resultS = document.getElementById("resultS");

getData.addEventListener("click", gettingData);
function gettingData() {
  result.innerHTML = window.data.getJson();
}
getDatas.addEventListener("click", gettingDataS);
function gettingDataS() {
  resultS.innerHTML = window.data.computeStudentsStats();
}
