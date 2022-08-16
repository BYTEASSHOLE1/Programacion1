export default class Cliente {

    constructor(n,s,d)
    {
        this.name = n;
        this.surname = s;
        this.dni = d;
    }

    mostrar_datos_personales(){

        console.log(`
            name: ${this.name}
            surname: ${this.surname}
            dni: ${this.dni}
            `)
    }
}