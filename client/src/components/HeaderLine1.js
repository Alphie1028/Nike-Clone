import '../styles/HeaderLine1.css';
import React, { useState } from 'react';
import jordanLogo from '../jordan.svg';
import converseLogo from '../converse.svg';

const HeaderLine1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const hoveredOver = (event) => {
    event.target.style.opacity = .5;
  }
  const hoveredOut = (event) => {
    event.target.style.opacity = 1;
  }
  const mouseOverHelp = (event) => {
    event.target.style.opacity = .5;
    setShowDropdown(true)
  }
  const mouseOutHelp = (event) => {
    event.target.style.opacity = 1;
    setShowDropdown(false)
  }
  const mouseOverMenu = () => {
    setShowDropdown(true)
  }
  const mouseOutMenu = () => {
    setShowDropdown(false)
  }
  const mouseOverMenuButton = (event) => {
    event.target.style.color = 'black';
  }
  const mouseOutMenuButton = (event) => {
    event.target.style.color = '#a5a5a5';
  }
  return (
    <div className='HeaderLine1Base'>
      <div className='HeaderLine1'>
        <div className="branditems">
          <div className='brand-item' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
            <img
              src={jordanLogo}
              alt='jordan-logo'
            />
          </div>
        <div className='brand-item' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
          <img
            src={converseLogo}
            alt='converse-logo'
          />
        </div>
      </div>
        <div className='headermenu1'>
          <div className="menuoption">
          <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Find a Store
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
          <div className='menuText' onMouseOver={mouseOverHelp} onMouseOut={mouseOutHelp}> 
              Help
            </div>
            <div onMouseOver={mouseOverMenu} onMouseOut={mouseOutMenu} className={`dropdownHeader1 ${showDropdown ? 'show' : ''}`}>
              <div className='dropdownBar'>
              </div>
              <div className='dropdownHelp'>
                Help
              </div>
              <div className='dropdownOptions'>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Order Status
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Shipping & Delivery
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Returns
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Order Cancelation
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Size Charts
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Contact Us
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Privacy Policy
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Terms of Sale
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Terms of Use
              </div>
              <div onMouseOver={mouseOverMenuButton} onMouseOut={mouseOutMenuButton} className='dropdownOption'>
                Send Us Feedback
              </div>
              </div>
              
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
            <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Join Us
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
          <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Sign In
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderLine1;
