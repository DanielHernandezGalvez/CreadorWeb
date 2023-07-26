const btn = document.getElementById("sendEmail");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_8r65f7w";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      showSuccessMessage();
    },
    (err) => {
      btn.value = "Send Email";
      failMessage();
    }
  );
});

function showSuccessMessage() {
  const successMessage = document.createElement("h4");
  successMessage.textContent = "Enviado con éxito";
  successMessage.style.color = "#00C896"; // Establece el color del texto a rojo
  successMessage.style.marginTop = "15px"; // Agrega un margen superior de 15px
  successMessage.style.fontSize = "2rem";
  form.appendChild(successMessage);

  setTimeout(function () {
    form.removeChild(successMessage);
  }, 10000); // Elimina el mensaje después de 10 segundos (10000 ms)
}
// mensaje fallido
function failMessage() {
  const failMessage = document.createElement("h4");
  failMessage.textContent = "Error de envío, intentelo nuevamente";
  failMessage.style.color = "#E15664"; // Establece el color del texto a verde
  failMessage.style.marginTop = "15px"; // Agrega un margen superior de 15px
  failMessage.style.fontSize = "2rem";
  form.appendChild(failMessage);

  setTimeout(function () {
    form.removeChild(failMessage);
  }, 10000); // Elimina el mensaje después de 10 segundos (10000 ms)
}
