import React, { useState } from "react"
import { ProfileNavigation } from './ProfileNavigation'
import { Routes, Route } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import Address from './Address'
import Favourites from './Favourites'
import Events from './Events'

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const handleCloseSideBar = () => {
        setOpenSideBar(false);
    };

    return (
        <div className="flex pt-[64px] bg-black text-white min-h-screen">
            <div className="h-full lg:w-56 bg-black">
                <ProfileNavigation open={openSideBar} handleClose={handleCloseSideBar}/>
            </div>

            <div className="flex-1 p-5 bg-black text-white overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="text-gray-400 mb-8">
                    Welcome to your profile. Navigate using the menu on the left.
                </p>

                <Routes>
                    <Route path="/" element={<UserProfile/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/address" element={<Address/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                    <Route path="/events" element={<Events/>} />
                </Routes>

                <div className="mt-12 mb-8">
                    <UserProfile/>
                </div>
            </div>
        </div>
    )
}

export default Profile