//JS es multiparadicmico y vamos iniciar a 
//la programación por funciones

function validar(formulario){
    //hay varias formas para poder obtener los
    //parametros del formulario
    if(formulario.nombre.value.length <= 3){
        alert("Escriba mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }

    /* var checkOK = "qwertyuiopasdfghjklñzxcvbnm"+
    "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var checkString = formulario.nombre.value;

    var todoesValido = true;
    /*
        JavaScript es un lenguaje de programacion no tipado eso
        quiere decir que solo maneja 3 tipos de variable de dato.

        var es una variable cambiante con acceso publico.

        let es una variable de acceso restringido

        const es una connstante de acceso unico
    *
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesValido = false;
            break;
        }
    }
    if(!todoesValido){
        alert("Escriba unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    } */

    var checkOK = "1234567890";

    var checkString = formulario.nombre.value;

    var todoesValido = true;
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesValido = false;
            break;
        }
    }
    if(!todoesValido){
        alert("Escriba unicamente numeros en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var txt = formulario.email.value;

    /* Expresion regular basico de un correo = /\S+@\S+\.\S+/ */
    var b = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
}