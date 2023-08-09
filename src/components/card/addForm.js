import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@mui/material'

const AddForm = ({ onSubmitCard }) => {
    const [message, setMessage] = useState()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setMessage()
        setOpen(false)
    }

    const handleSubmit = () => {
        onSubmitCard(message)
        handleClose()
    }
    return (
        <div>
            <Button
                variant="outlined"
                sx={{ width: 200 }}
                onClick={handleClickOpen}
            >
                Add Card
            </Button>
            <Dialog open={open}>
                <DialogTitle>Add Card</DialogTitle>
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddForm
