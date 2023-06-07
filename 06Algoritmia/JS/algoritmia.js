//Problema 1
function problema1(){
    var fraseOriginal = document.getElementById("p1-input").value;
    var outputElement = document.getElementById("p1-output");

    var palabras = fraseOriginal.split(" ");
    var palabrsInvertidas = palabras.reverse();
    var fraseInvertida = palabrsInvertidas.join(" ");

    outputElement.textContent = fraseInvertida;
}




// Problema 2
function problema2(){
    //lo primero que necesitamos es obtener los campos de texto//

    var p2_x1 = document.querySelector("#p2-x1").
    value;

    var p2_x2 = document.querySelector("#p2-x2"). 
    value;

    var p2_x3 = document.querySelector("#p2-x3"). 
    value;

    var p2_x4 = document.querySelector("#p2-x4"). 
    value;

    var p2_x5 = document.querySelector("#p2-x5"). 
    value;



    var p2_y1 = document.querySelector("#p2-y1").
    value;

    var p2_y2 = document.querySelector("#p2-y2"). 
    value;

    var p2_y3 = document.querySelector("#p2-y3"). 
    value;

    var p2_y4 = document.querySelector("#p2-y4"). 
    value;

    var p2_y5 = document.querySelector("#p2-y5"). 
    value;

    //construimos el vector

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores

    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //vamos a realizar el producto escalar

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    document.querySelector("#p2-output").textContent=
    "Producto Escalar Minimo: " + p2_producto;
}


//Problema 3
function contarLetrasUnicas(palabra) {
    var caracteresUnicos = new Set();
    for (var i = 0; i < palabra.length; i++) {
      caracteresUnicos.add(palabra[i]);
    }
    return caracteresUnicos.size;
  }

  function contarPalabrasUnicas() {
    var palabrasInput = document.getElementById("p3-input").value;

    // Verificar si hay espacios en blanco
    if (palabrasInput.includes(" ")) {
        var outputElement = document.getElementById("p3-output");
        outputElement.textContent = "Error: no se permiten espacios en la lista de palabras. Por favor, sepáralas solo con comas.";
        return; // Salir de la función si hay un espacio en blanco
      }

    // Verificar si hay números
      if (/\d/.test(palabrasInput)) {
        var outputElement = document.getElementById("p3-output");
        outputElement.textContent = "Error: no se permiten números en la lista de palabras. Por favor, ingresa solo letras separadas por comas.";
        return; // Salir de la función si se ingresaron números
      }

    var palabrasSeparadas = palabrasInput.split(",");
    var palabraMaxima = "";
    var cantidadMaxima = 0;
  
    for (var i = 0; i < palabrasSeparadas.length; i++) {
      var palabraActual = palabrasSeparadas[i];
      var cantidadCaracteresUnicos = contarLetrasUnicas(palabraActual);
    
      if (cantidadCaracteresUnicos > cantidadMaxima) {
        palabraMaxima = palabraActual;
        cantidadMaxima = cantidadCaracteresUnicos;
      }
    }
  
    var outputElement = document.getElementById("p3-output");
    outputElement.textContent = "La palabra con más caracteres únicos es: " 
    + palabraMaxima + "\nCantidad de caracteres únicos: " + cantidadMaxima;
  }
