import React from 'react'
import LogoImage from '../assets/logo.png'

function Logo() {
  return (
    <div>
      <img src={LogoImage} alt="No-image" width = '80px'
       className='rounded-lg cursor-pointer'/></div>
  )
}

export default Logo