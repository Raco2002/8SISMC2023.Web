function validarCampos() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else{
        window.location.href = "./PaginaPrinU.html";
    }
}