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




// 1.Procediemientos en js
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