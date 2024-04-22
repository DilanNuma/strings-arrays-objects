
let contraseña = prompt("Ingrese una contraseña:");
let contraSegura = true;
let condicionesNoCumplidas = [];

if (contraseña.length < 8) {
    contraSegura = false;
    condicionesNoCumplidas.push("La contraseña es muy corta, debe tener al menos 8 caracteres");
}

if (!contraseña.match(/[0-9]/)) {
    contraSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos un número");
}

if (!contraseña.match(/[a-z]/)) {
    contraSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos una letra");
}


if (!contraseña.match(/[\!\@\#\$\%\^\&\*\(\)\+\=\_\-\{\}\[\]\:\;\"\'\?\<\>\,\.\|\/\\\~\`]/)) {
    contraSegura = false;
    condicionesNoCumplidas.push("La contraseña debe contener al menos un caracter especial");
}

if (contraSegura) {
    console.log("Contraseña segura");
} else {
    console.log("Contraseña insegura");
    console.log("Condiciones que no se cumplen:");
    condicionesNoCumplidas.forEach(condicion => {
        console.log(condicion);
    });
}

