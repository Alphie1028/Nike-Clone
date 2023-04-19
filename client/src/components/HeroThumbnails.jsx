import React from 'react';

const HeroThumbnails = (props) => {
  return (
    <div className='thumbnail-container'>
      {props.thumbnailImages.map((image, index) => (
        <img
          className='thumbnail'
          src={image}
          key={index}
          alt=''
          onMouseEnter={() => props.handleEnter(image)}
        />
      ))}
    </div>
  );
};

export default HeroThumbnails;
