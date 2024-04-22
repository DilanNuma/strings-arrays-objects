
let contraseña = prompt("Ingrese una contraseña:");
let esSegura = true;
let condicionesNoCumplidas = [];

if (contraseña.length < 8) {
    esSegura = false;
    condicionesNoCumplidas.push("La contraseña es muy corta, debe tener al menos 8 caracteres");
}

if (!contraseña.match(/[0-9]/)) {
    esSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos un número");
}

if (!contraseña.match(/[a-z]/)) {
    esSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos una letra");
}


if (!contraseña.match(/[\!\@\#\$\%\^\&\*\(\)\+\=\_\-\{\}\[\]\:\;\"\'\?\<\>\,\.\|\/\\\~\`]/)) {
    esSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos un caracter especial");
}

if (esSegura) {
    console.log("Contraseña segura");
} else {
    console.log("Contraseña insegura");
    console.log("Condiciones que no se cumplen:");
    condicionesNoCumplidas.forEach(condicion => {
        console.log(condicion);
    });
}

