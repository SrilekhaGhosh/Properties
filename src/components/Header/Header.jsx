import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Badge, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
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
                        <span className="text-sm font-medium text-orange-500">+ Customize Property</span>
                        {/* Profile Avatar with Notification Dot */}
                        <Badge
                            color="error"
                            variant="dot"
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <Avatar
                                alt="User Profile"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 32, height: 32 }}
                            />
                        </Badge>
                    </div>

                </div>
            </nav>
        </header>
    );
}
