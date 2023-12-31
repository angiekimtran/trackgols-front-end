import React, { useEffect, useState } from 'react'
import { trim } from 'lodash'
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

const UpdateBoardTitle = ({ title, onUpdateBoardTitle }) => {
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
        onUpdateBoardTitle(trim(updatedTitle))
        handleClose()
    }
    useEffect(() => {
        setUpdatedTitle(title)
    }, [title])
    return (
        <div>
            <Button
                sx={{
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    minHeight: 30,
                    color: '#eeeeee',
                }}
                onClick={handleClickOpen}
            >
                <EditIcon fontSize="large" />
            </Button>
            <Dialog open={open}>
                <DialogTitle>Edit Title</DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <DialogContentText>
                        Enter a new title for your board.
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
                        error={trim(updatedTitle).length > 50}
                        helperText="Title must contain 1-50 characters."
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={
                            trim(updatedTitle).length < 1 ||
                            trim(updatedTitle).length > 50
                        }
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UpdateBoardTitle
