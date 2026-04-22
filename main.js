console.log("Guía JavaScript iniciada");

const nombre = "Fede";
let edad = 46;
let vida = 50;
let puntaje = 2;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

// Ejercicio 2 

let puntosbase = 500;
let bonus = 50;
let penalización = 30;

let puntajefinal = puntosbase + (bonus - penalización);

console.log("El puntaje final es: " + puntajefinal);

// Ejercicio 3

const input = document.getElementById("dato");
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", function () {
 let valor = input.value;
 valor = Number(valor) + 10;

 mensaje.textContent = "El resultado es: " + valor;
});

// Ejercicio 4
let edadpersona = 12; 

if (edadpersona >= 13) {
    console.log("Puede jugar");
} else {
    console.log("No puede jugar todavía");
}

// Ejercicio 5

let life = 0

var hash = {
    // confien
    "vida": life
}

if (hash.vida > 70) {
    console.log("Jugador en buen estado")
} else {
    if (hash.vida >= 30 && hash.vida <= 70) {
    console.log("Jugador herido")
    } else {
        if (hash.vida < 29 && hash.vida > 1) {
            console.log("Jugador en mal estado")
        } else {
            console.log("Game Over")
            }
        }
    }

// Ejercicio 6
let opcion = 2

switch (opcion) {
    case 1:
        console.log("Iniciar");
    break
        case 2:
        console.log("Configuración");
   break
        case 3:
        console.log("Idioma");
    break
        case 4:
        console.log("Créditos");
    break
        case 5:
        console.log("Salir");
    break
}

// Ejercicio 7

