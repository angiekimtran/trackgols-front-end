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

const AddColForm = ({ onSubmitColumn }) => {
    const [title, setTitle] = useState()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setTitle()
        setOpen(false)
    }

    const handleSubmit = () => {
        onSubmitColumn(title)
        handleClose()
    }
    return (
        <div>
            <Button
                variant="outlined"
                sx={{
                    width: 300,
                    height: 142.5,
                    color: '#002884',
                    background: '#eeeeee',
                }}
                onClick={handleClickOpen}
            >
                + Add Column
            </Button>
            <Dialog open={open}>
                <DialogTitle> Add Column</DialogTitle>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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

export default AddColForm
