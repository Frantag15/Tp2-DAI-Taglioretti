import { URL } from 'url';

function parsearUrl(laURL) {
    const urlObjeto = new URL(laURL);

    return {
        host: `${urlObjeto.protocol}//${urlObjeto.host}`,
        pathname: urlObjeto.pathname,
        parametros: Object.fromEntries(urlObjeto.searchParams)
    };
}

let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2025&mes=marzo';
let miObjeto = parsearUrl(miUrl);

console.log(miObjeto);
