import React from 'react'
import ReactCaroussel from 'react-caroussel';
import "react-caroussel/dist/index.css";

const Caroussel = () => {
  const images = [
    {
      id: 1,
      image: 'src/assets/evenement_7.jpg'
    },
    {
      id: 2,
      image: 'src/assets/img1.jpg'
    },
  ];

  return (
    <div>
      <ReactCaroussel
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
        speed={2}    // 2s: speed of autoplay
        display={{
          arrows: true,
          dots: false
        }}>
        {
          images.map((image) => (
            <img key={image.id} className='w-full ' src={image.image} alt="" />
          ))
        }

      </ReactCaroussel>

    </div>
  )
};



export default Caroussel
