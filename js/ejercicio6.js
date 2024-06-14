// Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.

// Declaracion de la variable

let cadena = "";

// Definicion de la funcion que invierte la cadena

function invertirCadena(cadena){

    let palabras = cadena.split("");
    
    let palabrasInvertidas = palabras.reverse();
    
    let cadenaInvertida = palabrasInvertidas.join("");

    return cadenaInvertida;

}

// Mostrar resultados por consola

console.log(invertirCadena('abc'));
console.log(invertirCadena('Hola mundo'));
console.log(invertirCadena('Adios'));
console.log(invertirCadena('reconocer'));

// En caso de asignarle un valor a la variable cadena definida anteriormente

cadena = 'Ayer fui a la heladeria'
console.log(cadena);
console.log(invertirCadena(cadena));

cadena = 'Estoy utilizando Javascript'
console.log(cadena);
console.log(invertirCadena(cadena));

