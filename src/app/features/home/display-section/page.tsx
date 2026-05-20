"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const images = ["/display-1.png", "/display-2.jpg", "/display-3.jpg"]

export default function DisplaySection() {

  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev: any) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  const nextSlide = () => {
    setCurrent((prev: any) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length -1 ? 0 : prev + 1));
    },3000);

    return () => clearInterval(interval);

  },[]);


  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='relative w-[90%] max-w-3xl overflow-hidden rounded-2xl shadow-xl h-[500px]'>

        {/* <div className='relative w-[90%] h-[500px] overflow-hidden rounded-2xl shadow-xl'> */}
          <Image 
            src={images[current]} 
            alt={`Slide ${current + 1}`}
            fill
            priority
            className="object-cover w-full"
          />
        {/* </div> */}

        <div className='absolute bottom-0 left-1/2'>
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-5 w-5 rounded-full transition-all duration-300 ${current === index ? "bg-orange-500 scale-110" : "bg-gray-300"}`}/>
              
          )) }
        </div>

            
      </div>
      

      

      
      
    </div>
  )
}
