import React from "react"
import Slider from "react-slick"
import p2 from '../../assets/p2.svg'
import p3 from '../../assets/p3.svg'
import p4 from '../../assets/p4.svg'
import p1 from '../../assets/p1.jpg'
import p6 from '../../assets/p6.jpg'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.jpg'


import './partner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Partner=()=>{

    
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    ›
  </button>
);
     const settings={
            infinite:true,
            slidesToShow:4,
            slidesToScroll:1,
            autoplay:false,
            speed:2000,
            autoplaySpeed:0,
            cssEase:"linear",
            arrows:true,
            pauseOnHover:false,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive:[{
              breakpoint:1024,
              settings:{slidesToShow:4,},},
              {
                 breakpoint:992,
              settings:{slidesToShow:2,},
              },
            ],}
           
        
        const images=[p1,p2,p3,p4,p6,p7,p8]
    return(
      
    <section className="partner">
        <p>Our Partners</p>
        <Slider {...settings}>
            {images.map((img,index)=>(
            <div className="frame" key={index}>
            <img src={img} alt="partners" className="partners"/>
            
            </div>
            ))}
        </Slider>
        
    </section>
        )
    }
    export default Partner;
