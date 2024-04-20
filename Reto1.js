// let nombreComp = prompt("Ingrese su Nombre y Apellido: ").toLowerCase();

// [usuario]: correo

let BaseDeUsuarios = []

function agregarUsuario() {
    let nombre = prompt("Ingrese su Nombre: ").toLowerCase();
    let apellido = prompt("Ingrese su Apellido: ").toLowerCase();
    let nombreCompleto = nombre.concat(' ', apellido)
    let nom = nombre.slice(0, 3)
    let ape = apellido.slice(0, 3)
    let usuario = nom.concat(ape)
    let correo = usuario.concat('@myDomain.com')

    console.log(nombreCompleto);

    let contador = 1
    Object.keys(BaseDeUsuarios).forEach(usuarioExiste => {
        if (usuarioExiste === usuario) {
            usuario = usuario + contador
            contador++
        }
    });

    BaseDeUsuarios[usuario] = correo

    console.log(`Nombre de Usuario (username): ${usuario}`)
    console.log(`Correo Electrónico: ${correo}`)

    let continuar = prompt("¿Deseas agregar otro usuario? (si/no)").toLowerCase();
    if (continuar === "si") {
        agregarUsuario()
    } else {
        console.log("Base de Usuarios:")
        console.table(BaseDeUsuarios)
    }

    const keys = Object.keys(BaseDeUsuarios);
    console.log(keys);

    let isElementIncluded = keys.includes(usuario);
    console.log(isElementIncluded);
}

agregarUsuario();
