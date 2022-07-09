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

    sumaIva() {
        alert("El precio con IVA es de $" + this.precio * 1.21);
    }

}


const torta1 = new Torta( "Chocotorta" , "Dulce de leche y Chocolinas", "1200");
const torta2 = new Torta("Clasica", "Vainilla o Chocolate", "1000");
const torta3 = new Torta("Clasica con forma de inicial", "Brownie", "1500");

do{
    elegirTorta = parseInt(prompt(`Que torta querías pedir? (ingresar número) \n\n 1- ${torta1.nombre}, sabor ${torta1.sabor} \n 2- ${torta2.nombre},  sabores ${torta2.sabor}\n 3- ${torta3.nombre}, sabor ${torta3.sabor} \n 4- Salir`))
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


