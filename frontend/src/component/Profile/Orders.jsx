// import React from 'react'

// export const Orders=()=>{
//     return(
//         <div>Orders</div>
//         // <div className='flex-items-center flex-col'>
//         //     <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
//         //     <div className='space-y-5 w-full lg:w-1/2'>

//         //     </div>

//         // </div>
//     )
// }
import React from 'react'
import {OrderCard} from './OrderCard';

export default function Orders(){
    return(
<<<<<<< HEAD
        <div>Orders</div>
=======
        <div className='flex items-center flex-col'>
            <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
            <div className='space-y-5 w-full lg:w-1/2'>
            {
                [1,1,1,1].map((item)=><OrderCard/>)
            }
            </div>

        </div>  
>>>>>>> d81b99eea0588b90de11ed305fa12f501b53a1c7
    )
}
