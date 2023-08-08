import React from 'react'
import { Card as MuiCard, CardContent, CardActions } from '@mui/material'
import Card from '../card/card'
import AddForm from '../card/addForm'
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
    const onSubmitCard = (message) => {
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
                    <AddForm onSubmitCard={onSubmitCard} />
                </CardActions>
            </CardContent>
        </MuiCard>
    )
}

export default Column
