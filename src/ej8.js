import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './src/modules/omdb-wrapper.js';

console.clear();

(async () => {
    console.log("🔎 Buscando 'cars' en la primera página...");
    let resultado = await OMDBSearchByPage("cars", 1);
    console.log(resultado);

    console.log("📋 Buscando todas las películas que coincidan con 'batman'...");
    resultado = await OMDBSearchComplete("batman");
    console.log(resultado);

    console.log("🎬 Buscando película con IMDb ID 'tt4154796' (Avengers: Endgame)...");
    resultado = await OMDBGetByImdbID("tt4154796");
    console.log(resultado);
})();
