import React from 'react'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Grid } from '@mui/material'
import { getBoard } from '../../api/boards'
import { getColumns } from '../../api/columns'
import Column from '../column/column'
import DropWrapper from '../dragDrop/wrapper'
import { getCards } from '../../api/cards'

const Board = () => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])
    const [cards, setCards] = useState([])
    const [data, setData] = useState([])
    const [dragEl, setDragEl] = useState(null)

    const onDrop =(card) => {
        // setCards((prevState) => {
        //     prevState  
        //         .filter((i)=> i._id !== card._id)
        //         .concat(...card)
        // })
    }

    const moveCard = (id) => {
        setData((prev) => {
            const modifiedColumns = prev.map((column)=>({...column, cards: column.cards.reduce((acc, card)=>{
                if (card._id.toString() === dragEl._id.toString()) return acc
                if (card._id.toString() === id.toString()) return [...acc, card, dragEl]
                return [...acc, card]
            }, [])}))

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

    useEffect(() => {
        if (!isEmpty(columns)) {
            const fetchCards = async () => (await Promise.allSettled(columns.map((column) => getCards(column._id) )))
                .reduce((acc, curr)=> curr.status === "fulfilled"? [...acc, ...curr.value]: acc, [])
            fetchCards().then((c)=>setCards(c))
        }
    }, [columns])

    useEffect(() => {
        if (!isEmpty(cards)) {
            const d = columns.map((column)=>({...column, cards: column.cards.map((card)=>cards.find((c)=>c._id.toString() === card._id.toString()))}))
            setData(d)
        }
    }, [cards])

    return (
        <div>
            {/* <h2>{board?.title}</h2> */}
            <div>
                <Grid container columnSpacing={4}>
                    {data.map((column) => (
                            <DropWrapper onDrop={onDrop}>
                                <Grid item key={column._id}>                               
                                        <Column 
                                            id={column._id}
                                            boardID={board._id}
                                            title={column.title}
                                            cards={column.cards}
                                            dragEl={dragEl}
                                            setDragElement={setDragElement}
                                            moveCard={moveCard}
                                            fetchColumns={fetchColumns}
                                        />
                                </Grid>
                            </DropWrapper>
                        ))}
                </Grid>
            </div>
        </div>
    )
}

export default Board
