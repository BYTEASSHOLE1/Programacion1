import Pitagoras from "./pitagoras.js";


function calcular(){

    let pitagoras = new Pitagoras()
    pitagoras.a = document.getElementById("a").value
    pitagoras.b = document.getElementById("b").value
    
   let respuesta = pitagoras.mostrar_datos()
   document.getElementById("valor").textContent = `H= `+respuesta
}
document.getElementById("calcular").addEventListener("click",calcular)

