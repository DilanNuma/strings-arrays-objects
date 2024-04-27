//Reto 2: Calculadora de Estadísticas de Calificaciones

while (true) {
    const calificaciones = prompt("Ingresa tus calificaciones separadas por comas (,): ");
    const arregloNumeros = calificaciones.split(/,/).map(Number); //split para convertirlo en arreglo cada elemento que esté separado por comas y luego el map(number) para que convierta el tipo de datos de string a int y poder hacer el resto de operaciones

    console.log(arregloNumeros);

    //Suma de notas para luego hacer el promedio
    const sumaNotas = arregloNumeros.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(`Esta es la suma de las notas: ${sumaNotas}`);
    
    //Calculo del promedio
    const promedio = (sumaNotas)/(arregloNumeros.length - 1);
    console.log(`Este es el promedio: ${promedio}`);
    
    //Calificacion Maxima
    const notaMax = Math.max(...arregloNumeros);
    console.log(`Esta es la nota maxima: ${notaMax}`);
    
    //Calificacion Minima
    const notaMin = Math.min(...arregloNumeros);
    console.log(`Esta es la nota maxima: ${notaMin}`);
    
    //Aprobados
    const aprobados = arregloNumeros.filter((arregloNumeros) => arregloNumeros >= 70).length;
    console.log(`Esta es la cantidad de los aprobados: ${aprobados}`);
    
    //Reprobados
    const reprobados = arregloNumeros.filter((arregloNumeros) => arregloNumeros < 70).length;
    console.log(`Esta es la cantidad de los aprobados: ${reprobados}`);
    
    //Ordenar de Mayor a menor
    const orden = arregloNumeros.sort(function(a, b){return b - a});
    console.log(`Esta es la lista de las calificaciones ordenadas de mayor a menor: ${orden}`);
    break;
}

