const eventos = []

function mostrarMenu() {
    console.log("\n----- Menú de Opciones -----")
    console.log("1. Crear Evento")
    console.log("2. Mostrar Eventos")
    console.log("3. Buscar Evento por Nombre")
    console.log("4. Actualizar Evento")
    console.log("5. Eliminar Evento")
    console.log("0. Salir")
}

function crearEvento() {
    const nombre = prompt("Ingrese el nombre del evento: ");
    const fecha = prompt("Ingrese la fecha del evento (formato YYYY-MM-DD): ");
    const descripcion = prompt("Ingrese la descripción del evento: ");

    let nuevoEvento = {
        id: eventos.length + 1,
        name: nombre.trim(),
        date: fecha.trim(),
        description: descripcion.trim()
    };

    eventos.push(nuevoEvento);
    console.log("Evento creado con exito")
}

function mostrarEventos() {
    const eventosValues = Object.values(eventos)

    if (eventosValues.length === 0) {
        console.log("No hay eventos registrados.");
    } else {
        console.log("Lista de eventos:")
        eventosValues.forEach(evento => {
            // console.table(evento);
            console.log(`ID: ${evento.id}, Nombre: ${evento.name}, Fecha: ${evento.date}, Descripción: ${evento.description}`);
        });
    }
}

function eliminarEvento() {
    let idEliminar = parseInt(prompt("Ingrese el ID del evento a eliminar: "))
    let indiceEventoEliminar = eventos.findIndex(evento => evento.id === idEliminar)

    if (indiceEventoEliminar === -1) {
        console.log("No se encontró ningún evento con ese ID.")
    } else {
        eventos.splice(indiceEventoEliminar, 1)
        console.log("Evento eliminado correctamente.")
    }
}

function actualizarEvento() {
    let idActualizar = parseInt(prompt("Ingrese el ID del evento a actualizar:"))
    let eventoActualizar = eventos.find(evento => evento.id === idActualizar)

    if (!eventoActualizar) {
        console.log("No se encontró ningún evento con ese ID.")
    } else {
        let nuevoNombre = prompt("Ingrese el nuevo nombre del evento:") || eventoActualizar.name
        let nuevaFecha = prompt("Ingrese la nueva fecha del evento (formato YYYY-MM-DD):") || eventoActualizar.date
        let nuevaDescripcion = prompt("Ingrese la nueva descripción del evento:") || eventoActualizar.description

        eventoActualizar.name = nuevoNombre.trim()
        eventoActualizar.date = nuevaFecha.trim()
        eventoActualizar.description = nuevaDescripcion.trim()

        console.log("Evento actualizado correctamente")
    }
}

function buscarEventoPorNombre() {
    let nombreBusqueda = prompt("Ingrese el nombre del evento a buscar:");
    let eventosEncontrados = eventos.filter(evento => evento.name.toLowerCase().includes(nombreBusqueda.toLowerCase()));

    if (eventosEncontrados.length === 0) {
        console.log("No se encontraron eventos con ese nombre.");
    } else {
        console.log("Eventos encontrados:");
        eventosEncontrados.forEach(evento => {
            console.log(`ID: ${evento.id}, Nombre: ${evento.name}, Fecha: ${evento.date}, Descripción: ${evento.description}`);
        });
    }
}


function menuEventos() {
    let opcion;
    while (true) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opción que deseas realizar:"));
        if (opcion === 0) {
            console.log("Saliste del sistema");
            break;
        }
        if (opcion >= 1 && opcion <= 5) {
            switch (opcion) {
                case 1:
                    crearEvento();
                    break
                case 2:
                    mostrarEventos();
                    break
                case 3:
                    buscarEventoPorNombre();
                    break
                case 4:
                    actualizarEvento();
                    break
                case 5:
                    eliminarEvento();
                    break;
            }
        } else {
            console.log("Opción no válida. Por favor, ingrese un número válido.");
        }
    }
}


menuEventos();
