function Persona(nombre,apellido,email){
    // this nos permite trabajar con las propiedades de un objeto
    this.nombre = nombre 
    this.apellido = apellido
    this.email = email
}
// Creacion de objetos a partir de un contructor
// Persona es un metodo que nos permite crear un nuevo objeto 
let padre = new Persona('Juan','Garcia','jg@gmail.com')
console.log(padre);

let madre = new Persona('Angelica','Jaimes','aj@gmail.com');
console.log(madre);