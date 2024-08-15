import React from 'react'
import Container from '../Container'
import { TbTruckDelivery } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";


const Service = () => {
  return (
   <Container>
     <div className='grid grid-cols-4 gap-2 '>
        <div className='bg-purple-100 flex items-center gap-2 px-3 py-4'>
            <TbTruckDelivery className='text-4xl text-red-500' />
            <div>
                <h1 className='font-semibold '>Free Delivery</h1>
                <p className='text-sm text-gray-500'>Orders from all item</p>
            </div>
        </div>
        <div className='bg-purple-100 flex items-center gap-2 px-3 py-4'>
            <FiDollarSign className='text-4xl text-red-500' />
            <div>
                <h1 className='font-semibold '>Return & Refund</h1>
                <p className='text-sm text-gray-500'>Money-back guarantee</p>
            </div>
        </div>
        <div className='bg-purple-100 flex items-center gap-2 px-3 py-4'>
            <CiDiscount1 className='text-4xl text-red-500' />
            <div>
                <h1 className='font-semibold '>Member Discount</h1>
                <p className='text-sm text-gray-500'>Every order over $140.00</p>
            </div>
        </div>
        <div className='bg-purple-100 flex items-center gap-2 px-3 py-4'>
            <BiSupport className='text-4xl text-red-500' />
            <div>
                <h1 className='font-semibold '>Support 24/7</h1>
                <p className='text-sm text-gray-500'>Contact us 24 hours a day</p>
            </div>
        </div>
        
        </div>
       
   </Container>
  )
}

export default Service