const { terminal, menuPrincipal } = require('./caja.js');

function prepararCafe() {
    return new Promise((resolve, reject) => {
        const numeroAleatorio = Math.random();
        
        if (numeroAleatorio > 0.6) {
            resolve("Café preparado con éxito.");
        } else if (numeroAleatorio > 0.3) {
            reject("Error en cocina: Ocurrió un problema inesperado.");
        } else {
            reject("Error en cocina: Falta ingrediente.");
        }
    });
}

function menuCocina2() {
    console.log("\n--- COCINA 2 (Promesas) ---");
    console.log("1. Preparar café");
    console.log("0. Volver al menú principal");

    terminal.question("Elige una opción: ", function(opcion) {
        if (opcion === "1") {
            console.log("Iniciando preparación del café...");
            
            prepararCafe()
                .then(resultado => {
                    console.log(resultado);
                    menuCocina2();
                })
                .catch(error => {
                    console.log(error);
                    menuCocina2();
                });
        } else if (opcion === "0") {
            menuPrincipal();
        } else {
            menuCocina2();
        }
    });
}

module.exports = { menuCocina2 };