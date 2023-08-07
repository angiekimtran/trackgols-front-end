import React, { Fragment } from 'react'
import { Card as MuiCard, CardContent } from '@mui/material'
// import { deleteCard, updateCard } from '../api/cards'

const Card = ({ id, message, setDragElement, moveCard }) => {
    
    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData('card', {_id: id, message})
        setDragElement({_id: id, message})
        setTimeout(() => {
            target.style.visibility = 'hidden'
        }, 1)
    }

    const onDragOver = (e) => {
        moveCard(id)
        e.preventDefault()
    }

    const onDragEnd = (e) => {
        e.target.style.visibility = 'hidden'
    }
    return (
        <Fragment>
            <div
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
            >
                <MuiCard>
                    <CardContent>
                        <div>{message}</div>
                    </CardContent>
                </MuiCard>
            </div>
        </Fragment>
    )
}

export default Card
