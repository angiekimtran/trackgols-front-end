import React, { Fragment, useState } from 'react'
import { Card as MuiCard, CardContent } from '@mui/material'
import { deleteCard, updateCard } from '../../api/cards'
import DeleteAlert from './deleteAlert'
import UpdateForm from './updateForm'

const Card = ({
    id,
    boardID,
    message,
    setDragElement,
    moveCard,
    fetchColumns,
}) => {
    const [hover, sethover] = useState(false)

    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData('card', { _id: id, message })
        setDragElement({ _id: id, message })
        setTimeout(() => {
            target.style.visibility = 'hidden'
        }, 1)
    }

    const onDragOver = (e) => {
        moveCard({ cardID: id })
        e.preventDefault()
    }

    const onDragEnd = ({ target }) => {
        fetchColumns(boardID)
        target.style.visibility = null
    }

    const onMouseEnter = () => {
        sethover(true)
    }

    const onMouseLeave = () => {
        sethover(false)
    }

    const onSubmitDelete = () => {
        deleteCard(id).then(() => {
            fetchColumns(boardID)
        })
    }

    const onSubmitUpdate = (updatedMsg) => {
        updateCard(updatedMsg, id).then(() => {
            fetchColumns(boardID)
        })
    }

    return (
        <Fragment>
            <div
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ margin: '8px 0px' }}
            >
                <MuiCard>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <div
                            style={{
                                display: hover ? 'flex' : 'none',
                                position: 'absolute',
                                background: 'white',
                                margin: 8,
                                borderRadius: 8,
                                outline: '1px lightgray solid',
                            }}
                        >
                            <UpdateForm
                                onSubmitUpdate={onSubmitUpdate}
                                message={message}
                            />
                            <DeleteAlert onSubmitDelete={onSubmitDelete} />
                        </div>
                    </div>
                    <CardContent
                        sx={{ background: hover ? '#fafafa' : 'auto' }}
                    >
                        <div>{message}</div>
                    </CardContent>
                </MuiCard>
            </div>
        </Fragment>
    )
}

export default Card
