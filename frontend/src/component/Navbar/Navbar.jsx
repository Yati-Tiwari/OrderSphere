import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between px-5 py-[.8rem] bg-[#e91e63] lg:px-20 shadow-md z-50'>

            <div className='flex-1'></div>

            <div className='cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-white text-2xl lg:text-3xl'>
                    Sphere Food
                </li>
            </div>

            <div className='flex-1 flex items-center justify-end space-x-4 lg:space-x-8'>

                <IconButton>
                    <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                </IconButton>

                <Avatar sx={{ bgcolor: "white", color: "#e91e63" }}>
                    C
                </Avatar>

                <IconButton>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </Badge>
                </IconButton>

            </div>

        </div>
    )
}