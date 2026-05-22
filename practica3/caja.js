

const precio = 0;
const iva = 1.16;
let acumulado = 0;

const subtotal = (precio) => {
    acumulado += precio

    return acumulado;
}

const total = (subtotal, iva) => {

    return subtotal * iva;
}




