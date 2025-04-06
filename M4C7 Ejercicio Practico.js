/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!
*/

function calcularYvalorar() {
    let suma1 = 8 + 10;  
    let suma2 = 9 + 9;  
    
    let result = suma1 * suma2; 
    
    if (result > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  }
