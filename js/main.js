// OBJETOS TORTAS
class Torta {
  constructor(nombre, sabor, precio) {
    this.nombre = nombre;
    this.sabor = sabor;
    this.precio = parseFloat(precio);
  }
}

const torta1 = new Torta("Chocotorta", "Dulce de leche y Chocolinas", "1200");
const torta2 = new Torta("Clasica", "Vainilla o Chocolate", "1000");
const torta3 = new Torta("Clasica con forma de inicial", "Brownie", "1500");

// GUSTOS

let gustos = [torta1.sabor, torta2.sabor, torta3.sabor];

let formularioGustos = document.getElementById("formularioGustos");
let tabla = document.getElementById("tablaGustos");
let errores = document.getElementById("errores");
errores.style.display = "none";
let inputGusto = document.getElementById("gusto");

function tablaInicial() {
  gustos.forEach((gustos) => {
    let tabla = document.querySelector(".tabla");
    let filaTabla = document.createElement("tr");

    filaTabla.innerHTML = `
        <td> ${gustos} </td>
        `;
    tabla.append(filaTabla);
  });
}
tablaInicial();

formularioGustos.onsubmit = (event) => {
  event.preventDefault();
  let nuevoGusto = inputGusto.value;
  if (inputGusto.value != "") {
    gustos.push(nuevoGusto);
    limpiarTabla();
    agregarGustosTabla();
    errores.style.display = "none";
    formularioGustos.reset();
  } else {
    errores.style.display = "block";
  }
};

function limpiarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }
}

function agregarGustosTabla() {
  gustos.forEach((gustos) => {
    let tabla = document.querySelector(".tabla");
    let filaTabla = document.createElement("tr");

    filaTabla.innerHTML = `
        <td> ${gustos} </td>
        `;

    tabla.append(filaTabla);
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
};
inputMail.oninput = () => {
  emailForm = inputMail.value;
};
boton.onclick = (event) => {
  event.preventDefault();
  let salidaNewsletter =
    "Gracias " + nombreForm + " por brindarnos tu mail: " + emailForm;
  if (inputMail.value != "") {
    salidaNews.innerHTML = `
        ${salidaNewsletter}
        `;
  }
};

// CONSULTA

let formularioConsulta = document.getElementById("formulario");
let consultaMail = document.getElementById("exampleInputEmail1");
let consultaNombre = document.getElementById("inputNombre");

formularioConsulta.onsubmit = (event) => {
  event.preventDefault();
  let nombreContacto = consultaNombre.value;
  if (consultaMail.value != "") {
    formularioConsulta.innerHTML = `
        Gracias por contactarnos, ${nombreContacto}, a la brevedad respondemos!`;
  }
};
