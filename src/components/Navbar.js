import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from '../index';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                {user ?
                    <Button onClick={() => auth.signOut()} variant='outline' color="inherit">LogOut</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </NavLink>
                }
                <Typography 
                    justifyItems={"center"}
                    style={{ paddingLeft: '38%' }} 
                    variant="h6" 
                    color="inherit" 
                    component="div">
                    <Link to="/">Home</Link> <Link to="/login">Go to login</Link> <Link to="/chat">Go to chat</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;