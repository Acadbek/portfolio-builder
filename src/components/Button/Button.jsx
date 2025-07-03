import { Button } from '@mui/material'
import React from 'react'

export const CurrentButton = ({ starIcon, onClick, color, variant, className, title }) => {
    return (
        <Button onClick={onClick} startIcon={starIcon} className={className} color={color} variant={variant}  >
            {title}
        </Button>
    )

}