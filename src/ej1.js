let textoEntrada1 = "Escuela", textoEntrada2 = "ORT";
let textoSalida = "";

textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();
console.log(`Textos de Entrada: "${textoEntrada1}" y "${textoEntrada2}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert(texto1, texto2) {
    let concatenado = texto2 + texto1;
    let invertido = concatenado.split("").reverse().join(""); 
    return invertido;
}
