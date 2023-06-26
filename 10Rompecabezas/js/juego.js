//vamos a crear un arreglo para contener las instrucciones

var instrucciones = ["Utiliza las flechas para mover las piezas", 
"Ordenar las piezas hasta alcanzar la imagen de objetivo"];

//vamos a crear una variable para guardar los movimientos

var movimientos = [];

/* 
Vamos a crear una matriz que represente la pocision del rompecabezas
*/

var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
];

var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
];

//Necesito una variable para guardar la pocision de la pieza vacia

var filaVacia = 2;
var columnaVacia = 2;

//vamos a hacer una funcion para mostrar las instrucciones

function mostrarInstrucciones(instrucciones){
    for(var i = 0; i < instrucciones.lenght; i++){
        mostrarInstruccionesEnLista(instruciones[i],"lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para poder saber cual fue el ultimo movimiento

function agregarUltimoMovimiento(direccion){
    movimientos.push(direcion);
}

//una funcion para saber si gane

function checarSiGano(){
    for(var i = 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            //comparar
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//funcion para mostrar que gane

function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("Usted completo el rompecabezas");
    }
    return false;
}

//vamos a crear una funcion que se encarge del intercambio de las pocisiones del rompecabezas
/*
arreglo[1][2] = arreglo[0][0]
arreglo[0][0] = arreglo[1][2]
*/

function intercambiarPocisionesRompe(filaPos1,
    columnaPos1, filaPos2, columnaPos2){
        var pos1 = rompe[filaPos1][columnaPos1];
        var pos2 = rompe[filaPos2][columnaPos2];

        rompe[filaPos1][columnaPos1] = pos2;
        rompe[filaPos2][columnaPos2] = pos1;
    }

    //tengo que saber donde esta la vacia

function actualizarPocisionVacia(nuevaFila, NuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = NuevaColumna
}

//tenemos que crear una fucnion que se encargue de saber si la pocision es correcta

function pocisionValida(fila, columna){
    return(fila >= 0 && fila <= 2 && columna >= 0 &&
        columna <= 2);
}

//ahora viene la parte del movimiento que es por parte de las flechas hay que identificar
//el movimiento, arriba 38 abajo 40 izquierda 37 derecha 39

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //si se mueve hacia abajo
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    //si se mueve hacia arriba
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia -1;
        nuevaColumnaPiezaVacia = columnavacia;
    }

    //si se mueve hacia izquierda
    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnavacia -1;
    }

    //si se mueve hacia arriba
    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnavacia +1;
    }

    //checar si la nueva pocision es valida y sino intercambiarla
    if(pocisionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        intercambiarPocisionesRompe(filaVacia, columnaVacia,
        nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agregar el ultimo movimiento
        agregarUltimoMovimiento(direccion);
    }
}

//aqui van mis codigos

var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

function intercambiarPocisiones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambiarPocisionesRompe(fila1, columna1, fila2, columna2);
    intercambiarPocisionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambiarPocisionesDOM(idpieza1, idpieza2){
    var elementoPieza1 = document.getElementById(idpieza1);
    var elementoPieza2 = document.getElementById(idpieza2);

    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

//necesito actualizar los moviminetos

function actualizarUltimoMovimiento(direccion){
    var ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = '→';
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;
    }
}

function mezclarPiezas(veces){
    if(veces <= 0){
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA,
    codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function() {
        mezclarPiezas(veces-1);
    }, 100);
}

//vamos a capturar las teclas que ha ingresado el jugador

function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.ARRIBA
            || evento.which === codigosDireccion.IZQUIERDA || evento.which === codigosDireccion.DERECHA){
                moverEnDireccion(evento.which);
                actualizarUltimoMovimiento(event.which);

                var gano = checarSiGano;
                if(gano){
                    setTimeout(function(){
                        mostrarCartelGanador();
                    }, 500);
                }
                evento.preventDefault;
            }
    });
}

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

//Ejemplo de las funciones
iniciar();
mostrarInstrucciones(instrucciones);