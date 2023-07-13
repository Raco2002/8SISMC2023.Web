function enviarFormulario() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
  
    if (email === "") {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    alert("Correo enviado con éxito.");
  }