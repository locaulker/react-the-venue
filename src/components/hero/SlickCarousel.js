import React from 'react'
import Slider from 'react-slick'

import Slide1 from '../../resources/images/slide1.jpg'
import Slide2 from '../../resources/images/slide2.jpg'
import Slide3 from '../../resources/images/slide3.jpg'

const SlickCarousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    fade: true,
    easing: 'linear'
  }

  return (
    <div
      className="carousel_wrapper"
      style={{
        // height: `${window.innerHeight}px`,
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'pink'
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${Slide1})`,
              height: '100vh'
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${Slide2})`,
              height: '100vh'
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background: `url(${Slide3})`,
              height: '100vh'
            }}
          ></div>
        </div>
      </Slider>
    </div>
  )
}

export default SlickCarousel