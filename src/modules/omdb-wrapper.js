import axios from "axios";

const APIKEY = "b25cd205";

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    try {
        const response = await axios.get(`https://www.omdbapi.com/`, {
            params: {
                apikey: APIKEY,
                s: searchText,
                page: page
            }
        });

        if (response.data.Response === "True") {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = parseInt(response.data.totalResults);
            returnObject.datos = response.data.Search || [];
        }
    } catch (error) {
        console.error(`Error en OMDBSearchByPage: ${error.message}`);
    }

    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    let page = 1;
    let totalResults = [];

    try {
        while (true) {
            const response = await axios.get(`https://www.omdbapi.com/`, {
                params: {
                    apikey: APIKEY,
                    s: searchText,
                    page: page
                }
            });

            if (response.data.Response !== "True") break;

            totalResults = [...totalResults, ...response.data.Search];
            page++;

            if (totalResults.length >= parseInt(response.data.totalResults)) break;
        }

        returnObject.respuesta = true;
        returnObject.cantidadTotal = totalResults.length;
        returnObject.datos = totalResults;
    } catch (error) {
        console.error(`Error en OMDBSearchComplete: ${error.message}`);
    }

    return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    try {
        const response = await axios.get(`https://www.omdbapi.com/`, {
            params: {
                apikey: APIKEY,
                i: imdbID
            }
        });

        if (response.data.Response === "True") {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = 1;
            returnObject.datos = response.data;
        }
    } catch (error) {
        console.error(`Error en OMDBGetByImdbID: ${error.message}`);
    }

    return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
