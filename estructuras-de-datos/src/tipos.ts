let cantidad: number = Number(prompt("Ingrese la cantidad de números: "));
let v: number[] = new Array(cantidad);
let indice: number;
for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt("Ingrese un número para la pocición " + indice));
}

let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;

for (indice = 0; indice < cantidad; indice++) {
  if (v[indice] === 0) {
    numCero++;
  } else if (v[indice] > 0) {
    numPos++;
  } else {
    numNeg++;
  }
}

console.log(
  "Hay " +
    numPos +
    " positivo/s, " +
    numNeg +
    " negtivo/s y " +
    numCero +
    " cero/s."
);
