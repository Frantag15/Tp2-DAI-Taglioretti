import {
  getCurrency,
  getCountry,
  getCountryByAbbreviation,
} from "currency-map-country";

function obtenerMoneda(codigoPais) {
  try {
    const moneda = getCountry(getCountryByAbbreviation(codigoPais));
    return moneda ? moneda.cur : null;
  } catch (error) {
    console.error(
      `Error al obtener la moneda para ${codigoPais}: ${error.message}`
    );
    return null;
  }
}

let codigoPais = "AR";
console.log(
  `La moneda del país ${codigoPais} es: ${obtenerMoneda(codigoPais)}`
);

codigoPais = "UZA";
console.log(
  `La moneda del país ${codigoPais} es: ${obtenerMoneda(codigoPais)}`
);
