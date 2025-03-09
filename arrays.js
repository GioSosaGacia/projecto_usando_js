/*Un arreglo nos permite almacenar múltiples valores en una sola variable, en lugar de definir varias variables 
    < del arreglo>[Datos o elementos], a cada elemento se le agrega un indice, si el array tiene 3 valores sus indices serian, 0,1,2 ya que seimore inicia desde 0.
    2.Puede almacenar cualquier tipo de dato,

    3.Para modificar un array -> escribiemos el nombre del arreglo frutas["Mango","Pera"] futas[0] = "Kiwi"
        Y como resultado nos data el arreglo frutas["Kiwi","Pera"]

    4.Si tenemos un arreglo con 5 datos, pero tres de ellos no estan definidos su retorno será undefine, para las casillas que esten vacias.

    5.Si queremos acceder a un elemento en especifico de un array lo podemos hacer de la siguiente manera:
        consoloe.log(numeros_enteros[mas el indice que desamos imprimir ])

*/
let numerosArreglo = [];
console.log(numerosArreglo);

// Modificar un arreglo
numerosArreglo[0] = 2;
numerosArreglo[1] = 21;
numerosArreglo[3] = 24;
numerosArreglo[4] = "Hola";
console.log(numerosArreglo);


// sintaxis simplificada de arreglos
let numerosArreglo1 = [1,2,3,4,5,6,7,8,9,10];

console.log(numerosArreglo1.length);

console.log("for");
for(let i = 0; i < numerosArreglo1.length; i++ ){
    console.log(`${i} : ${numerosArreglo1[i]}  `);
}