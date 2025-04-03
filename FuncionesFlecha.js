let miFuncion =  function (){
    console.log('Saludos desde mi función');
}

miFuncion();


// Las funcones flecha son anonimas, una funcion flecha no se puede mandar a llamar antes de definirla
// let miFuncionFlecha = () => {
//     console.log("Hola desde Mi función flecha")
// }

// miFuncionFlecha();

// si es una sola linea lo podemos hacer sin el uso de las llaves{}
const miFuncionFlecha = () => console.log('Saludos desde mi función flecha');

miFuncionFlecha();


// 
const saludar = () => 'Saludos desde la funcion flecha';
console.log(saludar());

// Regresar un objeto, cuando regresamos un objeto el cuerpo de la funcion en vez de ser con {} será con () ya que si usamos {} nos marcará error ya que un objeto tambien se declara entre llaves
const returnObject = () => ({nombre:"Giovanni", apellido:"Sosa "})
console.log(returnObject());


// function with parameters, si es solo un parametro podemos omitir los parentesis
// const greetingWithParameters = (message) => console.log(message);
const greetingWithParameters = message => console.log(message);
greetingWithParameters("greeting using parameters");

//With more parameters, cuando es mas compleja la funcion es mejor usar {}
// const moreParameters = (op1, op2) => op1 + op2;
const moreParameters = (op1, op2) => {
    let res = op1 + op2;
    return `Raseultado de la suma es = ${res}`;
}
console.log(moreParameters(5,5));
