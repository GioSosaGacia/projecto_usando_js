/*Constantes es una variable que una vez definida su valor, ya no se puede cambiar
Una constante se define en mayuscula y si tiene mas de una palabra se separa mediente el uso de un _bajo
const MI_CONSTANTE = 10
*/
const MI_CONSTANTE = 10;
//MI_CONSTANTE = 20 NO PODEMOS cambiar el valor de una constante 
console.log(MI_CONSTANTE);

//cONSTANTE DE PI 
console.log(Math.PI);

//constante de segundos por minuto
const SEGUNDOS_POR_MINUTOS = 60;
console.log(SEGUNDOS_POR_MINUTOS);





// pre incremento:incrementa el valor de una variable antes demostrar l Y EL post incremento despues de ejecurla una segunda ve

let a,b,c;
a = 0
//pre
++a; 
console.log(a)
//post
a++;
console.log(a)
//pre-decremento
--a;
console.log(a)
//pos-decremento
a--
console.log(a)





a = 5
b = 10
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b)







// operador de asignacion = x = 3 o asignación compuesto x += 3
// +=, -=, *=, /= , %=, **=

let mi_numero = 10
console.log(mi_numero)
mi_numero = 21;
console.log(mi_numero)


// operador += 
mi_numero *= 5
console.log(mi_numero)


// operadores de comparación o operadores relacionales == y comparacion === y tipo de dato, 
//

let w = 5;
let q = '5';
console.log('a == b', w == q);
// igualdad estricta la cual compara el dato y su tipo
console.log('a === b', w === q);


//String Interpolation es como el f'string de python y se usa agregando el back-tick ``
console.log(`${w} === ${q} --> ${w ===q}`);
console.log(`${w} == ${q} --> ${w ==q}`);


// Operador distinto != 
console.log(`${w} != ${q} --> ${w != q}`);
console.log(`${w} !== ${q} --> ${w !== q}`);












let z = true;
let x = false;

console.log(z);
console.log(x);

// operadores logicos && and y -> regresa verdadero si ambos valores son verdaderos pero si uno es falso siempre retornará false. si la expresion de lado izquierdo es falso se aplica el corto circuito y en automatico es false
console.log(`${z} && ${x} -> ${z && x}`)

//  || or o -> retorna True si cualquiera de los 2 operandos es verdadero pero si ambos son falsos retornará False
console.log(`${z} || ${x} -> ${z || x}`);

//Negación ! not no --> invierte el resultado logico de la expresion true = false and false = true, es conocido como operador unario
console.log(`${z} --> ${!z}`);
console.log(`${x} --> ${!x}`);










// import prompt from 'prompt'
// Valor dentro de un rango  solo funciona en el navegador
let valor_minimo = 0, valor_maximo = 5;
// let valor = parseInt(prompt('Ingresa un numero: '));

// if (!isNaN(valor) && valor >= valor_minimo && valor <= valor_maximo){
//     console.log(`Estas dentro del rango: ${valor}`)
// } else {
//     console.log(`El numero: ${valor} no esta dentro del rango`)
// }

// otro ejemplo 
let dato = 3 
let dentroRango = dato >= valor_minimo && dato <= valor_maximo;
console.log(`Valor dentro de rango: `, dentroRango)
