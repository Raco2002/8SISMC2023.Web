/*
    Como habiamos dicho, js es multiparadigma
    en este caso vamos a ver como seria manejar
    js en poo (programacion orientada a objetos).
*/

class figuraGeometrica{
    //constructor
    constructor()
    //puede o no tener alguna implementacion


//metodos
area(){
    //metodo que se encarga de calcular el area
}

perimetro(){
    //metodo para el calculo de perimetros
    console.log("Este metodo calcula el perimetro")
}

}

class Rectangulo extends figuraGeometrica{
    //constructor
    constructor(base,altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }

    get area(){
        if(this._actualizarArea || this._area){
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }

    calcularArea(){
        console.log(this._base);
        console.log(this._altura);
        return this._base * this._altura
    }

    calcularPerimetro(){
        console.log(this._base);
        console.log(this._altura);
        return this._base + this._altura
    }
}

const objetoRectangulo = new Rectangulo(2,5);

console.log(objetoRectangulo.calcularArea());
console.log(objetoRectangulo.calcularPerimetro());


//Spread
/*
Es una sintaxis que nos permite a un elemneto iterable (arreglo, matriz, vector, cadena)
poder desde cero contar los argmnetos que pasan por sicho elemento
*/

//tenemos el siguiente arreglo
const arregloOrdenadoMayorMenor = [10, 9 ,8, 7, 6 , 5, 4, 3, 2, 1, 0];
console.log(`Arreglo ordenado: ${arregloOrdenadoMayorMenor}`);

//vamos a suponer que podemos obtener tantas variables del arreglo como deseemos a partir del patron

const[valorMasGrande] = arregloOrdenadoMayorMenor;
console.log (`Valor mas Grande: ${valorMasGrande}`);

//vamos a obtener el resto de los valores

const[valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;

console.log(`VMG1, VMG2, VMG3, ...Resto :  ${valorMasGrande1, valorMasGrande2, valorMasGrande3}, ${restoValores}`);

//ejemplo de una busqueda simplificada

const resultadoDeBusqueda = {
    resultados: [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7",
    ],
    total: 7,
    mejorCoincidencia : "resultado3"
};

console.log(`Resultado de la busqueda : ${resultadoDeBusqueda}`);

//vamos a suponer que solo nos interesa imprimir la mejor coincidencia

const {mejorCoincidencia} = resultadoDeBusqueda;

console.log(`Mejor coincidencia : ${mejorCoincidencia}`);

/* 
Vamos a suponer que queremos cambiar el nombre, derivado a que necesitamos mantener
la persistencia del codigo acorde a una nomenclatura
*/

const copiaResultadoDeBusqueda = {... resultadoDeBusqueda};

console.log(`Copia del resultado de busqueda : ${copiaResultadoDeBusqueda}`);

//vamos a modificarlo

const copiaResultadoDeBusquedaModificar = {... resultadoDeBusqueda, cadenaBuscada : "resultado 3"};

console.log(`Copia modificada : ${copiaResultadoDeBusquedaModificar}`);