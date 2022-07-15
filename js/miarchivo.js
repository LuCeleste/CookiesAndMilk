let nombreIngresado = prompt("Bienvenido/a! ¿Como es tu nombre? Si no desea brindar esa información, escribir ESC");
while (nombreIngresado !== "ESC"){
    let salida  = "¡Hola, " + nombreIngresado + "!";
    alert(salida);
    break;
}


let edad = parseInt(prompt("Cual es tu edad?"));
do{
    if (edad < 14){
    alert("¡Pedir ayuda a un adulto!");
    break;}
    let x =false
}while(x=false)



// Objetos
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

do{
    elegirTorta = parseInt(prompt(`Pedir precio de la torta: (ingresar número) \n\n 1- ${torta1.nombre}, sabor ${torta1.sabor} \n 2- ${torta2.nombre},  sabores ${torta2.sabor}\n 3- ${torta3.nombre}, sabor ${torta3.sabor} \n 4- Salir`))
    switch (elegirTorta) {
        case 1:
            torta1.sumaIva()
            break;
        case 2:
            torta2.sumaIva()
            break;
        case 3:
            torta3.sumaIva()
            break;
        default:
            alert('Los precios son validos hasta el 05/08/2022')
            break;
    }
} while(elegirTorta !== 4);



// Array

const gustos = [torta1.sabor, torta2.sabor, torta3.sabor];
do{
    let nuevo = prompt("Que sabores te gustaría que incorporemos? Danos 2 ideas");
    gustos.push(nuevo);

} while(gustos.length < 5);
alert(`Nuestro menú quedaría asi: ${gustos}. Muchas Gracias ${nombreIngresado}!`)



let TortaArray = [torta1, torta2, torta3]
let nombres = [torta1.nombre, torta2.nombre, torta3.nombre];
let productosEnCarro = [];
console.log(TortaArray)


let TortasSeleccionadas = prompt(`Que torta desea encargar?: (ingresar "salir" si no desea pedir) \n\n` + torta1.mostrarProducto() + "\n\n" + torta2.mostrarProducto() + "\n\n" + torta3.mostrarProducto());

while (TortasSeleccionadas != "salir" && TortasSeleccionadas != null) {
        let productoParaCarro = TortaArray.find(
            (item) => item.nombre == TortasSeleccionadas
            );

        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }   
        break;
}


if (productosEnCarro.length > 0) {
    alert(`${nombreIngresado} te invitamos a Iniciar sesion o Registrarte para terminar tu compra`);
    let email = prompt('Ingrese su email');
    let tel = prompt('Ingrese su tel');
    comprar(email, tel, productosEnCarro);
}

function comprar(email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);  
    alert("Gracias " + nombreIngresado + " por tu compra. \n Total sin iva: $" + cant);   
}

// DOM

const budinSabores = ["Limon", "Vainilla", "Marmolado", "Coco", "Red Velvet", "Mandarina"]
const budinesList = document.getElementById('budines')

budinSabores.forEach((dato) => {
    const li = document.createElement('li')
    li.innerText = dato
    // li.className = "pink"
    budinesList.append(li)
})

setTimeout(() => {
    const container =  document.getElementById('tituloPedido')
    container.innerHTML = `Gracias por tu compra`;
},10000);


// Clase Eventos

let boton = document.getElementById("btnForm");
let inputNombre = document.getElementById("inputNombre");
let inputMail = document.getElementById("exampleInputEmail1");

inputNombre.oninput = () => {
    nombreForm = inputNombre.value;
}
inputMail.oninput = () => {
    emailForm = inputMail.value;
}
boton.onclick = () => {
    alert("Gracias " + nombreForm + " por brindarnos tu mail: " + emailForm);
} 

