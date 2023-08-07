import React from 'react'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Grid } from '@mui/material'
import { getBoard } from '../../api/boards'
import { getColumns } from '../../api/columns'
import Column from '../column/column'

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
        <div>
            <h2>{board?.title}</h2>
            <div>
                <Grid container spacing={4}>
                    {columns &&
                        columns.map((column) => (
                            <Grid item key={column._id}>
                                <Column
                                    id={column._id}
                                    title={column.title}
                                    fetchColumns={fetchColumns}
                                />
                            </Grid>
                        ))}
                </Grid>
            </div>
        </div>
    )
}

export default Board
