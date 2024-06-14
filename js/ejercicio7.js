// Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.

// Declaracion de variables

let listaUno = [];
let listaDos = [];

// Definicion de funcion que recibe por parametro dos arrays de la misma longitud y devuelve la suma de sus elementos

function sumaDeElementos(listaUno, listaDos){
    
    let listaUnificada = [];
    let largoLista = listaDos.length;

    for (let i = 0; i < largoLista; i++){
        listaUnificada.push(listaDos[i] + listaUno[i]);
    }

    return listaUnificada;

}

// Se ingresan algunos valores a los arreglos
listaUno.push(1,3,4,2);
listaDos.push(1,9,10,3);


// Se determina si las variables de tipo array tienen la misma longitud. En caso de ser asi se hace uso de la funcion sumaDeElementos
if (listaUno.length === listaDos.length){
    console.log(sumaDeElementos(listaUno, listaDos));
}
else {
    console.log(`Los elementos no cuentan con la misma cantidad de elementos...`);
}