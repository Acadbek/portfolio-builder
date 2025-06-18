import { Box } from '@mui/material'
import React from 'react'
import { BoxOneMain } from './BoxOneMain/BoxOneMain'
import { BoxTwoMain } from './BoxTwoMain/BoxTwoMain'
import { BoxThereMain } from './BoxThereMain/BoxThereMain'

export const Main = () => {
    return (
        <Box>
            <BoxOneMain />
            <BoxTwoMain />
            <BoxThereMain />
        </Box>
    )
}
