// Una fumcion callBack es una funcion que se pasa como parametro dentro de otra funcion 
function imprimir(mensaje){
    console.log( mensaje);
}

function sumar(op1,op2,callBack){
    let res = op1 + op2
    callBack(`Resultado suma ${res}`);
}

sumar(5,5,imprimir);


//Llamadas asincronas con setTimeOut 
function miFuncion(){
    console.log("Saludo asincrono después de 4 segundos")
} 

setTimeout(miFuncion, 4000);
//setTimeOut tambien puede recibir la función directa 
setTimeout( function miFuncion2(){console.log("Saludo Asíncrono 2 despué de 5 segundos")},5000);
//Con funciones flecha 
setTimeout( () => console.log("Saludo asíncrono después de 6 segundos"),6000);


//setInterval manda a llamar a la funcion callball cada cierto tiempo

let relog = () => {
    let fecha = new Date();
    console.log(`Hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} pm`);
}

setInterval(relog,1000); //se manda a llamar cada 1 seg...
