import Tienda from './tienda.js'

function ejecutar (){
    let tienda = new Tienda ()
    tienda.consumir_api();

}
document.getElementById("slt").addEventListener("change",ejecutar)
