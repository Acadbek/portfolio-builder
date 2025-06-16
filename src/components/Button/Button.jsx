import { Button } from '@mui/material'
import React from 'react'

export const CurrentButton = ({ starIcon, onclick, color, variant, className, size, title, endIcon }) => {
    return (
        <Button onClick={onclick} startIcon={starIcon} className={className} color={color} variant={variant} size={size} endIcon={endIcon}  >
            {title}
        </Button>
    )

}