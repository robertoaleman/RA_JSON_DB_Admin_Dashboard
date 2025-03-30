let productos = [];
let archivoActual = null;

// Función para cargar el archivo JSON
document.getElementById('archivo-json').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        archivoActual = file;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                productos = data.productos || [];
                mostrarProductos();
            } catch (error) {
                alert('Error al leer el archivo JSON: ' + error);
            }
        };
        reader.readAsText(file);
    }
});

function mostrarProductos() {
    const tablaProductos = document.getElementById('tabla-productos');
    tablaProductos.innerHTML = ''; // Limpiar la tabla

    productos.forEach(producto => {
        const row = tablaProductos.insertRow();
        row.insertCell().textContent = producto.id;
        row.insertCell().textContent = producto.name;
        row.insertCell().textContent = producto.description;
        row.insertCell().textContent = producto.price;
        row.insertCell().textContent = producto.stock;

        const accionesCell = row.insertCell();
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.classList.add('accion-btn');
        editarBtn.onclick = () => editarProducto(producto.id);

        const borrarBtn = document.createElement('button');
        borrarBtn.textContent = 'Borrar';
        borrarBtn.classList.add('accion-btn');
        borrarBtn.onclick = () => borrarProducto(producto.id);

        accionesCell.appendChild(editarBtn);
        accionesCell.appendChild(borrarBtn);
    });
}

function agregarProducto() {
    const nombreInput = document.getElementById('nombre');
    const descripcionInput = document.getElementById('descripcion');
    const precioInput = document.getElementById('precio');
    const stockInput = document.getElementById('stock');
    const productoIdEditar = document.getElementById('producto-id-editar').value;

    const nuevoProducto = {
        id: productoIdEditar ? parseInt(productoIdEditar) : generarNuevoId(),
        name: nombreInput.value,
        description: descripcionInput.value,
        price: parseFloat(precioInput.value),
        stock: parseInt(stockInput.value)
    };

    if (productoIdEditar) {
        const index = productos.findIndex(p => p.id === parseInt(productoIdEditar));
        if (index !== -1) {
            productos[index] = nuevoProducto;
            document.getElementById('producto-id-editar').value = ''; // Limpiar el ID de edición
            document.querySelector('#formulario-producto button[onclick="agregarProducto()"]').textContent = 'Agregar Producto';
        }
    } else {
        productos.push(nuevoProducto);
    }

    nombreInput.value = '';
    descripcionInput.value = '';
    precioInput.value = '';
    stockInput.value = '';

    mostrarProductos();
}

function generarNuevoId() {
    if (productos.length === 0) {
        return 1;
    }
    const maxId = Math.max(...productos.map(p => p.id));
    return maxId + 1;
}

function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('producto-id-editar').value = producto.id;
        document.getElementById('nombre').value = producto.name;
        document.getElementById('descripcion').value = producto.description;
        document.getElementById('precio').value = producto.price;
        document.getElementById('stock').value = producto.stock;
        document.querySelector('#formulario-producto button[onclick="agregarProducto()"]').textContent = 'Guardar Edición';
    }
}

function borrarProducto(id) {
    if (confirm('¿Estás seguro de que quieres borrar este producto?')) {
        productos = productos.filter(producto => producto.id !== id);
        mostrarProductos();
    }
}

function guardarCambios() {
    if (!archivoActual) {
        alert('Por favor, selecciona un archivo JSON primero.');
        return;
    }

    const data = { productos: productos };
    const jsonString = JSON.stringify(data, null, 2); // null, 2 para formato legible

    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = archivoActual.name; // Descargar con el mismo nombre de archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Cambios guardados en el archivo (descargado).');
}

// Inicialmente, si ya tienes datos de ejemplo, podrías cargarlos aquí
// const datosIniciales = { "productos": [...] };
// productos = datosIniciales.productos;
// mostrarProductos();