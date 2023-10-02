import axios from 'axios'

export const getBoard = async (id) => {
    return axios
        .get(`http://localhost:3001/boards/${id}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

export const updateBoard = async (title, id) => {
    return axios
        .put(`http://localhost:3001/boards/${id}`, { title: title })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}
