import { Box } from '@mui/material'
import React from 'react'
import { BoxOneMain } from './BoxOneMain/BoxOneMain'
import { BoxTwoMain } from './BoxTwoMain/BoxTwoMain'
import { BoxThereMain } from './BoxThereMain'
import { BoxFourMain } from './BoxFourMain'
import { BoxFiveMain } from './BoxFiveMain'
import { BoxSixMain } from './BoxSixMain'

export const Main = () => {
    return (
        <Box>
            <BoxOneMain />
            <BoxTwoMain />
            <BoxThereMain />
            <BoxFourMain/>
            <BoxFiveMain/>
            <BoxSixMain/>
        </Box>
    )
}
