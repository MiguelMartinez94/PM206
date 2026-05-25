
function endsWith(string1, string2){

  let  stringReverse = string1.slice(-string2.length);

  if (string1.slice(-string2.length) == string2) {
    return true;
  } else{
    return false;
  }
}

const string1 = "hola";
const string2 = "la";

console.log(string1.slice(-string2.length));
console.log(string2);

endsWith(string1, string2);

function mostrarMensaje(nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarUsuario(nombre, miCallback) {
    console.log("Procesando usuario...");
    miCallback(nombre);
}

procesarUsuario("Ana", mostrarMensaje);
