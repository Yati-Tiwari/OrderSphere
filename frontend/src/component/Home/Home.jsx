import React from 'react'
import './Home.css'
import MultipleItemCarousel from './MultipleItemCarousel';
import RestaurantCard from './RestaurantCard';
// import { Restaurants } from '../Data/Restaurants';
import { Restaurants } from '../Data/Restaurants';


const Home = () => {
  return (
    <div className='w-full h-full flex flex-col'>

      <section className='banner relative flex flex-col items-center justify-center'>
        
        <div className='w-[50vw] z-10 py-5 text-center'>
          <p className='text-2xl lg:text-6xl font-bold py-5'>
            Order Sphere
          </p>

          <p className='text-gray-300 text-xl lg:text-4xl'>
            Taste the Convenience : Food, Fast, and Delicious!
          </p>
        </div>

        <div className='cover absolute top-0 left-0 w-full h-full'></div>

      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meals
        </p>
        <MultipleItemCarousel />
      </section>

      <section className="px-5 lg:px-20">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          Order from your Favorite and Handpicked Restaurants
        </h1>

        <div className="flex flex-wrap items-center justify-center">
        {Restaurants.map((item,index)=>(
            <RestaurantCard key={index} item={item} index={index}/>
        ))}
        </div>
      </section>

    </div>
  )
}

export default Home;