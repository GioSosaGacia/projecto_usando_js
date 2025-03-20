// Una clase es una platilla con la cual podemos crear/intanciar objetos, En JavaScript, una clase es una plantilla para crear objetos con un comportamiento específico, utilizando un enfoque orientado a objetos. Las clases permiten organizar el código de manera más estructurada y legible. Una clase puede contener propiedades (también llamadas atributos o campos) y métodos (funciones que definen el comportamiento del objeto).

// Antes se usaban funciones constructoras para instanciar objetos 
class Persona{
    // atributo statico, ademas no se accede usando this si no la clase
    static conatdorObjetosPersona = 0

    // constructor 
    constructor(nombre, apellido){
    // aqui inicializamos los atributos de la clase 
    // Nombre atributo  = nombre del parametro 
        this._nombre = nombre
        this._apellido = apellido
        Persona.conatdorObjetosPersona++;
        console.log('Se incrementa el contador: ' +  Persona.conatdorObjetosPersona)
    }
    // el nombre de la funcion get no debe de ser igual al del atributo por eso se le agrega el _bajo, cuando se usa get y set no se debe de utilizar () para mandar a llamar el metodo 
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

    // dentro de una clase no se requiere del uso de la palabra function 
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }

    // Metodo toString el cual proviene de la clase padre Object.prototype, regresa una cadena, aqui lo estamos sobreescribiendo 
    toString(){
        // se aplica polimorfismo(multipls formas o comportamiento en tiempo de ejecución dependiendo de la clase u objeto con el que se esta trabajando)
        return this.nombreCompleto()
    }

    // static que se asocia solo a la clase de manera exclusiva y no con los objetos
    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    // a un metodo statico si lo podemos pasar como argumento un objeto
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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

// No es posible llamar un metodo statico desde un objeto, solo desde una clase
// persona1.saludar();
// Solo podemos ver el resultado desde la consola
Persona.saludar();
Persona.saludar2(persona1)

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

    // sobreEscritura de un metodo, y lo usamos para agregar el atributo de departamento, ya que en la clase padre no lo tiene, usamos super para acceder al metodo dela clase padre
    nombreCompleto(){
        return super.nombreCompleto() + ', en el departamento de ' + this._departamento
    }
}

let empleado1 = new Empleado('Luis', 'Sosa','Crema')
console.log(empleado1);
console.log(empleado1.nombre);
empleado1.nombre = 'Luis David'
console.log(empleado1);

let empleado2 = new Empleado('Giovanni','Sosa', 'Sistemas');

// Usando el metodo de la clse padre ne la hija
console.log(`El nombre del empleado 1 es: ${empleado1.nombreCompleto()}`);
console.log(empleado1.nombreCompleto());

console.log(empleado2.nombreCompleto());

// Usa el metodo de la clase empleado ya que muestra el departamento, esto tambien es conocido como polimorfismo ya que usa el metodo correspondiente al tipo de objeto/clase que se esta usando 
console.log(empleado2.toString());
console.log(persona1.toString());
Empleado.saludar();
Empleado.saludar2(empleado1)

// En JavaScript, el polimorfismo también se puede aplicar, y aunque no tiene un mecanismo tan formal como en otros lenguajes como Java o C++, se puede lograr mediante la herencia y el uso de métodos sobrescritos.

// atributos staticos de una clase, solo se accede a partir de la clase y no de las instancias de la clase 
console.log(Persona.conatdorObjetosPersona);
console.log(Empleado.conatdorObjetosPersona);