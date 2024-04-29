//Reto 3: Sistema de Gestión de Inventario

let products = [];
let productIdCounter = 1;

// Menú 
function showMenu() {
    let option = prompt(`Seleccione una opción:
    1. Agregar un nuevo producto
    2. Mostrar todos los productos
    3. Buscar productos por nombre
    4. Buscar productos por rango de precio
    5. Salir`);

    switch (option) {
        case '1':
            createProduct();
            break;
        case '2':
            displayAllProducts();
            break;
        case '3':
            searchProductByName(prompt("Ingrese el nombre a buscar:"));
            break;
        case '4':
            const minPrice = parseFloat(prompt("Ingrese el precio mínimo:"));
            const maxPrice = parseFloat(prompt("Ingrese el precio máximo:"));
            searchProductByPriceRange(minPrice, maxPrice);
            break;
        case '5':
            console.log("Gracias por usar el sistema de gestión de inventario.");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            showMenu();
    }
}

// Crear un nuevo producto
function createProduct() {
    const name = prompt("Ingrese el nombre del producto:");
    const price = parseFloat(prompt("Ingrese el precio del producto:"));
    const quantity = parseInt(prompt("Ingrese la cantidad del producto:"));
    const description = prompt("Ingrese la descripción del producto:");

    const id = productIdCounter;
    productIdCounter++;

    const product = {
        id,
        name,
        price,
        quantity,
        description
    };

    products.push(product);
    console.log("Producto agregado correctamente.");
    showMenu(); 
}


// Mostrar todos los productos
function displayAllProducts() {
    if (products.length === 0) {
        console.log("No hay productos para mostrar.");
    } else {
        products.forEach(product => console.log(product));
    }
    showMenu();
}

// Buscar productos por nombre
function searchProductByName(name) {
    const foundProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    if (foundProducts.length === 0) {
        console.log("No se encontraron productos con ese nombre.");
    } else {
        foundProducts.forEach(product => console.log(product));
    }
    showMenu(); 
}

// Buscar productos por rango de precio
function searchProductByPriceRange(minPrice, maxPrice) {
    const foundProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (foundProducts.length === 0) {
        console.log("No se encontraron productos dentro de ese rango de precios.");
    } else {
        foundProducts.forEach(product => console.log(product));
    }
    showMenu();
}

showMenu();





