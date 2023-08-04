import React from 'react'
import { useState, useEffect } from 'react'

import Card from '../card/card'
import { getCards } from '../../api/cards'
// import { getColumn } from '../api/columns'

const Column = ({ id, title, fetchColumns}) => {
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
    console.log(cards)
    return (
        <section className="column">
            <h2 className="column-title">{title}</h2>
            <section className="card-list">
                <ul>
                    {cards &&
                        cards.map((card) => (
                            <Card
                                key={card._id}
                                id={card._id}
                                message={card.message}
                                fetchCards={fetchCards}
                            />
                        ))}
                </ul>
            </section>
        </section>
    )
}

export default Column
