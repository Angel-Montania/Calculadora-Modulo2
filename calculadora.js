const sumar = require("./Funciones/sumar")
const restar = require("./Funciones/restar")
const multiplicar = require("./Funciones/multiplicar")
const dividir = require("./Funciones/dividir")
let process = require("process") 

let operacion = process.argv[2].toLowerCase()
let parametro1 = +process.argv[3]
let parametro2 = +process.argv[4]

if(operacion === "sumar") {
    console.log("El resultado es " + sumar(parametro1, parametro2))
} else if(operacion === "restar") {
    console.log("El resultado es " + restar(parametro1, parametro2))
} else if(operacion === "multiplicar") {
    console.log("El resultado es " + multiplicar(parametro1, parametro2))
} else if(operacion === "dividir") {
    console.log("El resultado es " + dividir(parametro1, parametro2))
} else { console.log("No recibi los datos correctos")}


/* console.log(sumar(15,7), restar(15, 7));
console.log(multiplicar(7, 3));
console.log(multiplicar(7, 0));
console.log(dividir(15, 3));
console.log(dividir(15, 0));
console.log(restar(multiplicar(15,2), dividir(15, 3))) */