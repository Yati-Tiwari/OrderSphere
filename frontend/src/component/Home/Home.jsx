import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center text-3xl font-bold text-gray-500'>
      <section className='banner -z-50 relaive flex flex-col items-center justify-center '>
        <div className='w-[50vw] z-10 py-5 text-center'>
          
          <p className='text-2xl lg:text-6xl font-bold py-5'>
            Order Sphere
          </p>

          <p className='text-gray-300 text-xl lg:text-4xl'>
            Taste the Convenience : Food, Fast, and Delicious!
          </p>

        </div>
      </section>
    </div>
  )
}

export default Home