/*
Una matriz es un arreglo de 2 dimeciones ya que contien reglones y columnas

Sintaxis: let <nombre de la matriz>[[],[]];
    *Donde los primeros corchetes son la primera fila y los segundos la segunda fila.

    Representación de la matriz: el 0 y 1 representa el indice de la fila y el indice de la columna, en el primer campor es la fila 0 y la columna 0, en el segundo es la fila cero y columna 1.
               c0  c1  c2
               00  01  02
    r --> 0    1   2   3
    r --> 1    1   2   3
               10  11  12
*/

//declaración de una matriz es un arreglo de arreglos
let matriz = [[], []];

//Modificar los valores de la matriz
//Renglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

//Modificar los valores de la matriz
//Renglon 0
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

console.log(`Elemento: [0][1] ${matriz[0][1]}`);
console.log(`Elemento: [1][2] ${matriz[1][2]}`);
console.log(matriz);


//Sintaxis simplificada de una matriz:
let matrizS = [[100,150,200],[250,300,350]];

//Resultado
console.log(matrizS);
console.log(matrizS[0]);
console.log(matrizS[1]);