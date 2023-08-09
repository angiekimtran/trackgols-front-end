import axios from 'axios'

export const getColumns = async (id) => {
    return axios
        .get(`http://localhost:3001/boards/${id}/columns`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

export const createColumn = async (newColumn, id) => {
    return axios
        .post(`http://localhost:3001/boards/${id}/columns`, newColumn)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

export const getColumn = async (id) => {
    return axios
        .get(`http://localhost:3001/columns/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

export const updateColumn = async (update, id) => {
    return axios
        .put(`http://localhost:3001/columns/${id}`, update)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

export const deleteColumn = async (id) => {
    return axios
        .delete(`http://localhost:3001/columns/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}
