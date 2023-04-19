import React, { useState , useEffect } from 'react';
import "../styles/FreeSR.css";
const FreeSR = () => {
    const [active, setActive] = useState(null);
    function click() {
        if(active === null) {
            setActive(
                <div className='dropdown'>
                    <div>
                        <p>
                            Free standard shipping and free 60-day returns for Nike Members.
                        </p>
                        <div className='linkOneLine'>
                            <a href='https://www.nike.com/help/a/free-shipping'>
                                Learn more.
                            </a>
                            <a href='https://www.nike.com/help/a/return-exceptions'>
                                Return Policy exclusions apply.
                            </a>
                        </div>
                        
                    </div>
                        <a href='https://www.nike.com/help/a/store-pickup'>
                            Pick-up available at select Nike Stores.
                        </a>
                </div>
            );
        }else{
            setActive(null);
        } 
    }
    return (
        <div>
            <div onClick={click} className='freeSRMain'>
                <div className='FreeSR'>
                    Free Shipping & Returns
                </div>
                <div className={active !== null ? "arrowup" : "arrowdown"}>
                    <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
                        </path>
                    </svg>
                </div>
            </div>
            {active}
            
        </div>
        
        
    )
};

export default FreeSR;