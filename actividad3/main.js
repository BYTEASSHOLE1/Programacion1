function mostrar_objeto (){

    let cliente = {
        nombre: 'pepito',
        apellido: 'Guajardo',
        dni:4556123,
        correo:{
            outlook:'superpepito@outlook.com',
            gmail:'pepis@gmail.com',
            yahoo:'elpepo@yahoo.com'
        }
    }

    /*
    const outlook = cliente.correo.outlook
    const gmail = cliente.correo.gmail
    const yahoo = cliente.correo.yahoo
    */

     const {outlook,gmail,yahoo } = cliente.correo 



    console.log(`
        correos de pepito:


        outlook: ${outlook}
        gmail: ${gmail}
        yahoo: ${yahoo}
       
        `)  
}
mostrar_objeto()


const consumir_api = async () => {
    
  const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')

     const publicaciones_definitivas = await publicaciones.json()




let items_totales = []

    publicaciones_definitivas.forEach(element => {
        let item = `<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)
    });
    document.getElementById("lista_publicaciones").innerHTML = items_totales.join('')
}

consumir_api()