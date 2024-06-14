// Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.

// Declaracion de variables
let cadena = "";

// Funcion que convierte las vocales de una cadena en mayusculas
function convertirAMayusculas(cadena){

    let cadenaSalida ="";
    let longitudSentencia = cadena.length;
    for(let i = 0; i < longitudSentencia; i++){
        if(cadena.charAt(i) === 'a' | cadena.charAt(i) === 'o' | cadena.charAt(i) === 'e' | cadena.charAt(i) === 'u' | cadena.charAt(i) === 'i'){
            cadenaSalida += cadena[i].toUpperCase();
        }
        else{
            cadenaSalida += cadena[i]
        }
    }  

    return cadenaSalida;

}

// Mostrar resultados por consola

// Escribir la cadena de forma directa en la funcion
console.log(convertirAMayusculas('hola mundo'));

// Asignarle un valor tipo string a la variable
cadena = 'Hola Mundo';
console.log(convertirAMayusculas(cadena));