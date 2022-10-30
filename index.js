let main = alert("Bienvenido a la calculadora interactiva") + alert("Te voy hacer unas pequeñas preguntas antes de seguir :D")

class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        if (isNaN(edad)) {
            alert("Por favor solo numeros.");
        } else {
            alert(" Tu nombre es " + nombre + (" y tu edad es de " + edad)) + alert(nombre + " gracias por responder :D");
        }
    }
}

const usurario1 = new Usuario(prompt("Ingrese tu nombre."), parseInt(prompt("ingresa tu edad.")))
console.log(usurario1);
let calculadora = alert("Empecemos a calcular :v")

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let numero1, numero2, operacion

do {
    numero1 = parseInt(prompt("Ingrese un numero "))
    numero2 = parseInt(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,*,/)")
} while (isNaN(numero1) || isNaN(numero2))

switch (operacion) {
    case "+":
        alert("Tu resultado es " + numero1 + numero2)
        break
    case "-":
        alert("Tu resultado es " + numero1 - numero2)
        break
    case "*":
        alert("Tu resultado es " + numero1 * numero2)
        break
    case "/":
        alert("Tu resultado es " + numero1 / numero2)
        break
    default:
        alert("Operacion no valida")
        break
}

const extra = [usurario1]
console.log(extra)