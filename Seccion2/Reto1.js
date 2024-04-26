//Reto 1: Calculadora de Promedio de Calificaciones

const calificaciones = prompt("Ingresa tus calificaciones separadas por comas (,): ");
const arraySplit = calificaciones.split(/,/);
console.log(arraySplit);

let arregloNumeros = [];
let contador = 0;
//segunda lista para meter la modificada
arraySplit.forEach(element => {
    arregloNumeros[contador] = parseInt(element);
    contador = contador + 1;
});

const sumaNotas = arregloNumeros.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sumaNotas);

const promedio = (sumaNotas)/(arregloNumeros.length - 1);
alert(`El promedio de tus calificaciones es: ${promedio}`);