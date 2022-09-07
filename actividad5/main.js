const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
    lenguaje: 'TypeScript',
    patron: 'MVVM',
    spa: 'si'
    }
}

const {lenguaje, patron, spa} = framework.características;
const {titulo, nombre} = framework

const ejecutar = () => {
    console.log(`
    Titulo: ${titulo},
    Nombre: ${nombre},
    Lenguaje: ${lenguaje},
    Patron: ${patron},
    SPA: ${spa}`)
}

document.getElementById("btn_ejecutar").addEventListener("click", ejecutar);