//  Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math.

// Declaracion de variables de tipo Number
let numeroUno = Number();
let numeroDos = Number();
let numeroTres = Number();

// Funcion que determina las propiedades matematicas de un numero
function determinarPropiedadesMatematicas(numero){

    let propiedades = {
        'cuadrado': Math.pow(numero, 2),
        'raizCuadrada': Math.sqrt(numero),
        'valorAbsoluto': Math.abs(numero) 
    };

    return propiedades;

}

// Se muestran los datos por consola

// Se asigna a cada variable la funcion para agregar las propiedades definida previamente. Como parametro se le pasa cualquier valor numerico
numeroUno = determinarPropiedadesMatematicas(10);
numeroDos = determinarPropiedadesMatematicas(9);
numeroTres = determinarPropiedadesMatematicas(-2);

console.log(`Cuadrado de la primer variable: ${numeroUno.cuadrado}`);
console.log(`Raiz cuadrada de la primer variable: ${numeroUno.raizCuadrada}`);
console.log(`Valor absoluto de la primer variable: ${numeroUno.valorAbsoluto}`);

console.log(`Cuadrado de la segunda variable: ${numeroDos.cuadrado}`);
console.log(`Raiz cuadrada de la segunda variable: ${numeroDos.raizCuadrada}`);
console.log(`Valor absoluto de la segunda variable: ${numeroDos.valorAbsoluto}`);

console.log(`Cuadrado de la segunda variable: ${numeroTres.cuadrado}`);
console.log(`Raiz cuadrada de la segunda variable: ${numeroTres.raizCuadrada}`);
console.log(`Valor absoluto de la segunda variable: ${numeroTres.valorAbsoluto}`);


// Mostrar las propiedades de un numero pasado por parametro a la funcion definida anteriormente por consola
console.log(`Cuadrado del numero 2: ${determinarPropiedadesMatematicas(2).cuadrado}`);
console.log(`Raiz cuadrada del numero 9: ${determinarPropiedadesMatematicas(9).raizCuadrada}`);
console.log(`Valor absoluto del numero -1: ${determinarPropiedadesMatematicas(-1).valorAbsoluto}`)
