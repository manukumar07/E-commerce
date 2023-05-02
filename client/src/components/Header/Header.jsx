import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import "./Header.css"

const StyledHeader = styled(AppBar)`
        background: #2874f0;
        height: 55px;
`

const Header = () => {
  return (
     <>
         <StyledHeader>
                <Toolbar>
                        <Box>
                                <img src="" alt="logo" />
                        </Box>
                </Toolbar>
        </StyledHeader>
        </>
  )
}

export default Header
