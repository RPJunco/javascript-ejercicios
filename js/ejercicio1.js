// Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.

// Declaracion de variables

let numerosLista = [];

// Funcion para elevar cada numero del arreglo y devolverlo en una lista
function elevarNumeros(numList) {
    let numerosAlCuadrado = [];

    for (let numeros of numList){
        numerosAlCuadrado.push(Math.pow(numeros, 2));
    }

    return numerosAlCuadrado

}

// Se muestran los resultados por consola

// Pasando los numero por parametro directamente
console.log(elevarNumeros([1,2,3]));

// Utilizando la funcion push para agregar valores a una variable
numerosLista.push(10, 2, 5);
console.log(elevarNumeros(numerosLista));

