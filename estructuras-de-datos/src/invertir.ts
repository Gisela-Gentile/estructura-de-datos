let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));
let arregloNumeros: number[] = new Array(cantidad);
let indice1: number;
let mostrar: string = "";

for (indice1 = 0; indice1 < cantidad; indice1++) {
  arregloNumeros[indice1] = Number(
    prompt("Ingrese un número para la posición " + indice1)
  );
  mostrar += arregloNumeros[indice1] + " ";
}

let cadena: string = "";
for (indice1 = cantidad - 1; indice1 >= 0; indice1--) {
  cadena += arregloNumeros[indice1] + " ";
}
console.log("El arreglo es: " + mostrar);

console.log("El arreglo invertido es: " + cadena);
