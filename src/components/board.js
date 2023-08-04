import React from 'react'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { getBoard } from '../api/boards'

const Board = () => {
    const [board, setBoard] = useState({})
    const fetchBoard = () => {
        getBoard().then((data) => {
            setBoard(data)
        })
    }

    useEffect(() => {
        if (isEmpty(board)) {
            fetchBoard()
        }
    })

    return <div>{board?.title}</div>
}

export default Board
