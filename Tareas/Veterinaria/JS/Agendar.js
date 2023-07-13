function validarCampos() {
    var selectedOptions = 0;
    var selectElements = document.querySelectorAll("select");
    
    for (var i = 0; i < selectElements.length; i++) {
      if (selectElements[i].value !== "") {
        alert("Se ha realizado la cita.");
      } else {
      alert("Por favor, complete todos los campos.");
      }
    }
}