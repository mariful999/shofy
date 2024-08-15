import { caed1, caed2, caed3, caed4 } from '@/assets'
import Image from 'next/image'
import React from 'react'

const FastCardSection = () => {
  const card =[
  {
    _id: "66b8cc3747878228b59aaf0c",
    index: 0,
    img:caed1,
    title: "Headphones",
    stock: "20 Product"
  },
  {
    _id: "66b8cc3749cc0234257f5f72",
    index: 1,
    img:caed2,
    title: "Mobile phone",
    stock: "20 Product"
  },
  {
    _id: "66b8cc37a7cc9ea469563134",
    index: 2,
    img:caed3,
    title: "CPU Heat Pipes",
    stock: "20 Product"
  },
  {
    _id: "66b8cc37c6c80d88fcc6ccd6",
    index: 3,
    img:caed4,
    title: "Smart watch",
    stock: "20 Product"
  },
  {
    _id: "66b8cc377c6f73d654e582ef",
    index: 4,
    img:caed1,
    title: "Headphones",
    stock: "20 Product"
  },
]
   

  return (
    <div className='max-w-[1140px] mx-auto px-4 lg:px-0 py-10'>
      <div className='flex  gap-6 justify-between items-center '>
        {card.map((item)=><div key={item._id}>
          <Image src={item.img} alt='card' className=' w-full p-10 rounded-full bg-slate-200 '></Image>
          <div className='pt-5'>
            <h1 className='text-center font-semibold'>{item.title}</h1>
          <p className='text-center text-sm text-gray-500'>{item.stock}</p>
          </div>
          </div>)}
      </div>
     
    </div>
  )
}

export default FastCardSection