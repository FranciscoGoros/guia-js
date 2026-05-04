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

// Este ejercicio está sobre-escrito por el 25. Como la consigna decía
// "Utilizar la constant btn" usé el mismo botón para ambos. 

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
} 
else {
    if (hash.vida >= 30 && hash.vida <= 70) {
    console.log("Jugador herido")
    } 
    else {
        if (hash.vida < 29 && hash.vida > 1) {
            console.log("Jugador en mal estado")
        } 
        else {
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

console.log(inventarioBase);

// Ejercicio 10

for (let i = 0; i < inventarioBase.length; i++) {
    console.log(inventarioBase[i]);
}

// Ejercicio 11

let mochila = [];
{
    mochila.push("Linterna");
    mochila.push("Comida");
    mochila.push("Mapa");
    mochila.pop();
    console.log(mochila);
}


// Ejercicio 12

switch (inventarioBase.includes("llave")) {
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

console.log(jugador.nombre, jugador.vida, jugador.energia, jugador.nivel, jugador.inventario);

// Ejercicio 17

function subirNivel(jugador2) {
    jugador2.nivel += 1;
    jugador2.monedas += 50;
}
subirNivel(jugador2);

console.log(jugador2);

// Ejercicio 18

for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].nombre, "Es " + personajes[i].tipo, "Y está en nivel ", personajes[i].nivel);
}

// Ejercicio 19

const personajesFuertes = personajes.filter((personaje) => {
    return personaje.nivel > 3;
});
console.log("Personajes con nivel mayor a 3: ", personajesFuertes);

// Ejercicio 20

const nombres = personajes.map((personaje) => {
    return personaje.nombre;
});

console.log(nombres);

// Ejercicio 21

const personajeEncontrado = personajes.find((personaje) => {
    return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

// Ejercicio 22

const vidaTotal = personajes.reduce((acumulador, personaje) => {
    return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

// Ejercicio 23

mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

// Ejercicio 24

let puntos = 0;

btn.addEventListener("click", function () {
    puntos += 10;
    mensaje.textContent = "Puntos: " + puntos;
});

// Ejercicio 25

btn.addEventListener("click", function () {
    let nombre = input.value;
    if (nombre === "") {
        mensaje.textContent = "Ingresá un nombre para continuar";
    }
    else {
        mensaje4.textContent = "Bienvenido/a " + nombre + ".";
    }
});

// Ejercicio 26

localStorage.setItem("jugador", JSON.stringify(jugador3));

const jugadorRecuperado = JSON.parse(localStorage.getItem("jugador"));

console.log(jugadorRecuperado);
