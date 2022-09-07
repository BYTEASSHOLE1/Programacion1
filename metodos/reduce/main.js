
let numero = [1,4,2,3]


let resultado = numero.reduce((ValorAnterior , ValorActual )=>{

    return ValorAnterior + ValorActual


})

console.log(resultado)

//primera pasada accede al primer elemento (1)

// ValorAnterior = 0; ValorActual = 1;  


//segunda pasada accede al primer elemento (4)

// ValorAnterior = 1; ValorActual = 4; 