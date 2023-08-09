import React, { useState } from 'react'
import { deleteColumn } from '../../api/columns'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteColAlert from './deleteColAlert'

const TitleForm = ({ title, columnID, onUpdateColumn, fetchBoard }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setUpdatedTitle(title)
        setOpen(false)
    }

    const handleSubmit = () => {
        onUpdateColumn(updatedTitle)
        handleClose()
    }

    const onDeleteColumn = () => {
        deleteColumn(columnID).then(() => {
            fetchBoard()
        })
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <MoreHorizIcon />
            </Button>
            <Dialog open={open}>
                <DialogTitle> Edit Column</DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <DialogContentText>
                        Enter a title for your column.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="string"
                        multiline
                        maxRows={4}
                        fullWidth
                        variant="standard"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <DeleteColAlert onDeleteColumn={onDeleteColumn} />
                    <div>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Save</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TitleForm
