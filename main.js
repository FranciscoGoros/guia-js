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

let opcion = 4

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

for (let i = 3; i > 0; i--) {
    console.log(i);
    switch (i == 1) {
        case true:
            console.log("¡Comienza!");;
        break
    }
}

// Ejercicio 8

let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
    puntajeTotal = puntajeTotal + ronda;
}

console.log(puntajeTotal)

// Ejercicio 9

let inventario = ["Fusil", "Escudo", "Pistola", "Tarjeta"];
console.log(inventario);

// Ejercicio 10

for (let i = 0; i < inventario.length; i++) {
    console.log(inventario[i]);
}

// Ejercicio 11

let mochila = [];
mochila.push("Linterna");
mochila.push("Comida");
mochila.push("Mapa");
mochila.pop();
console.log(mochila);

// Ejercicio 12

let inventario2 = ["llave"];
    switch (inventario2.includes("llave")) {
        case true:
            console.log("La puerta se abre");
        break;
        case false:
            console.log("Necesitás una llave");
        break;
    }

// Ejercicio 13

function saludarUsuario(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludarUsuario("Milo");

// Ejercicio 14

function calcularVidaRestante(vida, danio) {
    return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// Ejercicio 15

const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 5));

// Ejercicio 16

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log(jugador.nombre, jugador.vida, jugador.energia, jugador.nivel, jugador.inventario);

// Ejercicio 17

const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

function subirNivel(jugador2) {
    jugador2.nivel += 1;
    jugador2.monedas += 50;
}
subirNivel(jugador2);

console.log(jugador2);

// Ejercicio 18

