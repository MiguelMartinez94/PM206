const pedidos = [];


const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function agregarPedido(pedido){
    pedidos.push(pedido);
}

    console.log("1. Caja");
    console.log("2. Cocina");
    console.log("3. Cliente")

terminal.question("¿Qué eres?", function(indicador){

    

    if (indicador == 1) {
        caja()
    } else if (indicador == 2 ) {
        cocina();
    } else if (indicador == 3) {
        cliente();
    }
})

function caja(){
    console.log("1. Ver lista de pedidos");
    console.log("2. Ver el total de pedidos acomulados");
    console.log("3. Agregar un nuevo pedido");

    consulta = terminal.question("¿Qué deseas hacer?: ", function(consulta){

    if (consulta == 1) {
    console.table(pedidos)
    caja();
    } else if (consulta ==2) {
        const total = pedidos.length;
        console.log(`El total de pedidos es: ${total}`);
        caja();
    } else if (consulta == 3) {
        terminal.question("¿Qué pedido?", function(pedido){
            agregarPedido(pedido)
            caja();
        })
        
    }
    
});
}

function cocina(){

const productos = [];
let id = 1;

function listarProductos() {
    
    productos.forEach((p) => {
        console.log(`${p.id} - ${p.nombre} - $${p.precio}`);
    });
    
}

function agregarProducto() {
    terminal.question("Nombre: ", function(nombre) {
        terminal.question("Precio: ", function(precio) {
            productos.push({ id: id, nombre: nombre, precio: precio });
            id++;
            console.log("Producto agregado.");
            cocina(); 
        });
    });
}

function editarProducto() {
    listarProductos();
    
    if (productos.length === 0) {
        cocina(); 
        return; 
    }

    terminal.question("ID a editar: ", function(idBuscar) {
        const pos = productos.findIndex((p) => p.id == idBuscar);
        
        if (pos === -1) {
            console.log("No encontrado.");
            cocina();
        } else {
            terminal.question("Nuevo nombre: ", function(nombre) {
                terminal.question("Nuevo precio: ", function(precio) {
                    productos[pos].nombre = nombre;
                    productos[pos].precio = precio;
                    console.log("Producto actualizado.");
                    cocina();
                });
            });
        }
    });
}

function eliminarProducto() {
    listarProductos();

    if (productos.length === 0) {
        cocina();
        return;
    }

    terminal.question("ID a eliminar: ", function(idBuscar) {
        const pos = productos.findIndex((p) => p.id == idBuscar);
        
        if (pos === -1) {
            console.log("No encontrado.");
        } else {
            productos.splice(pos, 1);
            console.log("Producto eliminado.");
        }
        cocina();
    });
}

function cocina() {
    console.log("\n--- COCINA ---");
    console.log("1. Listar");
    console.log("2. Agregar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("0. Salir");

    terminal.question("Opción: ", function(opcion) {
        if (opcion == "1") {
            listarProductos();
            cocina(); 
        } 
        else if (opcion == "2") {
            agregarProducto(); 
        } 
        else if (opcion == "3") {
            editarProducto(); 
        } 
        else if (opcion == "4") {
            eliminarProducto(); 
        } 
        else if (opcion == "0") {
            console.log("Apagando sistema de cocina...");
            terminal.close();
        } 
        else {
            console.log("Opción inválida.");
            cocina();
        }
    });
}

cocina();
}

function cliente(){

}


    






