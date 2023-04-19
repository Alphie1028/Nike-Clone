import React, { useState, useEffect, useRef } from 'react';
import '../styles/SuggestedContent.css';
import suggestionPrev from '../styles/svgs/suggestionPrev.svg';
import suggestionNext from '../styles/svgs/suggestionNext.svg';

const SuggestedContent = () => {

  const [suggestedContent, setSuggestedContent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/shoes/')
            .then(res => res.json())
            .then((data) => {
              setSuggestedContent(data.filter(item => item.shoeid > 1));
            })
            .catch((error) => console.error(error))
  }, []);
  console.table(suggestedContent);

    const ref = useRef();
    const prevButton = useRef();
    const nextButton = useRef();
    let index = 1;
    const scroll = (scrollOffset) => {
      if (scrollOffset === 400) {
        ref.current.style.overflowX = 'scroll';
        index += 1;
        ref.current.scrollLeft += scrollOffset;
        if (index < 2) {
          index = 1;
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '0.25';
          prevButton.current.style.cursor = 'default';
        } else if (index > 9) {
          index = 10;
          nextButton.current.style.opacity = '0.25';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'default';
        } else {
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'pointer';
          prevButton.current.style.cursor = 'pointer';
        }
      }
      if (scrollOffset === -400) {
        index -= 1;
        ref.current.scrollLeft += scrollOffset;
        if (index < 2) {
          index = 1;
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '0.25';
          prevButton.current.style.cursor = 'default';
        } else if (index > 9) {
          index = 10;
          nextButton.current.style.opacity = '0.25';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'default';
        } else {
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'pointer';
          prevButton.current.style.cursor = 'pointer';
        }
      }
    };

    return (
      <div className='suggested-content'>
        <div id='slides-menu'>
          <div className='slider-title'>You Might Also Like</div>
          <div className='slide-controls'>
            <div
              ref={prevButton}
              className='scroll-button'
              style={{ opacity: '0.25' }}
              onClick={() => scroll(-400)}
            >
              <img
                src={suggestionPrev}
                alt='prev'
              />
            </div>
            <div
              ref={nextButton}
              className='scroll-button'
              onClick={() => scroll(400)}
            >
              <img
                src={suggestionNext}
                alt='next'
              />
            </div>
          </div>
        </div>
        <div
          id='card-slider'
          ref={ref}
        >
          {suggestedContent.map((item) => {
            return (
              <div className='suggested-card'>
                <img
                  id='suggested-card-image'
                  src={item.image}
                  alt=''
                />
                <span className='mid-weight-text'>{item.name}</span>
                <span
                  className='mid-weight-gray'
                  style={{ 'margin-bottom': '8px' }}
                >
                  {item.gender}
                </span>
                <span className='mid-weight-text'>{item.price}</span>
                <span
                  className='mid-weight-gray'
                  style={{ 'text-decoration-line': 'line-through' }}
                >
                </span>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default SuggestedContent;
