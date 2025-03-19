// Todo es un objeto en JS, a diferencia de los datos primitivos(no contienen atributos o metodos) los --> objetos cuentan con el uso de metodos y propiedades 
let x = 10

// definicion de un constructor, permite crear varios objetos

// Un constructor en JavaScript es una función especial que se utiliza para crear y inicializar objetos de una clase. Los constructores son fundamentales cuando se trabaja con objetos personalizados o clases en JavaScript, ya que permiten definir la estructura y el estado inicial de un objeto cuando se crea una nueva instancia de una clase o función constructora.

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

// definicion de un objeto: siempre se almacena en un valor hexadecimal comienza con 0x, un objeto puede soportar varios tipos de datos.

// Usamos this para acceder a las propiedades de nuestros objetos, ya que this apunta a la referencia del objeto en memoria 
let persona = {
    nombre: 'Giovanni',
    apellido: 'Sosa',
    email: 'giovanni-sosa-12@outlook.com',
    edad: 32,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    // getnombreCompleto: function(){
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}

// al usar el . tenemos acceso a sus atributos: 
console.log(persona.nombre);
console.log(persona);
console.log(persona.nombreCompleto);


// Podemos usar la palabra reservada new para crear objetos directaente , creacion del objeto vacio, el uso de new Object() permite reservar memoria para la creacion del objeto
let persona2 = new Object();
// agregando atributos o propiedades al objeto 
persona2.nombre = 'Angelica'
persona2.apellido = 'Jaimez Aguirre'
persona2.domicilio = 'Rio Tuito 1123'
persona2.telefono = 3326036684

console.log(persona2.domicilio);
console.log(persona2);


// Otra forma de acceder a las propiedades de un objeto y es mediante el indice usando []
console.log(persona['apellido']);
console.log(persona['nombreCompleto']);


// recorrer  los atributos de un objeto: con for in 
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}




// Agregar o eliminar propiedades a un objeto: 
console.log(persona)
persona.telefono = 3326036684;
// Modificando una propiedad, si no escribimos bien el nombre se agregara una nueva
persona.telefono = 3326036628;
console.log(persona);

// Para eliminar una propiedad: Usamos delete
delete persona.telefono;
console.log(persona);


// formas de imprimir con console, con for in 
console.log(persona.nombre + ' ' + persona.apellido);
// con for in 
console.log('For in')
for(propiedad in persona){
    console.log(propiedad);
}
// Utilizando la sintaxis de Object.values, retornando un objeto como un arreglo 
let personaArray = Object.values(persona);
console.log(personaArray);



// JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer/escribir para los seres humanos, y fácil de analizar/generar para las máquinas. Aunque su nombre contiene "JavaScript", JSON no está limitado a este lenguaje, sino que es un formato ampliamente utilizado en muchas tecnologías y lenguajes de programación.

// Utilizando una cadena con el metodo JSON.stringify -->mean convertir a cadena 
// JSON.stringify(): Convierte un objeto de JavaScript en una cadena JSON.
// JSON.parse(): Convierte una cadena JSON en un objeto de JavaScript.
let personaString = JSON.stringify(persona);
console.log(personaString);







// Metodo get(Obtener) y set(establecer o moificar)
// get dentro de un objeto, si lo usamo con una funcion, el momento de mandar a llamar la misma ya no nesecitará () para llamarla ya que al usar get ya la esta mandando a llamar 
console.log(persona.nombreCompleto);
// Uso de set
console.log(persona.lang);
persona.lang = 'en';
console.log(persona);
console.log(persona.lang);
console.log(persona.idioma);