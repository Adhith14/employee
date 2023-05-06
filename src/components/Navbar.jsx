import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar style={{backgroundColor:'#6ef',color:'red'}}>
                <Toolbar>
                    <Typography varient='h6' sx={{flexGrow:1}} align='left'>App</Typography>
                    
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Form</Button>
                    <Button color='inherit'>Adhith</Button>

                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar