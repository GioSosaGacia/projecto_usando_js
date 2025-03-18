//Una funcion es un bloque de codigo reutilizable, que realiza una tarea en particular, Una funcion puede tener parametros de entrada y tambien puede retornar un valor de salida

// Divide y venceras, implica en dividir un proyecto grande en varias secciones donde tareas especificas se asignan a varios programadores.

// sintanxis --> funtion <nombre de la funcion>(parametros locales a la función){cuerpo de la funcion }
// si va a regresar un valor usamos return 

function suma(a,b){
    return a + b
}
console.log(suma(2,4));


// diferencia entre parametros:son variables locales a la función y argumentos:es el valor de los parametros o las variables

//diferencia entre procedimiento:No retorna un tipo de valor solo lo imprime y funcion:usa return regresa o devuelve un tipo de valor 

// 2 tipos de funciones; 1.definidas: funciones definidas por el usuario, 2.Funciones incorporadas (built-in) ya definidas en JS



// Paso por valor se refiere al paso de argumentos a las fucniones, recibiendo una copia del valor original, lo que implica que cualquier cambio dentro de la funcion no afectará al valor original que esta afuera de la función. Comunmente se aplica a los datos primitivos: numeros, cadenas de texto, bool, undefined, null, bigInt 
//1.Procediemientos en js
//1.definir el procedimeinto
function saludar(mensaje){
    // cuerpo de la funcion 
    console.log(`Mensaje: ${mensaje}`)
}
// 2.Llamar al procedimiento
saludar('Hola desde Js');




// Funciones en JS
// 1.declarar la funcion 
function sumar1(a,b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}
// 2.Llamar o invocar a la funcion:
let argA = 5, argB = 7;
let resultado = sumar1(argA,argB);
console.log(`El resultado de la suma es: ${resultado}`);








// Paso por referencia:
// Los obejetos(Array)/funciones, se pasan por referencia, tambien un diccionario es un objeto ya que contiene clave-valor

// El paso por referencia en JavaScript se refiere al comportamiento cuando se pasan objetos (incluidos arrays y funciones) como argumentos a una función,  lo que significa que los cambios realizados dentro de la función afectarán directamente al objeto fuera de la función. 
function cambiarValor(parametro){
    parametro[0] = 20;
}
// Llamamos a la funcion 
let arreglo = [10];
console.log(`Antes de la función; ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues de la función: ${arreglo[0]}`);
