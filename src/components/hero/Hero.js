import React from 'react'
import SlickCarousel from './SlickCarousel'
import Countdown from './Countdown'

const Hero = () => {
  return (
    <div style={{ position: 'relative' }}>

      <SlickCarousel />

      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>

      <Countdown />

    </div>
  )
}

export default Hero