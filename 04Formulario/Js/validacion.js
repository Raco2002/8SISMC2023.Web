//JS es multiparadicmico y vamos iniciar a 
//la programación por funciones

function validar(formulario){
    //hay varias formas para poder obtener los
    //parametros del formulario
    if(formulario.nombre.value.length <= 3){
        alert("Escriba mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }
}