// Una fumcion callBack es una funcion que se pasa como parametro dentro de otra funcion 
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,callBack){
    let res = op1 + op2
    callBack(`Resultado ${res}`);
}

sumar(5,5,imprimir);