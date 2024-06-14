//  Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo.

// Definicion de la clase Rectangle

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.calcularArea();
    }
    get perimetro(){
        return this.calcularPerimetro();
    }
    
    calcularPerimetro(){
        return (this.width+ this.height) * 2;
    }
    calcularArea(){
        return this.width * this.height;
    }
}

// Declaracion de algunas variables que contendran la clase creada anteriormente

const rectanguloUno = new Rectangle();
const rectanguloDos = new Rectangle();
const rectanguloTres = new Rectangle();


// Asignacion de los valores para los atributos width y height de cada variable

rectanguloUno.width = 10;
rectanguloUno.height = 5;

rectanguloDos.width = 20;
rectanguloDos.height = 12;

rectanguloTres.width = 5;
rectanguloTres.height = 2;

// Mostrar resultados por consola
// Se muestran por consola el area y el perimetro calculado para cada variable
console.log(`El area de la variable rectanguloUno es: ${rectanguloUno.calcularArea()}`);
console.log(`El perimetro de la variable rectanguloUno es: ${rectanguloUno.calcularPerimetro()}`);

console.log(`El area de la variable rectanguloDos es: ${rectanguloDos.calcularArea()}`);
console.log(`El perimetro de la variable rectanguloDos es: ${rectanguloDos.calcularPerimetro()}`);

console.log(`El area de la variable rectanguloTres es: ${rectanguloTres.calcularArea()}`);
console.log(`El perimetro de la variable rectanguloTres es: ${rectanguloTres.calcularPerimetro()}`);
