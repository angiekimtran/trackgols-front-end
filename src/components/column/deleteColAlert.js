import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Container,
} from '@mui/material'

const DeleteColAlert = ({ onDeleteColumn }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        onDeleteColumn()
        handleClose()
    }

    return (
        <div>
            <Button color='error' onClick={handleClickOpen}>Delete Column</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Container sx={{ width: 400, padding: '16px 24px' }}>
                    <DialogTitle id="alert-dialog-title">
                        {'Delete this column?'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            id="alert-dialog-description"
                            color={'#fc4641'}
                            fontSize={'small'}
                        >
                            This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Go Back</Button>
                        <Button onClick={handleSubmit} autoFocus>
                            Proceed
                        </Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </div>
    )
}
export default DeleteColAlert
