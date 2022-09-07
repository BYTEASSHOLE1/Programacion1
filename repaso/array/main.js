//vamos a crear un arreglo
let lenguajes = ['Java','Python','JavaScript','C++','Visual Basic','Go']
//longitud de un arreglo
let longitud = lenguajes.length

console.log('longitud = '+longitud) 

//acceder al ultimo elemento de un arreglo

let ultimo = lenguajes[longitud-1]

//recorrer un arreglo

lenguajes.forEach((element, index )=> {
    console.log((index+1) + '-'+ element)
    
});

//agregar un elemento al final del arreglo
lenguajes.push('Php')
console.log(lenguajes)

//como elimino el ultimo arreglo de un arreglo
lenguajes.pop()
console.log(lenguajes)

lenguajes.unshift('C#')
console.log(lenguajes)

//como eliminar el primer objeto
lenguajes.shift()
console.log(lenguajes)

//como encontrar el indice de un elemento  y mostrarlo posteriormente
let indice = lenguajes.indexOf('JavaScript')
console.log(lenguajes[indice])

//como eliminar un elemento del arreglo segun un indice
let indice2 = lenguajes.indexOf('C++')
let eliminados = lenguajes.splice(indice2,2)
console.log(lenguajes)
console.log('Eliminados: '+eliminados)

//agregar elemento dentro de un arreglo
lenguajes.splice(indice, 0, 'Visual Basic')
console.log()

//copiar arreglo
let copia = lenguajes.slice()
copia.push('Ruby')
console.log(copia)