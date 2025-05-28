// Promesas .then, .catch, promise 

let promesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("Problema resuelto");
    }else{
        rechazar("Se genero un error")
    }
});


//se puede generar en una sola linea  o como en el ejemplo con dos lineas 
promesa
.then(valor => console.log(valor))
.catch(error => console.log(error));


//setTimeOut usando promesas, se puede usar los dos parametros o solo uno los cuales son resolved or rejected 
let promesa1 = new Promise((resolver1) => {
    // console.log("Inicio de la promesa");
    setTimeout( () => resolver1("Saludos con Promesa con setTimeOut"), 3000);
    // console.log("Fin de la promesa");
});

// promesa1.then(valor => console.log(valor));




//Palabra reservada async = indica que una funcion retornara una promesa 
//reutns es como si usaramos el resolve, usando async si debemos de usar los parentesis al mandar a llamar la fucnion, lo que retorne en el return lo podemos consumir usando la funcion then()
async function miFuncionConPromesa() {
    return 'Saludos con promesa y async'
}

// miFuncionConPromesa().then(valor => console.log(valor));




// Await(espera el resultado de una promesa, lo que hace es omitir el uso de then()) en consjunto con async(indica que retornara una promesa)
async function funcionConPromesaYawait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });
    console.log(await miPromesa);
}

// funcionConPromesaYawait();

async function funcionConPromesaYawaitSetTimeOut(){
    console.log("Inicio");
    let miPromesa1 = new Promise(resolver1 => {
        setTimeout( () => resolver1("Promesa con await y setTimeOut"), 3000);
    });
    console.log(await miPromesa1)
    console.log("Fin.");
}

funcionConPromesaYawaitSetTimeOut();