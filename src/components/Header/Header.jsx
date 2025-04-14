import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Badge, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h2 className="text-2xl font-bold">
                            Dot<span className="text-red-500">linker</span>
                        </h2>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex space-x-8">
                        <NavLink to="/" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                            For Property
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                            About Us
                        </NavLink>
                        <NavLink to="/insight" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                            Insights
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                            Contact Us
                        </NavLink>

                        <NavLink to="/login" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                        Login
                        </NavLink>

                        <NavLink to="/wishlist" className={({ isActive }) =>
                            `text-sm font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }>
                      WishList
                        </NavLink>
                    </div>

                    {/* Right Side - Customize Button & Profile */}
                    <div className="flex items-center space-x-6">
                        {/* Customize Property Button */}
                        {/* <Button
                            variant="contained"
                            color="error"
                            startIcon={<AddIcon />}
                            size="small"
                            className="capitalize"
                        >
                           
                        </Button> */}
                       <div className="flex items-center gap-2">
  <IconButton
    size="small"
    sx={{
      backgroundColor: '#e53935', 
      width: 24,
      height: 24,
      padding: 0,
      borderRadius: '6px',
      '&:hover': {
        backgroundColor: '#d32f2f',
      },
    }}
  >
    <AddIcon sx={{ fontSize: 16, color: 'white' }} />
  </IconButton>
  <span className="text-sm font-medium text-orange-500">Customize Property</span>
</div>
                    
                        {/* Profile Icon with Tooltip */}
                        <Tooltip title="My Account" arrow>
                    <IconButton
                        onClick={handleClick}
                        varient="dot"
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'My Account' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                    <Avatar
                                alt="my profile"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 32, height: 32 }}
                            />
          </IconButton>
        </Tooltip>
                    </div>

                </div>
            </nav>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </header>
    );
}
