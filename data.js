 
 const personajes = [
 {
   id: 1,
  nombre: "Luna",
   tipo: "maga",
   vida: 100,
   energia: 80,
   nivel: 3
 },
 {
   id: 2,
   nombre: "Kai",
   tipo: "guerrero",
   vida: 120,
   energia: 60,
   nivel: 4
 },
 {
   id: 3,
   nombre: "Nina",
   tipo: "arquera",
   vida: 90,
   energia: 100,
   nivel: 2

   
 }
];

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

const jugador3 = {
 nombre: "Luna",
 puntaje: 1500
};

const boton = document.getElementById("btn");

const input = document.getElementById("dato");
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const inventarioBase = ["espada", "poción", "escudo", "llave"];