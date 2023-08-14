import React, { useState } from 'react'
import {trim} from 'lodash'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@mui/material'

const AddForm = ({ onSubmitCard, columnID, moveCard }) => {
    const [message, setMessage] = useState()
    const [open, setOpen] = useState(false)

    const onDragOver = (e) => {
        moveCard({ columnID })
        e.preventDefault()
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setMessage()
        setOpen(false)
    }

    const handleSubmit = () => {
        onSubmitCard(trim(message))
        handleClose()
    }
    return (
        <div onDragOver={onDragOver}>
            <Button
                variant="outlined"
                sx={{ width: 268, color: '#002884', marginLeft: -1 }}
                onClick={handleClickOpen}
            >
                + Add Task
            </Button>
            <Dialog open={open}>
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <DialogContentText>Enter a message.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Message"
                        type="string"
                        multiline
                        maxRows={4}
                        fullWidth
                        variant="standard"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={trim(message).length > 200}
                        helperText="Message must contain 1-200 characters."
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} disabled={ trim(message).length < 1 || trim(message).length > 200}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddForm
