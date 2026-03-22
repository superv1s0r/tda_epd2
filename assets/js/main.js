(() => {
  "use strict";

  const form = document.getElementById("reservaForm");
  const toastElement = document.getElementById("toastReserva");

  if (!form || !toastElement) {
    return;
  }

  const toast = new bootstrap.Toast(toastElement, {
    delay: 3500
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    form.classList.add("was-validated");
    toast.show();
    form.reset();
    form.classList.remove("was-validated");
  });
})();
