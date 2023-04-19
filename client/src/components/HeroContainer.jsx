import React, { useEffect, useState } from 'react';
import HeroThumbnails from './HeroThumbnails';
import Carousel from './Carousel';

const HeroContainer = (props) => {
  // State management for carousel buttons to cycle through array of images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlyRated, setHighlyRated] = useState(null);

  // Default images to load on initial render
  useEffect(() => {
    fetch('http://localhost:3000/api/shoes/1')
      .then((res) => res.json())
      .then((data) => {
        props.setFocusedImage(data[0].image);
        props.setThumbnailImages(data[0].image_array);
        props.setSizeArray(data[0].size_array);
        props.setPrice(data[0].price);
        props.setInterest('$31.25');
        props.setCurrentShoe(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Carousel button controls
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % props.thumbnailImages.length);
    props.setFocusedImage(props.thumbnailImages[currentIndex]);
    console.log(currentIndex);
  };

  const prevImage = () => {
    let index = (currentIndex - 1) % props.thumbnailImages.length;
    if (index < 0) {
      index = props.thumbnailImages.length - 1;
    }
    setCurrentIndex(index);
    props.setFocusedImage(props.thumbnailImages[index]);
  };

  // Sets focused image when mouse enters a thumbnail image
  const handleEnter = (image) => {
    props.setFocusedImage(image);
    console.log(image);
  };

  useEffect(() => {
    if (props.data) {
      const amtReviews = props.data.length;
      let starArray = [];
      for (let i = 0; i < amtReviews; i++) {
        starArray.push(props.data[i].stars);
      }
      const sumOfStars = starArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const avgOfStars = Math.ceil(sumOfStars / starArray.length);
      if (avgOfStars >= 4) {
        setHighlyRated(
          <div className='HR'>
            <span className='HRstar'>&#9733;</span>
            <p className='HRText'>Highly Rated</p>
          </div>
        );
      }
    }
  }, [props.data]);

  // Rendering
  return (
    <div className='hero-container'>
      <HeroThumbnails
        handleEnter={handleEnter}
        thumbnailImages={props.thumbnailImages}
      />
      <div className='hero-image-container'>
        {highlyRated}
        <img
          id='hero-img'
          src={props.focusImage}
          alt=''
        />
        <Carousel
          prevImage={prevImage}
          nextImage={nextImage}
        />
      </div>
    </div>
  );
};

export default HeroContainer;
