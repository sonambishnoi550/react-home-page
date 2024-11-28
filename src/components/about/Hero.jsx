import React from 'react'
import one from '../../assets/png/slick1.png'

const Hero = () => {
  return (
      <div>
          <h1 className='text-center text-6xl'>Hello</h1>
          <div className='flex justify-center'>
              <img src={one} alt="one-image" />
          </div>
    </div>
  )
}

export default Hero