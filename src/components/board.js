import React from 'react'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { getBoard } from '../api/boards'
import {getColumns} from '../api/columns'
import Column from './column'

const Board = () => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    const fetchBoard = () => {
        getBoard().then((data) => {
            setBoard(data)
        })
    }

    const fetchColumns = (id) => {
        getColumns(id).then((data) => {
            setColumns(data)
        })
    }

    useEffect(() => {
        if (isEmpty(board)) {
            fetchBoard()
        }
    })

    useEffect(() => {
        if (!isEmpty(board) && board?._id) {
            fetchColumns(board._id)
        }
    }, [board])

    return (
        <section>
            <div>{board?.title}</div>
            <div>
                <ul>
                    {columns && columns.map((column) => 
                        <Column
                        key={column._id}
                        id={column._id}
                        title={column.title}
                        fetchColumns={fetchColumns}
                        />
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Board
