// Precedencia de operadores, es como se ejecuran dependiendo su prioridad o rango por decir asi:

/* 
1. Parentesis u corchetes
2. Operadores Unarios como: -, ++, --, !
3. Aritmeticos *, / y %
4. Aritmeticos + y -
5. Relacionales <, <=, > y >=
6. Igualdad == y !=
7. Logicos && y ||
8. Asignación =, =+, =-, *=, etc 
*/

// Uma expresion se realiza de izquierda a derecha

let a = 12 / 3 + 2 * 3 -1;
// Paso 1. division  12 / 3 = 4
// Paos 2. multiplicacion 2 *¨3 = 6
// Paso 3. Suma 4 + 6 = 10
// Paso 4. resta 10 - 1 = 9
console.log(a)







// sentencia if o desiciones, condicionales 
// sintaxis if (condicion-booleana){si es true imprime este bloque----- }else{Falso-----imprime este bloque }
// Podemos anidar mas bloques if, else
let miNumero = -1;

// Revisar si el número es +
/*if(miNumero > 0){
    console.log(`Tu valor positivo ${miNumero}`)
}else if(miNumero < 0){
    console.log(`Tu valor es: ${miNumero} negativo` )
}else{
    console.log(`Tu valor es cero: ${miNumero} ` )
}*/


// El operador ternario(?;)es un simplificador de la sentencia if else y solo se recomiendo si el codigo solo es de una sola linea:
// En JavaScript, el operador ternario (? :) es una forma compacta de escribir una estructura if-else. Se utiliza para evaluar una condición y, según el resultado, retornar un valor u otro. -> condición ? valor_si_verdadero : valor_si_falso;


(miNumero > 0) ? console.log(`Positivo ${miNumero}`) : console.log(`Negativo ${miNumero}`)






// Algoritmo mayo de edad
const EDAD_ADULTO = 18;
let edad_persona = 110;

if(edad_persona >= EDAD_ADULTO){
    console.log(`Es mayor de edad: ${edad_persona}`)
}else{
    console.log(`La persona con la edad: ${edad_persona} es menor de edad`)
}




// Dia de la semana:
let dia_semana = 8;

if(dia_semana == 1){
    console.log('Lunes')
}else if(dia_semana == 2){
    console.log('Martes');
}else if(dia_semana == 3){
    console.log('Miercoles');
}else if(dia_semana == 4){
    console.log('Jueves');
}else if(dia_semana == 5){
    console.log('Viernes');
}else if(dia_semana == 6){
    console.log('Sabado');
}else if(dia_semana == 7){
    console.log('Domingo');
}else{
    console.log("Ese dia no existe")
}



// switch case(valor a evaluar){ case 1: case 2: break; default:} solo es un bloque de codigo y en vez de usar if else se usan casos y break cuando la condicion se cumple, defaul 

/**
 switch (expresión) {
  case valor1:
    // Bloque de código a ejecutar si expresión === valor1
    break;
  case valor2:
    // Bloque de código a ejecutar si expresión === valor2
    break;
  case valor3:
    // Bloque de código a ejecutar si expresión === valor3
    break;
  default:
    // Bloque de código a ejecutar si ningún caso coincide con la expresión
}

 */
switch(dia_semana){
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miercoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sabado')
        break;
    case 7:
            console.log('Domingo')
            break;
    default:
        console.log(`Dia de la semana erroneo: ${dia_semana}`)
}