import React from 'react'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Grid } from '@mui/material'
import { getBoard } from '../../api/boards'
import { getColumns, createColumn, updateColumn } from '../../api/columns'
import Column from '../column/column'
import DropWrapper from '../dragDrop/wrapper'
import { getCards } from '../../api/cards'
import AddColForm from '../column/addColForm'
import { updateBoard } from '../../api/boards'
import UpdateBoardTitle from '../board/updateForm'

const Board = ({ getBoardData }) => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])
    const [cards, setCards] = useState([])
    const [data, setData] = useState([])
    const [dragEl, setDragEl] = useState(null)

    const onDrop = () => {
        const updates = data.filter((modified, i) => modified.cards.length !== columns[i].cards.length)
        Promise.allSettled(
                updates.map((column) => {
                    const updatedCards = column.cards.map((card)=> ({_id: card._id}))
                    debugger
                    return updateColumn({cards: updatedCards}, column._id)               
                })
            ).then(()=>fetchColumns(board._id))
    }

    const moveCard = (id) => {
        setData((prev) => {
            const modifiedColumns = prev.map((column) => ({
                ...column,
                cards: column.cards.reduce((acc, card) => {
                    if (card._id.toString() === dragEl._id.toString())
                        return acc
                    if (card._id.toString() === id.toString())
                        return [...acc, card, dragEl]
                    return [...acc, card]
                }, []),
            }))

            return modifiedColumns
            // const cardIndex = cards.findIndex((i)=> i.message === dragEl.message)
            // const hoverIndex = cards.findIndex((i)=> i.message === card)
            // const newState = [...cards]

            // newState.splice(cardIndex, 1)
            // newState.splice(hoverIndex, 0, dragEl)
            // return [...newState]
        })
    }

    const setDragElement = (el) => setDragEl(el)

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

    const onSubmitColumn = (title) => {
        createColumn({ title }, board._id).then(() => {
            fetchBoard()
        })
    }

    const onUpdateBoardTitle = (updatedTitle) => {
        updateBoard(updatedTitle, board._id).then(() => {
            fetchBoard()
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
            getBoardData(board.title)
        }
    }, [board])

    useEffect(() => {
        if (!isEmpty(columns)) {
            const fetchCards = async () =>
                (
                    await Promise.allSettled(
                        columns.map((column) => getCards(column._id))
                    )
                ).reduce(
                    (acc, curr) =>
                        curr.status === 'fulfilled'
                            ? [...acc, ...curr.value]
                            : acc,
                    []
                )
            fetchCards().then((c) => setCards(c))
        }
    }, [columns])

    useEffect(() => {
        if (!isEmpty(cards)) {
            const d = columns.map((column) => ({
                ...column,
                cards: column.cards.map((card) =>
                    cards.find((c) => c._id.toString() === card._id.toString())
                ),
            }))
            setData(d)
        }
    }, [cards])

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    zIndex: 1500,
                    margin: 10,
                }}
            >
                <UpdateBoardTitle
                    onUpdateBoardTitle={onUpdateBoardTitle}
                    title={board.title}
                />
            </div>
            <Grid container columnSpacing={5} wrap="nowrap">
                {data.map((column) => (
                    <Grid item key={column._id}>
                        <DropWrapper onDrop={onDrop}>
                            <Column
                                id={column._id}
                                boardID={board._id}
                                title={column.title}
                                cards={column.cards}
                                dragEl={dragEl}
                                setDragElement={setDragElement}
                                moveCard={moveCard}
                                fetchBoard={fetchBoard}
                                fetchColumns={fetchColumns}
                            />
                        </DropWrapper>
                    </Grid>
                ))}
                <Grid item>
                    <AddColForm onSubmitColumn={onSubmitColumn} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Board
