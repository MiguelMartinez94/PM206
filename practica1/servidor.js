console.log("Hola mundo JS desde el servidor!")

let edad1 = 24;
const edad2 = 50; 

console.log((edad1 + edad2)/2 );

// Medir el tiempo de un proceso

console.time("El proceso");

for(let i = 0; i<10;i++){

}

console.timeEnd("El proceso");

let usuarios = [{

    nombre:"Miguel",
    edad: 24,

},
{
    nombre:"Joanna",
    edad:23
}
];

console.table(usuarios);
