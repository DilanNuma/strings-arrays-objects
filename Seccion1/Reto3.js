
let correo = prompt("Ingrese su correo electrónico:");

if (correo.includes('@') && correo.includes('.') && !correo.includes(' ') && correo.indexOf('@') < correo.lastIndexOf('.')) {
    console.log("Correo electrónico válido");
} else {
    console.log("Correo electrónico inválido");
}


// let correo = prompt("Ingrese su correo electrónico:");

// // Verificar si el correo electrónico tiene un formato válido
// let esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.match(correo);

// // Mostrar el resultado
// if (esValido) {
//     console.log("Correo electrónico válido");
// } else {
//     console.log("Correo electrónico inválido");
// }

