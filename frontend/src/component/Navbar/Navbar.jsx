import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
    return (
        <Box
         className='fixed top-0 left-0 right-0 w-full px-5 py-[.8rem] bg-[#e91e63] z-50 lg:px-20 flex justify-between items-center'>

            <div className='flex items-center'>
                <h1 className='font-bold text-white text-xl'>Zosh food</h1>
            </div>

            <div className='flex items-center justify-end space-x-4 lg:space-x-8'>

                <IconButton>
                    <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                </IconButton>

                <Avatar sx={{ bgcolor: "white", color: "#e91e63", width: 32, height: 32, fontSize: "0.9rem", fontWeight: "bold" }}>
                    C
                </Avatar>

                <IconButton>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </Badge>
                </IconButton>

            </div>

        </Box>
    )
}