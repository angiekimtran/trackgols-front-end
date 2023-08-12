import React from 'react'
import { Card as MuiCard, CardContent, CardActions } from '@mui/material'
import Card from '../card/card'
import AddForm from '../card/addForm'
import { createCard } from '../../api/cards'
import { updateColumn } from '../../api/columns'
import TitleForm from './titleForm'
import DropWrapper from '../dragDrop/wrapper'

const Column = ({
    id,
    boardID,
    fetchColumns,
    fetchBoard,
    title,
    cards,
    dragEl,
    setDragElement,
    moveCard,
    onDrop,
}) => {
    const onUpdateColumn = (updatedTitle) => {
        updateColumn({ title: updatedTitle }, id).then(() => {
            fetchColumns(boardID)
        })
    }

    const onSubmitCard = (message) => {
        createCard({ message }, id).then(() => {
            fetchColumns(boardID)
        })
    }

    return (
        <MuiCard sx={{ width: 300, background: '#eeeeee' }}>
            <CardContent>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 50,
                        color: '#002884',
                    }}
                >
                    <h2>{title}</h2>
                    <TitleForm
                        title={title}
                        onUpdateColumn={onUpdateColumn}
                        columnID={id}
                        fetchBoard={fetchBoard}
                    />
                </div>
                <DropWrapper onDrop={onDrop}>
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
                </DropWrapper>
                <CardActions>
                    <AddForm onSubmitCard={onSubmitCard} />
                </CardActions>
            </CardContent>
        </MuiCard>
    )
}

export default Column
