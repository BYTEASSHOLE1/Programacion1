import Cliente from "./cliente.js";

function cargar(){
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let dni = document.getElementById("dni").value

    let cliente = new Cliente(name,surname,dni)
    cliente.mostrar_datos_personales()
}
document.getElementById("mostrar").addEventListener("click",cargar);