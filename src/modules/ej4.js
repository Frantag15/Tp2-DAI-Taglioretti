import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error al leer el archivo: ${err.message}`);
            return;
        }
        fs.writeFile(destino, data, (err) => {
            if (err) {
                console.error(`Error al escribir el archivo: ${err.message}`);
            } else {
                console.log(`Archivo copiado exitosamente de "${origen}" a "${destino}"`);
            }
        });
    });
}