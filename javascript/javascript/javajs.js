var saludo="hola mundo desde JavaScript"
console.log(saludo)

// comentarios

/* van nuestros comentarios

forma de escribir sintaxis

 var nombre 

 var $nombre

 var _nombre

 var nombre1

 var nombre_estudiante



 COMO NO ESCRIBIR  

 var 8nombre 

 palabras reservadas de javascript 
 var if, while, case, for


 COMO CREAMOS UN ARCHIVO EN NUESTRO JS
 SIN LETRAS MAYUSCULAS 

 todoen las carpetas en minusculas

*/ 

/*   variables en js   

1. var ==== es una variable de tipo 
var se puede usar en toda la vida del 
programa o todos los alcances 


2. let === es una variable privada que se 
utiliza en una parte especifica del programa
eso quiere decir que es una variable local

*/

{
let hello= "hello word"

}

var a
a=7
console.log("el valor de a es: " ,a)

let b
b=6
console.log("el valor de b es: " ,b)

console.log(window)
console.log(window.a)
console.log(window.b)

/*   Variable tipo var   */

var musica="Baladas"

console.log("Variables antes del bloque",musica)
{
    var musica="Cumbia"
    console.log("Variable dentro del bloque",musica)
}
console.log("Variable fuera del bloque",musica)



console.log("********Let*********")
let musica2="Salsa"
console.log("variable antes de entrar al bloque",musica2)
{
    let musica2="Merenge"
    console.log("Variable dentro del bloque ",musica2)
}

console.log("Variable fuera del bloque",musica2)