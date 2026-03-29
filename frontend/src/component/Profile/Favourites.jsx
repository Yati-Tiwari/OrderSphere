import React from 'react'
import RestaurantCard from '../Home/RestaurantCard'

export default function Favourites(){
    return(
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
            <div className='flex flex-wrap gap-1 justify-center'>

                {[1,1,1].map((item)=><RestaurantCard/>)}
            </div>
        </div>
    )
}