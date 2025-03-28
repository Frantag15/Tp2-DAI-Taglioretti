import { getCurrency } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    try {
        const moneda = getCurrency(codigoPais);
        return moneda ? moneda.code : null;
    } catch (error) {
        console.error(`Error al obtener la moneda para ${codigoPais}: ${error.message}`);
        return null;
    }
}

let codigoPais = 'AR';
console.log(`La moneda del país ${codigoPais} es: ${obtenerMoneda(codigoPais)}`);

codigoPais = 'UZA';
console.log(`La moneda del país ${codigoPais} es: ${obtenerMoneda(codigoPais)}`);
