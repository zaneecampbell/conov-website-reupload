import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const PortfolioLanding = () => {
  // Images to pass into the carousel
  const images = [
    {
      src: '/Carousel_Images/1.png',
      altText: 'Berong Jusser',
      caption: 'Commission Piece',
      header: 'Berong Jusser'
    },
    {
      src: '/Carousel_Images/3.png',
      altText: 'Nonno',
      caption: 'Original Character',
      header: 'Nonno'
    },
    {
      src: '/Carousel_Images/2.png',
      altText: 'Milim Nava',
      caption: 'Commission Piece',
      header: 'Milim Nava'
    }
  ];
  return (
    <div
      style={{
        maxWidth: '500px',
        height: 'auto',
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      <h1
        style={{ marginBottom: '25px', fontSize: '4rem' }}
        className='display-3'
      >
        Some of my work!
      </h1>
      <UncontrolledCarousel interval={4000} items={images} />
    </div>
  );
};

export default PortfolioLanding;
