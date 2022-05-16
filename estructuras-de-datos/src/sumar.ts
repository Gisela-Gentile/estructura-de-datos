let vector1: number[] = new Array(6);
let vector2: number[] = new Array(6);
let vectorSuma: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  vector1[indice] = Number(
    prompt("Ingrese el valor de vector1[" + indice + "]")
  );
}

for (indice = 0; indice < 6; indice++) {
  vector2[indice] = Number(
    prompt("Ingrese el valor de vector2[" + indice + "]")
  );
}

for (indice = 0; indice < 6; indice++) {
  vectorSuma[indice] = vector1[indice] + vector2[indice];
  console.log("vectorSuma[" + indice + "]= " + vectorSuma[indice]);
}
