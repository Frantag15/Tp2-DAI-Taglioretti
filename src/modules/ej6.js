import { URL } from 'url';

function parsearUrl(laURL) {
    try {
        const urlObjeto = new URL(laURL);

        return {
            host: `${urlObjeto.protocol}//${urlObjeto.host}`,
            pathname: urlObjeto.pathname,
            parametros: Object.fromEntries(urlObjeto.searchParams)
        };
    } catch (error) {
        console.error(`Error al parsear la URL: ${error.message}`);
        return { host: null, pathname: null, parametros: {} };
    }
}

let urlValida = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2025&mes=marzo';
let urlInvalida = 'htp:/malformada//url';

console.log(parsearUrl(urlValida));
console.log(parsearUrl(urlInvalida));
