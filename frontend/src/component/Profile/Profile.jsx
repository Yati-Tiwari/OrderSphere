import React, { useState } from "react"
import {ProfileNavigation} from './ProfileNavigation'

const Profile=()=>{
    const [openSideBar, setOpenSideBar]=useState(false);
    
    const handleCloseSideBar=()=>{
        setOpenSideBar(false);
    };
    
    return(
        <div className="lg:flex justify-between">
            <div className="sticky h-[80vh] lg:w-[20%]">
                 <ProfileNavigation open={openSideBar} handleClose={handleCloseSideBar}/>

            </div>
            <div className="lg:w-[80%] p-5">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="text-gray-400">Welcome to your profile. Navigate using the menu on the left.</p>
            </div>

        </div>
    )
}

export default Profile