
const consumir_api = async () => {
    const casas = await fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`);
    const casas_totales = await casas.json();

    let items = [];
    casas_totales.forEach( (element, index) => {
        
        let item = `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.casa.compra}</td>
        <td>${element.casa.venta}</td>
        <td>${element.casa.agencia}</td>
        <td>${element.casa.nombre}</td>
        <td>${element.casa.variacion}</td>
        <td>${element.casa.ventaCero}</td>
        <td>${element.casa.decimales}</td>
        </tr>`

        items.push(item);
    });

    document.getElementById("tabla").innerHTML = items.join('');
}

consumir_api();