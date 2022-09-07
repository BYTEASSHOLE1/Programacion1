let criptos = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana'];

criptos.unshift('Stellar')
console.log(criptos)



let indice8 = criptos.indexOf('Shiba Inu')
let eliminados = criptos.splice(indice8,2)
console.log(criptos)
console.log('Eliminados: '+eliminados)


criptos.push('Gate')
console.log(criptos)



let longitud = criptos.length

console.log('longitud = '+longitud) 


let ultimo = criptos[longitud-1]
console.log('ultimo = '+ultimo)


let indice = criptos.indexOf('Helium')
console.log(criptos[indice])


function imprimir() { 
    let parrafo = document.getElementById("parrafo");
     let longitud = criptos.length; 
     let ultimo = criptos[longitud-1]; 
     let indice3 = criptos.indexOf('Helium');
      parrafo.innerHTML = `<b>Longitud</b> = ${longitud}
     <br><b>Ultimo elemento</b> = ${ultimo} <br>
      <b>Elemento seleccionado</b> = ${criptos[indice3]}` 
}
document.getElementById("btn").addEventListener("click", imprimir);


