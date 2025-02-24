// El ; al final es opcional pero por buenas practicas e recomendable, esta forma de declarar variables es la vieja
var miNumero = 15;
console.log(miNumero)

let miNumero2 = 20.34;
console.log(miNumero2)
console.log(typeof(miNumero2))

let $miNumero3 = 12;
console.log($miNumero3)

let _miNumero3 = 232;
console.log(_miNumero3)


console.log('Tipos de datos');

let mi_cadena = "Hola";
console.log(mi_cadena);
console.log(typeof(mi_cadena))

let miBoolean = true;
console.log(miBoolean);
console.log(typeof(miBoolean))


let mi_null = null;
console.log(mi_null);
console.log(typeof(mi_null));

let undefine_1 = undefined;
console.log(undefine_1)
console.log(typeof(undefine_1))





/*Hoisting las declaraciones de una variable pueden estar en cualquier parte del programa
Podemos usar una variable y despues declararla solo funciona con var y no con let */
'use strct' // modo stricto, hace que el hointing no se aplique al usar var, var ya no se usa
x = 10;
//y = 12 con let no aplica el hhoisting 
console.log(x);
var x;
let y


/*Operadores */
let a,b,c,d
//Modulo
a = 9 % 2
console.log(a)

//potencias
b = 2 ** 3
console.log(b);

//pow es el metodo de potencia 
b = Math.pow(2,3)
console.log(b);