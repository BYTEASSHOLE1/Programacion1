export default class Vehiculo {

    // declarando o inicializando el atributo marca
    marca = '';
    
    constructor(km)
    {
        this.kilometraje = km
    }


    mostrar_km () 
    {
        alert(`Kilometraje = ${this.kilometraje}`)
    }

    mostrar_marca() 
    {
        alert(`Marca del vehiculo: ${this.marca}
        `)
    }
}