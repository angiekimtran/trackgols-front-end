import React from 'react'
import { useState, useEffect } from 'react'
import { Card as MuiCard, CardContent } from '@mui/material'

import Card from '../card/card'
import { getCards } from '../../api/cards'

const Column = ({ id, title }) => {
    const [cards, setCards] = useState([])

    const fetchCards = (id) => {
        getCards(id).then((data) => {
            setCards(data)
        })
    }

    useEffect(() => {
        if (id) {
            fetchCards(id)
        }
    }, [id])

    return (
        <MuiCard sx={{ width: 250 }}>
            <CardContent>
                <div>
                    <h2>{title}</h2>
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            id={card._id}
                            message={card.message}
                            fetchCards={fetchCards}
                        />
                    ))}
                </div>
            </CardContent>
        </MuiCard>
    )
}

export default Column
