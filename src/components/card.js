import React, { useState } from 'react'
// import { deleteCard, updateCard } from '../api/cards'
import './card.css'

const Card = ({ id, message, fetchCards }) => {


    return (
         <div>{message}</div>
    )
}

export default Card
