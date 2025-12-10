
document.addEventListener("DOMContentLoaded", () => {

  // Reservas (demo)
  const form = document.getElementById("formReserva");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por reservar! Te enviaremos un correo de confirmación 🍷✨");
    form.reset();
  });
});
