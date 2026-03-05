import React from "react"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, useMediaQuery, Drawer } from "@mui/material";



const menu=[
    {title:"Orders",icon:<ShoppingBagIcon/>},
    {title:"Favourites",icon:<FavoriteIcon/>},
    {title:"Address",icon:<AddLocationAltIcon/>},
    {title:"Payments",icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications",icon:<NotificationsActiveIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>},

]

export const ProfileNavigation=({open,handleClose})=>{
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    return(
        <div>
            <Drawer 
            variant={isSmallScreen ? "temporary" : "permanent"}
            onClose={handleClose}
            open={isSmallScreen ? open:true} 
            anchor='left'
            sx={{
                zIndex:0,
                '& .MuiDrawer-paper': {
                    top: isSmallScreen ? 0 : '64px',
                    height: isSmallScreen ? 'auto' : 'calc(100% - 64px)'
                }
            }}>
                <div className="w-[50vw] lg:w-56 h-full flex flex-col justify-start pt-16 text-xl gap-8 bg-black text-white">
                    {menu.map((item,i)=><>
                    <div className="px-5 flex items-center space-x-5 cursor-pointer">
                        {item.icon}
                        <span>{item.title}</span>
                    
                        </div>
                        {i!==menu.length-1 && <Divider/>}
                    </>)}

                </div>

            </Drawer>

            
        </div>
    )
}

