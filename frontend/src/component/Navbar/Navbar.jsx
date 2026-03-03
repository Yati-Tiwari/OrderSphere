import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-16 bg-[#e91e63] px-5 lg:px-20 flex items-center justify-between z-50 shadow-md'>

            <div className='cursor-pointer flex items-center space-x-4'>
                <div className='font-semibold text-white text-2xl'>
                    Sphere Food
                </div>
            </div>

            <div className='flex items-center space-x-4 lg:space-x-8'>

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