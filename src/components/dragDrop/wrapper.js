import React from 'react'

const DropWrapper = ({ onDrop, children }) => {
    const allowDrop = (e) => e.preventDefault()

    const handleDrop = (e) => {
        const data = e.dataTransfer.getData('item')
        onDrop(data)
    }
    return (
        <div onDragOver={allowDrop} onDrop={handleDrop}>
            {children}
        </div>
    )
}

export default DropWrapper
