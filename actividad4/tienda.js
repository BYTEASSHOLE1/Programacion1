export default class Tienda{
    constructor(){

    }
   async consumir_api(){


     const product = await fetch('https://fakestoreapi.com/products/category/'+ document.getElementById("slt").value)

     fetch('https://fakestoreapi.com/products/categories/'+document.getElementById("slt").value)







     const productos_definitivos = await product.json ()
     let filas = []

     productos_definitivos.forEach(element => {
     let columna = `
     <div class="col-lg-4">
     <div class="card" style="width: 18rem;">
     <img height="270" src="${element.image}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 class="card-title">${element.title}</h5>
     <p class="card-text">${element.description}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
     </div>
     </div>`


     filas.push(columna)   


     });

     document.getElementById("fila").innerHTML = filas.join("")
    
     
    }
}