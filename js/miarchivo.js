function renderProducts() {
fetch('/data.json')
  .then((resinicial) => resinicial.json())
  .then((res) => {
    res.forEach( (product) => {
        productEl.innerHTML += `
        <div class="item">
            <h4>
            ${product.name}
            </h4>
            <p>
            $ ${product.price}
            </p>
            <img class="item-img" src=${product.img} alt="${product.name}">
            <button onclick="addToCart(${product.id})" type="button" class="btn add-to-cart btn-outline-primary">Agregar al pedido</button>
        </div>
        `
  })
})
}
renderProducts();


const productsListEl = document.querySelector(".products-list");
const productEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
    fetch('/data.json')
  .then((resinicial) => resinicial.json())
  .then((res) => {
    const miArray = res;
    if(cart.some((item) => item.id === id) ){
        changeNumberOfUnits("plus", id)
    } 
    else{
        const item = miArray.find((product) => product.id === id);
        Toastify({
            text: 'Agregado al carrito 🧁🍰',
            duration: 3000,
            gravity: 'top',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #E48C89, #4C7295)'
            }}).showToast();
        
        cart.push({
            ...item,
            numberOfUnits: 1,
        })}
        updateCart();
    })

}


function updateCart() {
    renderCartItems();
    renderSubtotal();

    localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
    let totalPrice = 0,
     totalItems =0;
    cart.forEach((item) => {
        
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotalEl.innerHTML = `
    Subtotal (${totalItems} items): $ ${totalPrice}
    `
}

function renderCartItems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src=${item.img} alt="${item.name}">
                <h4> ${item.name}</h4>
            </div>
            <div class="unit-price">
                <p>$ ${item.price} </p>
            </div>
            <div class="units">
                <button onclick="removeItemFromCart(${item.id})" type="button" class="btn add-to-cart btn-outline-primary">Eliminar \u274C</button>
                <div class="btn1 minus" onclick="changeNumberOfUnits('minus', ${item.id})" > - 
                </div>
                <div class="number"> ${item.numberOfUnits}
                </div>
                <div class="btn1 plus" onclick="changeNumberOfUnits('plus',  ${item.id} )" > + 
                </div>
            </div>
        </div>
        `
    })
}

// removeitems con sweetalert


function removeItemFromCart(id){
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Seguro/a que queres eliminar este producto?',
    text: "Esta accion no puede deshacerse",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, estoy seguro/a!',
    cancelButtonText: 'No, lo quiero!',
    reverseButtons: true,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Eliminado',
        'El producto fue eliminado del carrito',
        'warning',
      )
      cart = cart.filter((item) => item.id !== id);
    updateCart();
    } else if (

      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Genial',
        'Tu producto sigue en el carrito :)',
        'success'
      )
    }
  })
  
}


function changeNumberOfUnits(action, id) {
    cart = cart.map((item) =>{
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id) {
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits --;
            } else if (action === "plus" && numberOfUnits < 5){
                numberOfUnits++;
                Toastify({
                    text: 'Agregado al carrito 🧁🍰',
                    duration: 3000,
                    gravity: 'top',
                    position: 'left',
                    style: {
                        background: 'linear-gradient(to right, #E48C89, #4C7295)'
                    }}).showToast();
            } else if (action === "plus" && numberOfUnits >= 5){
                Toastify({
                    text: 'Limite de 5 unidades ❌',
                    duration: 3000,
                    gravity: 'top',
                    position: 'left',
                    style: {
                        background: 'black'
                    }}).showToast();
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}




// OBJETOS TORTAS
class Torta {
    constructor( nombre, sabor, precio ){
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = parseFloat(precio);
    }

}

const torta1 = new Torta( "Chocotorta" , "Dulce de leche y Chocolinas", "1200");
const torta2 = new Torta("Clasica", "Vainilla o Chocolate", "1000");
const torta3 = new Torta("Clasica con forma de inicial", "Brownie", "1500");


// GUSTOS 

let gustos = [torta1.sabor, torta2.sabor, torta3.sabor];

let formularioGustos = document.getElementById("formularioGustos");
let tabla = document.getElementById("tablaGustos");
let errores = document.querySelector(".errores")
errores.style.display = "none";
let inputGusto = document.getElementById("gusto");


formularioGustos.onsubmit = (event) => {
    event.preventDefault();
    let nuevoGusto = inputGusto.value;
    if(inputGusto.value != ""){
        gustos.push(nuevoGusto);
        limpiarTabla();
        agregarGustosTabla();
        errores.style.display = "none";
        formularioGustos.reset();
    }else{
        errores.style.display = "block"
    }    
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1)
    }
}

function agregarGustosTabla(){
    gustos.forEach(gustos => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td> ${gustos} </td>
        `

    tabla.append(filaTabla)

    });
}



// NEWSLETTER

let inputNombre;
let inputMail;
let boton;
let salidaNews;
boton = document.getElementById("btnNews");
inputNombre = document.querySelector(".newsletterFormNombre");
inputMail = document.querySelector(".newsletterForm");
salidaNews = document.getElementById("Newsletter");

inputNombre.oninput = () => {
    nombreForm = inputNombre.value;
}
inputMail.oninput = () => {
    emailForm = inputMail.value;
}
boton.onclick = (event) => {
    event.preventDefault();
    let salidaNewsletter = "Gracias " + nombreForm + " por brindarnos tu mail: " + emailForm;
    if(inputMail.value != ""){
        salidaNews.innerHTML = `
        ${salidaNewsletter}
        `
        errores.style.display = "none";
    }else{
        errores.style.display = "block"
    }  
} 



// CONSULTA

let formularioConsulta = document.getElementById("formulario")
let consultaMail = document.getElementById("exampleInputEmail1")
let consultaNombre = document.getElementById("inputNombre");

formularioConsulta.onsubmit = (event) => {
    event.preventDefault();
    let nombreContacto = consultaNombre.value;
    if(consultaMail.value != ""){
        formularioConsulta.innerHTML = `
        Gracias por contactarnos, ${nombreContacto}, a la brevedad respondemos!`}
        else{
        errores.style.display = "block"}

    }

