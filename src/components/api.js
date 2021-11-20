import React from "react";
const URL = 'https://react-http-9b6a3-default-rtdb.europe-west1.firebasedatabase.app/movies.json';

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
};

const toJSON = async (response) => {
    return await response.json();
};

export const createMovie = (data) => {
    return load({
        url: URL,
        method: "POST",
        body: JSON.stringify(data),
    })
};

export const getMovies = () => {
    return load({ url: URL})
};

export const deleteMovies = () => {
    return load({ url: URL})
};

const load = ({url, method = "GET", body = null}) => {
    const HEADERS = new Headers({'Content-Type': `application/json`});
    return fetch(url, {method, body, HEADERS})
        .then(checkStatus)
        .then(toJSON)
};
