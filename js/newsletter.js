
// NEWSLETTER


function newslet(params) {
    let inputNombre;
let inputMail;
let boton;
let salidaNews;
boton = document.getElementById("btnNews");
inputNombre = document.querySelector(".newsletterFormNombre");
inputMail = document.querySelector(".newsletterForm");
salidaNews = document.getElementById("Newsletter");

      boton.onclick = (event) => {
        event.preventDefault();
        let nombreForm = inputNombre.value;
        let emailForm = inputMail.value;
        let salidaNewsletter =
          "Gracias " + nombreForm + " por brindarnos tu mail: " + emailForm;
        if (inputMail.value != "") {
          salidaNews.innerHTML = `
              ${salidaNewsletter}
              `;
        }
      };
}
