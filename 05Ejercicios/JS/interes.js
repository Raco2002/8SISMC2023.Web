// Vamos a crear una funcion que se encarga de vaidar la entrada de datos

function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

//keyCode son todos los codigos de las teclas del teclado
// d  es el digito y el punto es porque hay flotantes

function interes(){
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*0.02;
    var total = interes + resul;

    document.formulario.sueldoI.value = "$" + total;
}

function borrar(){

    document.formulario.sueldoI.value = " ";
    document.formulario.cantidad.value = " ";
}



//Ejercicio 2




function sueldo1(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function sueldo2(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function sueldo3(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function totalsueldo(){
    var sueldo1 = parseInt(document.formulario.sueldo1.value);
    var sueldo2 = parseInt(document.formulario.sueldo2.value);
    var sueldo3 = parseInt(document.formulario.sueldo3.value);
    var sueldo1Valor = sueldo1();
    var sueldo2Valor = sueldo2();
    var sueldo3Valor = sueldo3();

    var suelsubtotal = sueldo1Valor + sueldo2Valor + sueldo3Valor;
    var sueltotal = suelsubtotal * .10;

    document.formulario.sueldototal.value = "$" + sueltotal;
}

function borrar1(){

    document.formulario.sueldo1.value = "";
    document.formulario.sueldo2.value = "";
    document.formulario.sueldo3.value = "";
}