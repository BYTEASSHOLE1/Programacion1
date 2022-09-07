// Primer paso - crear un arreglo de prueba
let numero = [1, 5, 10, 15];

let nuevo_arreglo = numero.map(element => element * 2);

console.log(nuevo_arreglo)

let valores = [1, 4, 9];

let nuevo_array = valores.map(element => Math.sqrt(element));
console.log(nuevo_array);

//Mapear un array de objetos

let datos_personales = [
    { nombre:'Franco', apellido:'Bravo'},
    { nombre:'Bruno', apellido:'Acuña'},
    { nombre:'Ignacio', apellido:'Cappellini'}
]

let nombre_apellido = datos_personales.map( element => element.nombre + " " + element.apellido);
console.log(nombre_apellido);