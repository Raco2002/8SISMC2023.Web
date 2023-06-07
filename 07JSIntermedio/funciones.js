/*
Las variables que se ocupan dentro de JS son 3:

var -> de acuerdo a EJS6 esta siendo sustituida; pero es la 
de uso más común para determinar una variable es de acceso
publico

let -> es una variable protegida que solo funciona dentro de
una función o declaración de código

const -> la cual es un valor constante en todo el documento


Codigo de prueba:

let x = "x";

if(true){
    const x = "y";
    console.log(x);
}



Función flecha: es una función en JS que a diferencia de una
funcion normal no genera su propio contexto (this), necesita ser 
declarada antes de ser usada y no necesita de un return

*/



/*
function sumarFuncionNormal(n1, n2){
    return n1+n2;
}

/*
Cuando ocupamos este tipo de comillas ´´ es para poder mandar a 
llamar elementos de nombres de funciones que van a ser evaluadas
y/o incorporar etiquetas de html y css en JS
*/



/*
console.log('Vamos a sumar 3 y 4: ${sumarFuncionNormal(3,4)}');



/*
Una funcion flecha tiene la siguiente estructura:

"cadena" -> id, clase, name, atributo

'' y "" es para el uso de id, clases, name

`` es para incorporar codigo html e invocar funciones de JS
*/




/*
const sumaFuncionFlecha = (n1, n2) => n1+n2;

console.log(`Vamos a sumar 5 y 6: ${sumarFuncionFlecha(5,6)}`);

//que pasaria si solo necesitamos un parametro

const cuadradoFuncionFlecha = n1 => n1**2;

console.log(`Vamos hacer una funcion cuadratica de 7: ${cuadradoFuncionFlecha(7)}`);

*/


const razasPerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Belga",
    "Pitbull",
    "Dalmata",
    "San Bernardo",
    "Chihuahua",
];


//recorremos el arreglo
/*
for(let indice = 0; indice < razasPerros.length; indice++){
    console.log(razasPerros[indice]);
}*/

//For of
/*
for(const raza of razasPerros){
    console.log(raza);
}*/

/*
for(const indice in razasPerros){
    console.log(razasPerros[indice]);
    //console.log(razasPerros);     si no se pone el indice, todas las variables se van a repetir con ellas mismas
}*/

//forEach -> es iterar sobre los elementos del arreglo que no devuelven nada
//Estructura de forEach completa (nombre, indice, arregloOriginal):
/*
razasPerros.forEach((raza, indice, arregloOriginal) => console.log(raza))
*/
//es una fucnion que se llama asi misma: callback

//Funcion MAP es la que se encarga de iterar sobre los elementos de un arreglo y regresar un arreglo diferentes
//con el cual podemos podemos hacer operaciones.

/*
const razasDePerrosEnMayusculas = razasPerros.map
((raza, indice, arregloOriginal) => console.log(raza.toUpperCase()));

//no es necesario poner indice y arregloOriginal
const razasDePerrosEnMayusculas = razasPerros.map
((raza) => console.log(raza.toUpperCase()));
*/

//FIND: nos permite buscar un elemento dentro del arreglo y si lo encuentra, lo
//regresa y sino lanza un "underfinend".


/*
if(razasPerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua")){
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasPerros);
}else{
    //hay que meterlo
    razasPerros.push("Chihuahua");
    console.log("Se agrego la raza en el arreglo");
    console.log(razasPerros);
}
*/

//FINDINDEX: Es similar a la busqueda, pero en lugar de regresar el elemento, regresa su
//indice y si no lo encuentra nos devuelve en -1 esta funcion particularmente es util si
//queremos modificar el elemento original dentro de un arreglo.

const indiceChihuahua = razasPerros.findIndex((raza, indice, arregloOriginal) => raza === "Chihuahua");

if(indiceChihuahua > -1){
    //el resultado esperado pq si esta dentro del arreglo
    console.log(razasPerros[indiceChihuahua]);
    //aparte voy agregar que diga que la raza es pequeña
    razasPerros[indiceChihuahua] += "(Raza de perros pequeña y escandalosa)";
    console.log(razasPerros[indiceChihuahua]);
    console.log(razasPerros);
}else{
    console.log("no esta")
}