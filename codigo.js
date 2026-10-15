function comprarProducto() {
    let cant = document.getElementById("cantidad").value;
    let desc = document.getElementById("descripcion").value;

    if (cant === "" || desc === "") {
        console.log("Por favor, rellena la cantidad y la descripcion.");
        return;
    }

    document.cookie = desc + "=" + cant + "; path=/"; // el atributo path define en qué rutas o páginas del sitio web será accesible la cookie.

    console.log("Añadido al carrito: " + cant + " " + desc);

    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
}

function verCarrito() {
    console.log("CONTENIDO DEL CARRITO");

    if (document.cookie === "") {
        console.log("El carrito esta vacio.");
        return;
    }

    let listaProductos = document.cookie.split("; "); // split: se usa en cadenas de texto para dividir un texto en varias partes y guardarlas dentro de un array
    let totalProductos = 0;

    for (let i = 0; i < listaProductos.length; i++) {
        let datos = listaProductos[i].split("=");

        let descripcion = datos[0];
        let cantidad = parseInt(datos[1]);

        if (!isNaN(cantidad)) {
            console.log("- " + cantidad + " " + descripcion);
            totalProductos = totalProductos + cantidad;
        }
    }

    console.log("TOTAL DE PRODUCTOS: " + totalProductos);
    console.log("-----------------------------");
}