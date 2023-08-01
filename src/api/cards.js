import axios from "axios";

export const getCards = async (id) => {
    return axios
        .get(`http://localhost:3001/columns/${id}/cards`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const createCard = async (newCard, id) => {
    return axios
        .post(`http://localhost:3001/columns/${id}/cards`, newCard)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const getCard = async (id) => {
    return axios
        .get(`http://localhost:3001/cards/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const updateCard = async (message, id) => {
    return axios
        .put(`http://localhost:3001/cards/${id}`, { message: message })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const deleteCard = async (id) => {
    return axios
        .delete(`http://localhost:3001/cards/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
};