//Cdenas y funciones en JS
// Cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro = 'Adios';
}

//Llamamos a la función 
let argumento = 'Hola';
console.log(`Antes de la función: ${argumento}`);

cambiarValor(argumento);
console.log(`Despues de la función: ${argumento}`);


// En JavaScript, los strings (cadenas de texto) son inmutables, lo que significa que no puedes modificar un string directamente una vez que ha sido creado. Sin embargo, puedes crear una nueva cadena de texto con las modificaciones que deseas y devolverla.

function modificarString(str) {
    // Modificar el string de alguna manera
    return str.replace('mundo', 'JavaScript');
  }
  
  let saludo = 'Hola mundo';
  let nuevoSaludo = modificarString(saludo);
  
  console.log(nuevoSaludo);  // "Hola JavaScript"
 

/*En este caso, la función modificarString toma un string, realiza una modificación (en este caso, usando el método replace), y devuelve una nueva cadena de texto con los cambios.

Entonces, aunque no puedas modificar un string original en sí mismo, puedes generar una nueva cadena con las modificaciones deseadas. */