console.log('Hola estoy en la aplicación');

// Datos primitivos: number, str, boolean, bigint, undefined, null, symbol

let a = 10;
let b = 'Hola'
let c;
let d = null;

console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(b));
console.log(typeof(a));


// Uso de los backticks
console.log(`Hola ${a}`);

// Funciones

function suma(a,b){
    return a + b;
}

console.log(suma(5,5));

