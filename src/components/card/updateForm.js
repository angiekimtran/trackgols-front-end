import React, { useState, useEffect } from 'react'
import { trim } from 'lodash'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
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
        onSubmitUpdate(trim(updatedMessage))
        handleClose()
    }

    useEffect(() => {
        setUpdatedMessage(message)
    }, [message])
    return (
        <div style={{ borderRight: '1px lightgray solid' }}>
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
                        error={trim(updatedMessage).length > 200}
                        helperText="Message must contain 1-200 characters."
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={
                            trim(updatedMessage).length < 1 ||
                            trim(updatedMessage).length > 200
                        }
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateForm
