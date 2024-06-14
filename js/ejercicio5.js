// Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.

// Funcion que calcula el promedio de las notas de los alumnos

function calcularPromedioNotas(listaPersonas){

    let notasPersona = Object.values(listaPersonas);
    let promedioNotas = 0; 
    let sumaNotas = 0;

    for(let nota of notasPersona){
        sumaNotas += nota
    }
    promedioNotas += Math.round(sumaNotas / notasPersona.length);
    return promedioNotas;

}

// Se define un objeto que contiene una lista de alumnos con su correspondiente nota

const listaPersonas = {
    Juan: 8,
    Maria: 9,
    Pedro: 7,
    Rodrigo: 4,
    Mariano: 1,
    Paula: 7,
    Janice: 10,
    Malena: 7,
    Patrick: 7,
}

// En caso de querer añadir una persona mas con su nota se debera hacer lo siguiente
// listaPersonas.[Ingrese nombre] = [Ingrese nota];


// Mostrar resultados por consola
console.log(`El promedio de las notas de los alumnos es: ${calcularPromedioNotas(listaPersonas)}`);