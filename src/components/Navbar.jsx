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
                    
                    <Button color='inherit'><Link to={'/'}  style={{textDecoration:'none'}}>Home</Link> </Button>
                    <Button color='inherit'><Link to={'/table'}  style={{textDecoration:'none'}}>Form</Link> </Button>
                
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar