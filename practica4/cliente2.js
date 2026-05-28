const { terminal, menuPrincipal } = require('./caja.js');

function rastrearPedido() {
    console.log("\nPedido recibido");

    setTimeout(() => {
        console.log("Preparando.........");

        setTimeout(() => {
            console.log("Empacando.........");

            setTimeout(() => {
                const exito = Math.random() > 0.3;
                
                if (exito) {
                    console.log("Pedido Entregado");
                } else {
                    console.log("Pedido Cancelado");
                }
                
                menuCliente2();
            }, 2000);

        }, 2000);

    }, 2000);
}

function menuCliente2() {
    console.log("\n--- CLIENTE 2 (Asincronía) ---");
    console.log("1. Rastrear estados de un pedido");
    console.log("0. Volver al menú principal");

    terminal.question("Elige una opción: ", function(opcion) {
        if (opcion === "1") {
            rastrearPedido();
        } else if (opcion === "0") {
            menuPrincipal();
        } else {
            menuCliente2();
        }
    });
}

module.exports = { menuCliente2 };