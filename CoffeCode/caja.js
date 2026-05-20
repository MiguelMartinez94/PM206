const pedidos = [];


const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function agregarPedido(producto){
    pedidos.push(producto);
}


function menu(){
    console.log("1. Ver lista de pedidos");
    console.log("2. Ver el total de pedidos acomulados");
    console.log("3. Agregar un nuevo pedido");

    consulta = terminal.question("¿Qué deseas hacer?: ", function(consulta){

    if (consulta == 1) {
    console.table(pedidos)
    menu();
    } else if (consulta ==2) {
        const total = pedidos.length;
        console.log(`El total de pedidos es: ${total}`);
        menu();
    } else if (consulta == 3) {
        terminal.question("¿Qué producto deseas?", function(producto){
            pedidos.push(producto);
            menu();
        })
        
    }
    
});
}


    

menu();




