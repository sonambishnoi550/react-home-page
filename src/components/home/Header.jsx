import React from 'react'
import two from '../../assets/images/png/image3.png'

const Header = () => {
  return (
    <div>
          <div className='text-center pt-5 '>
              <h2>Lorem, ipsum.</h2>
          </div>
          <div className='flex justify-center'>
              <img src={two} alt="two-image" />
          </div>
    </div>
  )
}

export default Header
