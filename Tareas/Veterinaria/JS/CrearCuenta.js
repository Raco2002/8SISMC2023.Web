function agregarCampos() {
    var cantidadSeleccionada = document.getElementById("cantidad").value;
    var camposContainer = document.getElementById("campos-container");
  
    // Limpiar el contenedor de campos
    camposContainer.innerHTML = "";

    // Obtener la cantidad máxima permitida (10 campos)
    var cantidadMaxima = Math.min(cantidadSeleccionada, 10);
  
    // Agregar los campos seleccionados
    for (var i = 0; i < cantidadSeleccionada; i++) {
      var nuevoCampo = document.createElement("input");
      nuevoCampo.type = "text";
      nuevoCampo.placeholder = "Mascota N°" + (i + 1);
  
      camposContainer.appendChild(nuevoCampo);
    }
  }


 /* const miCheckbox = document.getElementById('mi-checkbox');
  const miBoton = document.getElementById('mi-boton');

miCheckbox.addEventListener('change', function() {
  if (this.checked) {
    miBoton.disabled = false;
  } else {
    miBoton.disabled = true;
  }
});*/


window.addEventListener("DOMContentLoaded", function() {
  var campos = document.querySelectorAll("input, select");
  campos.forEach(function(campo) {
      campo.addEventListener("input", validarCampos);
  });
});

function validarCampos() {
  var text = document.getElementById("text").value;
  var email = document.getElementById("email").value;
  var cantidad = document.getElementById("cantidad").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("number").value;
  var checkbox = document.getElementById("mi-checkbox").checked;
  var boton = document.getElementById("mi-boton");

  if (email !== "" && text !== "" && cantidad !== "0" && password !== "" && number !== "" && checkbox) {
      boton.disabled = false;
  } else {
      boton.disabled = true;
  }
}
