import '../styles/HeaderLine3.css';
import React, { useState , useEffect } from 'react';

const HeaderLine3 = () => {
  const [hovered, setHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shown1, setShown1] = useState(true);
  const [shown2, setShown2] = useState(false);
  const [shown3, setShown3] = useState(false);
  const [beginning, setBeginning] = useState(true);
  const hoveredOver = (event) => {
    setHovered(true);
  }
  const hoveredOut = (event) => {
    setHovered(false);
  }
  const hoveredOver1 = (event) => {
    setIsHovered(true)
  }
  const hoveredOut1 = (event) => {
    setIsHovered(false)
  }
  const opacity = {
    opacity: hovered ? 1 : .5
  }
  const opacity1 = {
    opacity: isHovered ? 1 : .5
  }

  useEffect(() => {
    if (!beginning){
      return;
    }
    setTimeout(() => {
      if(shown1){
        setShown1(false);
        setShown2(true);
        setShown3(false);
      }else if(shown2) {
        setShown1(false);
        setShown2(false);
        setShown3(true);
      }else if(shown3){
        setShown3(false);
        setShown2(false);
        setShown1(true);
      }
    }, 5000);
  }, [shown1, shown2, shown3])
 

  function resetLeft() {
    setBeginning(false);
    if(shown1){
      setShown1(false);
      setShown2(false);
      setShown3(true);
    }else if(shown3) {
      setShown3(false);
      setShown2(true);
      setShown1(false);
    }else if(shown2){
      setShown3(false);
      setShown2(false);
      setShown1(true);
    }
  }

  function resetRight() {
    setBeginning(false);
    if(shown1){
      setShown1(false);
      setShown2(true);
      setShown3(false);
    }else if(shown2) {
      setShown1(false);
      setShown2(false);
      setShown3(true);
    }else if(shown3){
      setShown3(false);
      setShown2(false);
      setShown1(true);
    }
  }
  return (
    
    <>
      <div className="HeaderLine3">
      
        <div className="centerBanner">
        <button onClick={resetLeft} onMouseOver={hoveredOver} onMouseOut={hoveredOut} style={opacity} type="button" className='arrow'>
            <div className="icon">
              <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z">
                </path>
              </svg>
            </div>
          </button>
            <div className='banner'>
            <div className={`slide-text1 ${shown1 ? 'show' : 'hide'}`}><p className='text'>Save Up to 40% On Our New Markdowns</p>
            <a className='link' href="https://www.nike.com/w/sale-3yaep"> Shop All</a></div>
            <div className={`slide-text2 ${shown2 ? 'show' : 'hide'}`}><p className='text'>Free Shipping + Returns, Free Membership, Exclusive Products</p>
            <a className='link' href="https://www.nike.com/register">Join Now</a></div>
            <div className={`slide-text3 ${shown3 ? 'show' : 'hide'}`}><p className='text'>Why Wait? Try Store Pickup</p>
            <a className='link'href="https://www.nike.com/w/shop-your-store-8b4bh">Shop now.</a></div>
            </div>
            

            <button onClick={resetRight} onMouseOver={hoveredOver1} onMouseOut={hoveredOut1} style={opacity1} type="button" className = 'arrow2'>
                <div className="icon">
                  <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                    <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
                    </path>
                  </svg>
                </div>
              </button>
          </div>
        </div>
    </>
  );
};

export default HeaderLine3;