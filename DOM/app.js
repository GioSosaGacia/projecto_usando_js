// obtiene el elemento mediante su id
// const wrapper = document.getElementById("wrapper")
// Obtiene el elemento mediante el nombre de la clase
const links = document.getElementsByClassName('link')
// obtiene el elemento mediante su etiqueta
const divs = document.getElementsByTagName("div") 

// este metodo comunmente se utiliza en inputs, el nodo padre de document, basado en el atributo name 
const input = document.getElementsByName("telefono")

// selecciona un selector del css
const wrapper = document.querySelector(".wrapper")

// selecciona a un elemento al coincidir con su selector de css
// const linkBold = wrapper.querySelector('.link.bold')

// Tambien se pueder usar una pseudoclase del css retornando el ultimo de su tipo
const linkBold = wrapper.querySelector('.link:last-of-type')

// selecciona todos los elementos que coinciden con un selector, este muestra 5 porque esta a nivel document y si lo uso con wrapper solo me arroja 4 que son los que estan dentro de la clase  wrapper
const linkBold1 = document.querySelectorAll('.link')
// const linkBold1 = wrapper.querySelectorAll('.link')



// Un linksHTML son en vivo lo que significa que se actualiza de manera automatica si el dom cambia en linkNode tambien solo que al utilizar querySelectorAll() no se actializará
const linksHTML = document.getElementsByClassName("link")
// podemos convertilo a un array agregando
const linksNode = Array.from(document.querySelectorAll(".link"))

// genera una lista de html
console.log(linksHTML)


const tagAnchor = document.createElement('a');
tagAnchor.setAttribute('class','link');
tagAnchor.textContent = 'Hola Mundo';
document.body.append(tagAnchor)

// se actualiza el DOM, ademas podemos usar .item para acceder a un elemento en especifico
console.log(linksHTML.item(3))

// GENERA UNA lista de nodos, la diferencia es que la de nodos puede usar un foreach 
// no actualiza el dom al usar querySelectorAll
console.log(linksNode)

linksNode.forEach(link =>{
    console.log(link)
})