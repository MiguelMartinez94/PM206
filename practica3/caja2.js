const { terminal, menuPrincipal } = require('./caja.js');

function notificarPedido(estado, callback) {
    if (estado === "listo") {
        callback(null, "Notificación: El pedido está listo para ser entregado.");
    } else if (estado === "cancelado") {
        callback("Notificación: El pedido ha sido cancelado.", null);
    }
}

function menuCaja2() {
    console.log("\n--- CAJA 2 ---");
    console.log("1. Simular notificación de pedido listo");
    console.log("2. Simular notificación de pedido cancelado");
    console.log("0. Volver al menú principal");

    terminal.question("Elige una opción: ", function(opcion) {
        if (opcion === "1") {
            notificarPedido("listo", function(error, mensaje) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(mensaje);
                }
                menuCaja2();
            });
        } else if (opcion === "2") {
            notificarPedido("cancelado", function(error, mensaje) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(mensaje);
                }
                menuCaja2();
            });
        } else if (opcion === "0") {
            menuPrincipal();
        } else {
            menuCaja2();
        }
    });
}

module.exports = { menuCaja2 };