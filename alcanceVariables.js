//Alcance de variables ne JS El alcance de las variables en JavaScript (o scope) hace referencia a la región del código donde una variable es accesible o está definida. En otras palabras, define la "visibilidad" de las variables y en qué contextos pueden ser utilizadas.

/*En JavaScript, el alcance de las variables puede ser:
Global Scope (alcance global)
Function Scope (alcance de función)
Block Scope (alcance de bloque, puede der un if. while o un for) 
*/

let variableGobal = 5;

// Modificar el valor
variableGobal = 10;

// definir la funcion:
function miFuncion(variableLocal){
    console.log(variableLocal);
    // Modificamos la variable global
    variableGobal = 20;
    // No podemos redifinir una variable global
    // let variableGobal = 30
}

// Llamandoa la funcion
miFuncion(variableGobal);
console.log(variableGobal);






// Resumen de las diferencias:
// Palabra clave	Alcance	Reasignación	Redefinición	Uso recomendado
// var	Función	Sí	Sí	Evitar su uso (por cuestiones de confusión por su alcance).
// let	Bloque	Sí	No	Usar cuando necesitas una variable cuyo valor cambiará dentro de un bloque.
// const	Bloque	No (no se puede reasignar)	No	Usar cuando una variable no debe cambiar, pero puede ser un objeto o array que se modifica internamente.



// Funciones recursivas: reglas
/* 1.Una función recursiva se debe de llamar a si misma 
   2.Debe de avanzar a un casi base, de lo contrario caemos en ciclos infinitos 
            miFuncion(n)
                si n == 1 
                    return n
                Sino 
                    miFuncion(n-1)*/

// Ejemplo, Imprimir 3,2,1
function funcionRecursiva(numero){
    // caso base 
    if(numero == 1){
        console.log(numero)
    }else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

funcionRecursiva(4);



// Funciones recursivas: Una función incorporada (o función integrada) en programación es una función que viene predefinida en el lenguaje de programación y que puedes usar directamente sin necesidad de definirla.

let cadena1 = 'Hola';
console.log(cadena1.length);
console.log(typeof(cadena1));

// No podemos modificar una cadena en javaScript ya que son inmutables:
cadena1[0] = 'x'
console.log(cadena1);

// Solo podemos reasignar una nueva cadena 
cadena1 = 'Adios';
console.log(cadena1);

// RECorrer una cadena
for(let i = 0; i < cadena1.length; i++){
    console.log(`${i} - ${cadena1[i]}`)
}











// Subcadenas en Js es la extracción de un fragmento de la cadena original 
let cadena3 = 'Hola Mundo';
cadena1.slice;
// SubString(inidceInicio, IndiceFinal)
console.log(cadena3.substring(0,4));
// Si no indicas el final retornara desde el indice donde inicia asta llegal el indice del final 
console.log(cadena3.substring(5));

// concatenar cadenas
let a = 'Giovanni'
let b = 'Sosa'
let c = a + ' ' + b
console.log(c);
console.log(`${a} ${b}`);

// Convertir una cadena a un integer(entero)
let d = '10', e = '20';
console.log(d + e);
// conversión a numero para hacer la suma
let suma = parseInt(d) + parseInt(e);
console.log(suma);
console.log(typeof(suma));


// convertir un nuemro a una cadena
let a1 = 10, b1 = 20;
console.log(a1 + b1);
let concatenacion = a1.toString() + b1.toString()
console.log(concatenacion);
console.log(typeof(concatenacion));


// Valor absoluto de un numero es el mismo valor pero sin considerar su signo --> El valor absoluto de un número es la distancia de ese número respecto al cero en la recta numérica, sin tener en cuenta su signo. Es decir, el valor absoluto siempre es un número positivo o cero.

let numero = -10;
let valorAbsoluto = Math.abs(numero); //abs = absoluto
console.log(valorAbsoluto);



// Redondeo y truncado en js
let numero1 = 8.5, redondeo, truncado;

// redondeo --> Math.round() redondea al valor más cercano .5 hacia arriba, < .5 hacia abajo
console.log(numero1)
redondeo = Math.round(numero1);
console.log(redondeo);

// ELIMINA LA PARTE FLOTANTE DEL DECIMAL 
console.log(numero1);
truncado = Math.trunc(numero1);
console.log(truncado);
