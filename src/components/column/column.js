import React from 'react'
import { Card as MuiCard, CardContent, CardActions } from '@mui/material'
import Card from '../card/card'
import CardForm from '../card/cardForm'
import { createCard } from '../../api/cards'

const Column = ({
    id,
    boardID,
    fetchColumns,
    title,
    cards,
    dragEl,
    setDragElement,
    moveCard,
}) => {
    const submitForm = (message) => {
        createCard({ message }, id).then(() => {
            fetchColumns(boardID)
        })
    }

    return (
        <MuiCard sx={{ width: 250, background: '#ededed' }}>
            <CardContent>
                <div>
                    <h2>{title}</h2>
                    {cards &&
                        cards.map((card) => (
                            <Card
                                key={card._id}
                                id={card._id}
                                boardID={boardID}
                                message={card.message}
                                setDragElement={setDragElement}
                                moveCard={moveCard}
                                fetchColumns={fetchColumns}
                            />
                        ))}
                </div>
                <CardActions>
                    <CardForm submitForm={submitForm} />
                </CardActions>
            </CardContent>
        </MuiCard>
    )
}

export default Column
