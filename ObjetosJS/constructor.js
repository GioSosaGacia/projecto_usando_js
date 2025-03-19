// // Un constructor en JavaScript es una función especial que se utiliza para crear y inicializar objetos de una clase. Los constructores son fundamentales cuando se trabaja con objetos personalizados o clases en JavaScript, ya que permiten definir la estructura y el estado inicial de un objeto cuando se crea una nueva instancia de una clase o función constructora.

function Persona(nombre,apellido,email){
    // this nos permite trabajar con las propiedades de un objeto
    this.nombre = nombre 
    this.apellido = apellido
    this.email = email
    // Creacion de la funcion, this trabaja con los valores del objeto que se esta trabajando en el momento
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido
    }
}
// Creacion de objetos a partir de un contructor
// Persona es un metodo que nos permite crear un nuevo objeto 
let padre = new Persona('Juan','Garcia','jg@gmail.com')
console.log(padre);


let madre = new Persona('Angelica','Jaimes','aj@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());


// cambios al objeto padre
padre.nombre = 'Giovanni Angel '
console.log(padre);
console.log(padre.nombreCompleto());



// Formas de crear un objeto 
// new lo podemos usar para crear objetos de tipo: 1.String, 2.Number, 3.Boolean, 4.Array, 5.Function
let miObjeto = new Object();
// forma recomendable
let miObjeto2 = {}

// ejemplo de Un str
let miStr = new String('Hola');
// Para una funcion 
let miFuncion = new Function();
// otra manera 
let miFuncion1 = function(){}



// Uso de prototype, sirve para agregar propiedades a los objetos en este caso a ambos sin tener que declararlo dentro del constructor, ya que si no usamos prototype debemos de agregarlo de manera independiente en cada uno de los objetos 

// -->Ejemplo padre.tel = 23456789 y madre.tel = 98765432, este es sin prototype 
Persona.prototype.tel = '4433226655'
console.log(padre.tel);
// Tambien lo podemos modificar de manera independiente 
padre.tel = 3326036684
console.log(padre.tel);
// Madre
console.log(madre.tel);
madre.tel = 33256798457
console.log(madre.tel);





// Metodo call permite llamar un metodo definido en un objeto desde otro objeto 

// Solo se usa this cuando queremos acceder a las propiedades del objeto y no a los argumentos de la funcion 
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    // Tambien podemos pasar argumentos con la funcion call
    nombreCompleto1: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de call para usar la funcion nombre completo con los datos de persona2, // Tambien podemos pasar argumentos con la funcion call
console.log(persona1.nombreCompleto1('Abogado', 123456789));
console.log(persona1.nombreCompleto1.call(persona2,'Ing',3322445566));


// Metodo apply se usa casi como call, solo que apply requiere del uso de un arreglo, 1.Creandolo o 2.Pasando los argumrnto entre los []
let arreglo = ['Ing', '3326036684']
console.log(persona1.nombreCompleto1.apply(padre,arreglo));
console.log(persona1.nombreCompleto1.apply(padre,['Abogado','32456787654']));