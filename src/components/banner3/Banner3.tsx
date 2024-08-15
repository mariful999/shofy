import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { bannerImage4 } from '@/assets'

const Banner3 = () => {
  return (
    <Container>
      <div className='flex justify-center gap-8 items-center bg-blue-800 rounded-md py-10 text-white p-6'>
        <div className=''>
          <p className='uppercase text-sm font-semibold'>Tablet Collection 2023</p>
          <h1 className='text-6xl font-bold py-5 '>Samsung Galaxy Tab <br /> S6, Wifi Tablet</h1>
          <button className='bg-black px-6 py-2 rounded-md hover:bg-white hover:text-black text-sm duration-300 '>Shop Now</button>
        </div>
        <Image src={bannerImage4} alt="bannerImage4" className='' ></Image>
        
      </div>
    </Container>
  )
}

export default Banner3