import React, { useState } from "react"
import {ProfileNavigation} from './ProfileNavigation'

const Profile=()=>{
    const [openSideBar, setOpenSideBar]=useState(false);
    
    const handleCloseSideBar=()=>{
        setOpenSideBar(false);
    };
    
    return(
        <div className="h-screen flex pt-[64px]">
            <div className="h-full lg:w-56 bg-black">
                 <ProfileNavigation open={openSideBar} handleClose={handleCloseSideBar}/>
            </div>
            <div className="flex-1 p-5 bg-black text-white mt-4">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="text-gray-400">Welcome to your profile. Navigate using the menu on the left.</p>
            </div>
        </div>
    )
}

export default Profile