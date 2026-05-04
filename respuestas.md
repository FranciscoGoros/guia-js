// Ejercicio 27

"Let" es utilizado para declarar variables cuyo alcance es de bloque.
Estas mismas no pueden utilizarse sin ser declaradas anteriormente dentro del código. Al
mismo tiempo, estas no tienen la función de ser re-declaradas más adelante en el código
con otros tipos de datos.


Ej:

    let y = "10";

    ---> Más adelante

    let y = "Perro";

Let no habilita a este tipo de lógica. Adicionalmente, utilizando este tipo de dato tampoco podremos re-declarar la variable dentro de un mismo bloque a menos de que utilicemos la siguiente sintaxis:

Ej: 

    var x = 10
    let y = 5

    {
        let x = 10 // Permitido debido a que el tipo de dato anterior era <var>
        let y = 4 // Denegado debido a que el tipo de dato anterior era <let>

        y = 4 // Permitido debido a que no estamos volviendo a re-declarar a y con "let" al inicio
    }

// 

"Var" permite declarar variables que sí pueden ser re-declaradas o editadas dentro del código de forma global.


Ej:
    var x = "Abeja";

    --->

    var x = "400";

A diferencia de Let, estas variables si pueden ser re-declaradas en bloques y fuera de los mismos.

Ej: 
    var x = 10
{
        var x = 20 // Permitido debido a que el tipo de dato anterior era <var>
}

En Javascript, var está hoisteada. Esto significa que se inicializa de forma estándar al inicio del código y cualquier cambio posterior en el código edita a este directamente.

//
Const es utilizado para definir aquellos tipos de datos que no requieran volver a cambiar su valor. Como su nomnbre lo dice, es "constante". 


Ej:
{
    const gravedad = 9.8 // No podrá ser cambiada de valor más adelante en el código.
}

Al igual que Let, Const no está hoisteada. 

//

Se utilizaría Let para la declaración de variables generales que no requieran reformulación de código (Ej: cambiar el tipo de dato de numérico a string) más tarde en el mismo.

Const sería utilizado para aquellas variables que sepamos con seguridad que no necesitan ser cambiadas de valor o tipo en el sistema a largo plazo. Esto ayuda a guardar espacio en la memoria y evitar cambios que potencialmente podrían perjudicar la integridad o funcionamiento del programa. Es la forma más común de declarar datos.

Var es un tipo de dato que puede ocasionar bugs debido a que su scope es global y no funciona por bloques como lo hace Let y Const. Es
por eso que puede ser sobre-escrita en cualquier momento del código erróneamente y se recomienda usar cualquiera de los ejemplos anteriores antes que este para evitar problemas.





// Ejercicio 28

El "Scope" se define como el rango en el código donde una variable
cumple su función o a las cuales tendremos acceso.

Las variables locales pertenecen a funciones o bloques y solo
se pueden ejecutar o llamar dentro de los mismos.

Las variables globales pueden ser declaradas al inicio de un código
y ser llamadas más adelante sin necesidad de bloques.


let nombre = "Global";

function mostrarNombre() {
 let nombre = "Local";
 console.log(nombre);
}

mostrarNombre();
console.log(nombre);

> Primero se muestra la variable con scope local, en este caso, la función mostrarNombre(). Esto ocurre debido a que Javascript ejecuta el código de arriba hacia abajo de forma secuencial.

> Después, se muestra la variable con scope global, la que está siendo llamada por el console.log(nombre)





// Ejercicio 29

Un array se puede definir como una lista de datos accesible cuya función es almacenarlos de forma ordenada con un index predefinido y que puede ser recorrido por código.

Un objeto es una estructura la cual se encarga de almacenar múltiples 
variables con propiedades y encapsularlas dentro de un único bloque
de código accesible para poder cambiar dichas propiedades dinámicamente para otras finalidades.

//


Por ejemplo, tomemos de ejemplo al videojuego The Binding of Isaac:

const inventario = ["Trinket", "Brimstone", "D6"];

const personaje = {
 nombre: "Isaac",
 vida: 100,
 velocidad: 10
};

Isaac, el protagonista, puede recoger "items" u objetos por el mapa y almacenarlos dentro de un inventario (en este caso, representado por el array), el cual se puede actualizar dependiendo si este recoge más objetos o los tira.


A su vez, Isaac tiene estadísticas, como vida y velocidad. Pero estas estadísiticas también se comparten en otros personajes jugables. Entonces, si hacemos un objeto llamado <personajes> y colocamos estas variables básicas de funcionamiento, podemos replicarlas a los demás sin tener que crear sus propias variables por separado.

{
    Personaje.nombre = "Cain"
    Personaje.vida = 70
    Personaje.velocidad = 15
}


{
    Personaje.nombre = "Azazel"
    Personaje.vida = 100
    Personaje.velocidad = 15
}

// Ejercicio 30

Un evento se puede definir como una notificación o señal de 
valores que se envía desde un emisor a un receptor dentro de una estructura de código.
En este caso, el usuario es quien envía esos valores y es javascript
quien ejecuta la función correspondiente a dicha notificación.

//
boton.addEventListener("click", function () {
 console.log("El usuario hizo clic");
});
//

> Este evento escucha a un elemento llamado BOTÓN. 
> El elemento escucha al evento "CLICK" 
> Al usuario hacer click en el botón, la consola muestra el mensaje "El usuario hizo click"
> Con este tipo de sistemas, podemos implementar interfaces interactivas, menués de opciones y acciones especiales relacionadas con
inputs dentro de un videojuego. Por ejemplo, cuando queremos pasar
del menú de opciones hacia la pantalla de juego. 

Dentro de una aplicación web, es lo que se utiliza para enviar información básica que envía el usuario a través de botones en pantalla. Por ejemplo, cuando quiere cambiar de pestaña.

