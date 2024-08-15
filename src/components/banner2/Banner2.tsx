import React from 'react'
import Container from '../Container'
import { bannerImage2, bannerImage3 } from '@/assets'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

const Banner2 = () => {
  return (
    <Container>
        <div className='py-14 flex justify-between'>
            <div>
              <Image src={bannerImage2} alt="BannerImage2" className=' absolute h-52 w-1/2 ' ></Image>
              <div className='relative p-14 '>
                <p>Sale 20% off all store</p>
                <a className='cursor-pointer text-2xl font-semibold '>Smartphone <br /> BLU G91 Pro 2022 </a> <br />
               <div className='flex items-center gap-2 hover:text-blue-700'>
                 <a className='cursor-pointer ' href="">Shop Now </a>
                 <GoArrowRight />
               </div>
              </div>
            </div>
            <div className=''>
              <Image src={bannerImage3} alt="BannerImage2" className=' absolute h-52' ></Image>
              <div className='relative p-14 right-12'>
                <p>Sale 35% off</p>
                <a className='cursor-pointer text-2xl font-semibold'>HyperX Cloud II
                <br />Wireless </a> <br />
               <div className='flex items-center gap-2 hover:text-blue-700'>
                 <a className='cursor-pointer ' href="">Shop Now </a>
                 <GoArrowRight />
               </div>
              </div>
            </div>
            
        </div>
    </Container>
  )
}

export default Banner2