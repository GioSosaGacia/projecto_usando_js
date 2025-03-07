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
