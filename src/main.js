lima.addEvenListener("click",event =>{
    let impresion = document.getElementById(generationlima);
    impresion.innertHTML = window.generation();
})
mex.addEventListener("click",event=>{
    let impresion = document.getElementById(generationmexico);
    impresion.innerHTML = window.generation();

})
santi.addEventListener("click",event => {
    let impresion= document.getElementById(generationsantiago);
    impresion.innerHTML = window.generation()
})