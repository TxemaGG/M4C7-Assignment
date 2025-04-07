/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!
*/

function calcularYvalorar(a, b, c, d) {
    let suma1 = a + b;  
    let suma2 = c + d;  
    
    let result = suma1 * suma2; 
    
    if (result > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

calcularYvalorar(8, 10, 9, 9);
