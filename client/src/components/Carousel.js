import React from "react";

const Carousel = (props) => {
  function click(event) {
    props.prevImage()
    event.target.style.background = 'rgb(180, 180, 180)'
  }
  function unClick(event) {
    event.target.style.background = 'white'
  }
  return (
    <div className='arrowContainer'>
      <div onMouseDown={click} onMouseUp={unClick} className="icon1">
              <svg pointerEvents={'none'} fill="#111" height="12px" width="12px" viewBox="0 0 185.4 300">
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z">
                </path>
              </svg>
            </div>
      <div onMouseDown={click} onMouseUp={unClick} className='icon1'>
        <svg pointerEvents={'none'} fill="#111" height="12px" width="12px" viewBox="0 0 185.4 300">
            <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
            </path>
        </svg>
      </div>
      
    </div>
  );
};

export default Carousel;
