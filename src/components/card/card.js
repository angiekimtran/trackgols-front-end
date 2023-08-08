import React, { Fragment } from 'react'
import { Card as MuiCard, CardContent, Button } from '@mui/material'
import { deleteCard} from '../../api/cards'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const Card = ({ id, boardID, message, setDragElement, moveCard, fetchColumns }) => {
    
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

    const onDelete = (id) => {
        deleteCard(id).then(() => {
            fetchColumns(boardID)
        });
    };
    return (
        <Fragment>
            <div
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
                style={{margin: "8px 0px"}}
            >
                <MuiCard>
                    <CardContent sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>{message}</div>
                        <div>
                            <Button sx={{width: 30, height: 30, minWidth: 30, minHeight: 30}}><EditIcon fontSize='small'/></Button>
                            <Button sx={{width: 30, height: 30, minWidth: 30, minHeight: 30}} onClick={onDelete}><DeleteForeverIcon fontSize='small'/></Button>
                        </div>
                    </CardContent>
                </MuiCard>
            </div>
        </Fragment>
    )
}

export default Card
