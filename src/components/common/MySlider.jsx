import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../../assets/png/slider1.png'
import two from '../../assets/png/slider2.png'
import three from '../../assets/png/slider3.png'
import four from '../../assets/png/slider4.png'

const MySlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
  return (
    <div>
          <div className="container max-w-[1140px] mx-auto">
              <div>
                  <h1 className='font-bold text-7xl pb-5 text-pink-600 text-center'>slick slider</h1>
              </div>
              <Slider {...settings}>
                  <div>
                      <div>

                          <img src={one} alt="one-image" />
                      </div>

                  </div>
                  <div>
                      <img src={two} alt="one-image" />
                  </div>
                  <div>
                      <img src={three} alt="one-image" />
                  </div>
                  <div>
                      <img src={four} alt="one-image" />
                  </div>
                  <div>
                      <img src={one} alt="one-image" />
                  </div>
                  <div>
                      <img src={two} alt="one-image" />
                  </div>
              </Slider>      
   </div>

    </div>
  )
}

export default MySlider
