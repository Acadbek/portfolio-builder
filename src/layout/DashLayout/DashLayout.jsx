import React from 'react'
import { ResumeContentNav } from '../../pages/ReumeContentNav/ResumeContentNav'

export const DashLayout = () => {
    return (
        <Box>
            <ResumeContentNav />
            <Box component="main">
                <Outlet />
            </Box>
        </Box>
    )
}
