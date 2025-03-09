// Permiten repetir un bloque de codigo mientras la condicion sea verdadera
/*while, do while y for 
        while(condicion){
            se ejecuta siempre y cuando cumpla la condicion 
        }*/
let contador = 0, repeticiones = 5;

//Cuando es solo una linea de codigo no requiere el uso de llaves
// while(contador <= repeticiones){
//     console.log(contador++)
//     //contador++;
// }


//do{} while{} es similar, haz esto mientras se ejecuta la condicion y minimo se ejecuta 1 vez antes de revizar la condicion 
console.log('Do while')
do{
    console.log(contador++);
}while(contador <= repeticiones);



//for  permite imprimir varias veces un bloque de codigo, se usa con los iteradores comunmente.
//for(declaracion de variables ; condicion a evaluar; incremento o decremento;){
//          3. Ejecucion del bloque de código
    // }
    // 1.sE EJECUTA SOLO UNA VEZ AL INICIO DEL CICLO FOR
    // 2.Se repite el ciclo mientras la condicion sea verdadera 
    // 3.Se ejecuta el bloque de codigo.
    // 4.Se incrementan los contadores

let repeticiones1 = 10;
console.log('Ciclo for');

for(contador1 = 0; contador1 <= repeticiones1; contador1++){
    console.log(contador1);
}


//Imprimir los numeros de 0 al 10 de 3 en 3
let repeticiones3 = 10;
console.log("for 3 en 3")
for(contador3 = -6; contador3 <= repeticiones3; contador3 += 3){   
    console.log(contador3);
}




//Suma acumulativa;
//Suma de los primeros 5 numeros utilizando un for 
numeros = 5;
suma = 0;
for(i = 1; i <= numeros; i++){
    // Imprimimos lo que va ha sumar
    console.log(`${suma} + ${i}`)
    //realizamos la suma parcial
    suma+=i
    console.log(suma)

}
console.log(suma);





let acumulador = 0, numero = 1, maximo = 5;
 //Suma Acumulativa con do{} while{}
console.log("Suma con do while")
 do{
    console.log(` ${acumulador} + ${numero}`)
    console.log(acumulador += numero);
        numero ++;
 }while(numero <= maximo)
    console.log(acumulador);