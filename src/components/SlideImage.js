import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import image1 from '../images/slider-badag.jpg'
import image2 from '../images/slider-badging.jpg'
import image3 from '../images/slider-scale.jpg'
import image4 from '../images/slider-scales.jpg'

function SlideImage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // lazyLoad: 'ondemand'
  };
  return (
    <>
      <SlideCont>


        <Slider {...settings}>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </Slider>
      </SlideCont>
    </>
  )
}

export default SlideImage

const SlideCont = styled.div`
  div{
    overflow: visible;
 margin: auto;
 box-shadow: rgb(0 0 0 / 30%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

 width: 90vw;


  }
  img{
    object-fit: cover;
    border: 4px solid transparent;
    border-radius: 4px;
    margin: auto;
    width: 100%;
    cursor: pointer;
  }
`

