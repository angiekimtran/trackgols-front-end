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
import EditIcon from '@mui/icons-material/Edit'

const UpdateForm = ({ message, onSubmitUpdate }) => {
    const [updatedMessage, setUpdatedMessage] = useState(message)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setUpdatedMessage(message)
        setOpen(false)
    }

    const handleSubmit = () => {
        onSubmitUpdate(updatedMessage)
        handleClose()
    }
    return (
        <div>
            <Button
                sx={{
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    minHeight: 30,
                }}
                onClick={handleClickOpen}
                >
                <EditIcon fontSize="small" />
            </Button>
            <Dialog open={open}>
                <DialogTitle>Edit Card</DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Message"
                        type="string"
                        multiline
                        maxRows={4}
                        fullWidth
                        variant="standard"
                        value={updatedMessage}
                        onChange={(e) => setUpdatedMessage(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateForm