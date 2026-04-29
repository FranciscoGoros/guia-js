// Ejercicio 27

"Let" es utilizado para declarar variables cuyo alcance es de bloque.
Estas mismas no pueden utilizarse sin ser declaradas anteriormente dentro del código. Al
mismo tiempo, estas no tienen la función de ser re-declaradas más adelante en el código
con otros tipos de datos.


Ej:

    let y = "10";

    ---> Más adelante

    let y = "Perro";

Let no habilita a este tipo de lógica. Adicionalmente, utilizando este tipo de dato tampoco
podremos re-declarar la variable dentro de un mismo bloque. 

Ej: 

    var x = 10
    let y = 5

    {
        let x = 10 // Permitido debido a que el tipo de dato anterior era <var>
        let y = 4 // Denegado debido a que el tipo de dato anterior era <let>
    }


// 
"Var" permite declarar variables que sí pueden ser re-declaradas dentro del código. Además, se puede utilizar sin haber sido declarada en una primera instancia. Este tipo de dato puede ser re-declarado más adelante.


Ej:
    var x = "Abeja";

    --->

    var x = "400";

A diferencia de Let, estas variables si pueden ser re-declaradas en bloques. 

Ej: 

{
    var x = 10

        var x = 20 // Permitido debido a que el tipo de dato anterior era <var>
}

En Javascript, var está hoisteada. Esto significa que la constante se inicializa de forma estándar al inicio del código sin importar su ubicación.

Const es utilizado para definir aquellos tipos de datos que no requieran volver a cambiar su valor. Como su nomnbre lo dice, es "constante". 


Ej:
{
    const gravedad = 9.8 // No podrá ser cambiada de valor más adelante en el código.
}

Al igual que Let, Const no está hoisteada. 

//

Se utilizaría Let para la declaración de variables generales que no requieran reformulación de código (Ej: cambiar el tipo de dato de numérico a string) más tarde
en el código. C

Const sería utilizado para aquellas variables que sepamos con seguridad que no necesitan
ser cambiadas de valor o tipo en el sistema. Esto ayuda a guardar espacio en la memoria
y evitar cambios que potencialmente podrían perjudicar la integridad o funcionamiento
del programa.

Var es un tipo de dato que no tiene soporte en el scope de bloques de Javascript al día de hoy, a diferencia de Let y Const. Estas últimas siendo una versión actualizada de sus funciones anteriores y por eso es recomendable no utilizarla.

// Ejercicio 28

