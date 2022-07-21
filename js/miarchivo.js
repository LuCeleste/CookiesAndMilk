
// do{
//     elegirTorta = parseInt(prompt(`Pedir precio de la torta: (ingresar número) \n\n 1- ${torta1.nombre}, sabor ${torta1.sabor} \n 2- ${torta2.nombre},  sabores ${torta2.sabor}\n 3- ${torta3.nombre}, sabor ${torta3.sabor} \n 4- Salir`))
//     switch (elegirTorta) {
//         case 1:
//             torta1.sumaIva()
//             break;
//         case 2:
//             torta2.sumaIva()
//             break;
//         case 3:
//             torta3.sumaIva()
//             break;
//         default:
//             alert('Los precios son validos hasta el 05/08/2022')
//             break;
//     }
// } while(elegirTorta !== 4 );


// // CARRITO

// // let TortaArray = [torta1, torta2, torta3]
// // let nombres = [torta1.nombre, torta2.nombre, torta3.nombre];
// // let productosEnCarro = [];

// // let TortasSeleccionadas = prompt(`Que torta desea encargar?: (ingresar "salir" si no desea pedir) \n\n` + torta1.mostrarProducto() + "\n\n" + torta2.mostrarProducto() + "\n\n" + torta3.mostrarProducto());

// // while (TortasSeleccionadas != "salir" && TortasSeleccionadas != null) {
// //         let productoParaCarro = TortaArray.find(
// //             (item) => item.nombre == TortasSeleccionadas
// //             );

// //         if (productoParaCarro) {
// //                 productosEnCarro.push(productoParaCarro);                
// //             }   
// //         break;
// // }


// // if (productosEnCarro.length > 0) {
// //     alert(`${nombreIngresado} te invitamos a Iniciar sesion o Registrarte para terminar tu compra`);
// //     let email = prompt('Ingrese su email');
// //     let tel = prompt('Ingrese su tel');
// //     comprar(email, tel, productosEnCarro);
// // }

// // function comprar(email, tel, productosEnCarro) {
// //     let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);  
// //     alert("Gracias " + nombreIngresado + " por tu compra. \n Total sin iva: $" + cant);   
// // }




// OBJETOS TORTAS
class Torta {
    constructor( nombre, sabor, precio ){
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = parseFloat(precio);
    }
    mostrarProducto() {
        return (
        " Precio: " +
        this.precio + 
        " " +
        " Producto: " +
        this.nombre +
        "\n"
        );
    }
    sumaIva() {
        alert("El precio con IVA es de $" + this.precio * 1.21);
    }

}

const torta1 = new Torta( "Chocotorta" , "Dulce de leche y Chocolinas", "1200");
const torta2 = new Torta("Clasica", "Vainilla o Chocolate", "1000");
const torta3 = new Torta("Clasica con forma de inicial", "Brownie", "1500");






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

