import { Button } from '@mui/material'
import React from 'react'

export const CurrentButton = ({ starIcon, onclick, color, variant, className, title }) => {
    return (
        <Button onClick={onclick} startIcon={starIcon} className={className} color={color} variant={variant}  >
            {title}
        </Button>
    )

}