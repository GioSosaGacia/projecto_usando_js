// Una clase es una platilla con la cual podemos crear/intanciar objetos, En JavaScript, una clase es una plantilla para crear objetos con un comportamiento específico, utilizando un enfoque orientado a objetos. Las clases permiten organizar el código de manera más estructurada y legible. Una clase puede contener propiedades (también llamadas atributos o campos) y métodos (funciones que definen el comportamiento del objeto).

// Antes se usaban funciones constructoras para instanciar objetos 
class Persona{
    // constructor 
    constructor(nombre, apellido){
    // aqui inicializamos los atributos de la clase 
    // Nombre atributo  = nombre del parametro 
        this._nombre = nombre
        this._apellido = apellido
    }
    // el nombre de la funcion get no debe de ser igual al del atributo por eso se le agrega el _bajo, cuando se usa get y set no se debe de utilizar ()
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }
    
}

// crear objetos de la clase
let persona1 = new Persona('Giovanni','Sosa');
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = 'Carloss'
console.log(persona1.nombre);
console.log(persona1);

let persona2 = new Persona('Angelica Aneliz','Jaimez');
console.log(persona2);

// El hoisting (en español, "elevación") es un comportamiento en JavaScript donde las declaraciones de variables y funciones son elevadas o movidas al principio del contexto de ejecución

//Quiere decir que no se pueden usar o crear objetos antes de declarar su clase o una variable, solo aplica con las funciones 
// console.log(x);
// let x = 'Holaa'
// console.log(x);




// Herencia: --> La herencia es un concepto clave en la programación orientada a objetos (OOP) que permite que una clase herede características (propiedades y métodos) de otra clase

// los diagramas UML SE USAN para las clases 
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento
        
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }
}

let empleado1 = new Empleado('Luis', 'David','Crema')
console.log(empleado1);
console.log(empleado1.nombre);
empleado1.nombre = 'Luis David'
console.log(empleado1);