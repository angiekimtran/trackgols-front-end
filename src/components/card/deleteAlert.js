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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const DeleteAlert = ({ onSubmitDelete }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        onSubmitDelete()
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
                variant="outlined"
                onClick={handleClickOpen}
            >
                <DeleteForeverIcon fontSize="small" />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Container sx={{width: 400, padding: '16px 24px'}}>
                <DialogTitle id="alert-dialog-title">
                    {'Delete this card?'}
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
export default DeleteAlert
