//Reto 3: Sistema de Gestión de Inventario

let products = [{
    id: 1,
    name: "Camisa",
    price: 25000,
    quantity: 15,
    description: "Camisa de algodón"
  },
  {
    id: 2,
    name: "Pantalón",
    price: 45000,
    quantity: 10,
    description: "Pantalón de mezclilla"
  },
  {
    id: 3,
    name: "Zapatos",
    price: 60000,
    quantity: 8,
    description: "Zapatos de cuero"
  },
  {
    id: 4,
    name: "Bufanda",
    price: 15000,
    quantity: 20,
    description: "Bufanda tejida"
  },
  {
    id: 5,
    name: "Gorra",
    price: 10000,
    quantity: 25,
    description: "Gorra deportiva"
  }];

// Menú 
function showMenu() {
    let option = prompt(`Seleccione una opción:
    1. Agregar un nuevo producto
    2. Mostrar todos los productos
    3. Buscar productos por nombre
    4. Buscar productos por rango de precio
    5. Duplicar productos
    6. Actualizar productos
    7. Eliminar productos
    8. Calcular valor total del inventario
    9. Salir`);

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
            const minPrice = parseInt(prompt("Ingrese el precio mínimo:"));
            const maxPrice = parseInt(prompt("Ingrese el precio máximo:"));
            searchProductByPriceRange(minPrice, maxPrice);
            break;
        case '5':
            const name = prompt("Ingresa el nombre del producto que deseas duplicar: ");
            duplicateProducts(name);
            break;
        case '6':
            updateProduct(parseInt(prompt("Ingrese el ID del producto a actualizar:")));
            break;
        case '7':
            deleteProduct(parseInt(prompt("Ingrese el ID del producto a eliminar:")));
            break;
        case '8':
            calculateInventoryValue();
            break;
        case '9':
            console.log("Gracias por usar el sistema de gestión de inventario.");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            showMenu();
    }
}

// Crear un nuevo producto
function createProduct() {
    const name = prompt("Ingrese el nombre del producto:").toLocaleLowerCase();
    const price = parseInt(prompt("Ingrese el precio del producto:"));
    const quantity = parseInt(prompt("Ingrese la cantidad del producto:"));
    const description = prompt("Ingrese la descripción del producto:").toLocaleLowerCase();

    const product = {
        id: products.length + 1,
        name,
        price,
        quantity,
        description
    };

    products.push(product);
    alert("Producto agregado correctamente.");
    showMenu(); 
}

// Mostrar todos los productos
function displayAllProducts() {
    if (products.length === 0) {
        alert("No hay productos para mostrar.");
    } else {
        products.forEach(product => console.log(product));
    }
    showMenu();
}

// Buscar productos por nombre
function searchProductByName(name) {
    const foundProducts = products.filter(product => product.name.includes(name));
    if (foundProducts.length === 0) {
        alert("No se encontraron productos con ese nombre.");
    } else {
        foundProducts.forEach(product => console.log(product));
    }
    showMenu(); 
}

//Copia de productos
function duplicateProducts(name){
    let contador=0;
    let duplicatedName;
    let indice;
    products.forEach((product, index) => {
        if(product.name.startsWith(name)){
            contador++;
            indice = index;
        }
    });

    if(contador > 0){
        duplicatedName = name + " Copy " + contador;
    } else{
        duplicatedName = name + " Copy";
    }

    const object2 = {
        id : products.length+1,
        name : duplicatedName,
        price : products[indice].price,
        quantity : products[indice].quantity,
        description : products[indice].description
    }
    products.push(object2);
    showMenu(); 
}


//Buscar productos por rango de precio
function searchProductByPriceRange(minPrice, maxPrice) {
    // filtra los productos cuyo precio es mayor o igual a minPrice y menor o igual a maxPrice
    const foundProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (foundProducts.length === 0) {
        alert("No se encontraron productos dentro de ese rango de precios.");
    } else {
        foundProducts.forEach(product => console.log(product));
    }
    showMenu();
}

// Eliminar productos
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    alert("Producto eliminado correctamente.");
    showMenu();
}

// Verificar existencia de productos e inventario
function checkInventory(productId, quantity) {
    const productExists = products.some(product => product.id === productId);
    if (!productExists) {
        alert("El producto no existe en el inventario.");
        return false;
    }
    if (products.quantity < quantity) {
        alert("No hay suficiente cantidad disponible para vender.");
        return false;
    }
    return true;
}

// Actualizar productos
function updateProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        alert("El producto no existe en el inventario.");
        showMenu();
    }
    const newName = prompt("Ingrese el nuevo nombre del producto: ");
    const newPrice = parseInt(prompt("Ingrese el nuevo precio del producto: "));
    const newQuantity = parseInt(prompt("Ingrese la nueva cantidad del producto: "));
    const newDescription = prompt("Ingrese la nueva descripción del producto: ");

    if (newName !== "") {
        product.name = newName;
    }
    if (!newPrice) {
        product.price = newPrice;
    }
    if (!newQuantity) {
        product.quantity = newQuantity;
    }
    if (newDescription !== "") {
        product.description = newDescription;
    }

    alert("Producto actualizado correctamente.");
    showMenu();
}

// Calcular valor total del inventario
function calculateInventoryValue() {
    const totalValue = products.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
    alert(`El valor total del inventario es: ${totalValue}`);
    showMenu();
}

showMenu();