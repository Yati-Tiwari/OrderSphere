import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
export const Navbar=()=>{
    return(
        <div className='w-screen left-0 fixed top-0 px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <div className='logo font-semibold text-gray-300 text-2xl'>
                        Sphere food
                    </div>
                     
                </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{fontSize:"1.5rem"}}/>
                    </IconButton>


                </div>
                <div className=''>
                    <Avatar sx={{bgcolor: "white", color: "#e91e63"}}>C</Avatar>
                </div>
                <div className=''>
                     <IconButton>
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </div>

            </div>



        </div>
    )
}