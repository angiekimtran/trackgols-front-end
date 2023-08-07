import React from 'react'
import {Card as MuiCard, CardContent} from '@mui/material'
import Card from '../card/card'

const Column = ({ id, title, cards, dragEl, setDragElement, moveCard }) => {
    return (
        <MuiCard sx={{width: 250}}>
            <CardContent>
                <div>
                    <h2>{title}</h2>
                    {cards && cards.map((card) => (
                            <Card
                                key={card._id}
                                id={card._id}
                                message={card.message}
                                setDragElement={setDragElement}
                                moveCard={moveCard}
                            />
                        ))}
                </div>
            </CardContent>
        </MuiCard>
    )
}

export default Column
