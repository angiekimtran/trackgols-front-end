import React from 'react'
import { Card as MuiCard, CardContent } from '@mui/material'

const Card = ({ id, message, fetchCards }) => {
    return (
        <MuiCard>
            <CardContent>{message}</CardContent>
        </MuiCard>
    )
}

export default Card
