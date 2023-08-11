import React, { Fragment } from 'react'
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
    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData('card', { _id: id, message })
        setDragElement({ _id: id, message })
        setTimeout(() => {
            target.style.visibility = 'hidden'
        }, 1)
    }

    const onDragOver = (e) => {
        moveCard(id)
        e.preventDefault()
    }

    const onDragEnd = ({ dataTransfer, target }) => {
        fetchColumns(boardID)
        target.style.visibility = null
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
                style={{ margin: '8px 0px' }}
            >
                <MuiCard>
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div>{message}</div>
                        <div>
                            <UpdateForm
                                onSubmitUpdate={onSubmitUpdate}
                                message={message}
                            />
                            <DeleteAlert onSubmitDelete={onSubmitDelete} />
                        </div>
                    </CardContent>
                </MuiCard>
            </div>
        </Fragment>
    )
}

export default Card
