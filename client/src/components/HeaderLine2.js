import '../styles/HeaderLine2.css';
import nikeLogo from '../nike.svg';
import React, { useEffect, useState } from 'react';
const HeaderLine2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [searchStatus, setSearchStatus] = useState(null)


  const mouseOverMenu = () => {
    setShowDropdown(true);
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu = () => {
    setShowDropdown(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const mouseOverMenu1 = () => {
    setShowDropdown1(true)
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu1 = () => {
    setShowDropdown1(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const mouseOverMenu2 = () => {
    setShowDropdown2(true)
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu2 = () => {
    setShowDropdown2(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const mouseOverMenu3 = () => {
    setShowDropdown3(true)
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu3 = () => {
    setShowDropdown3(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const mouseOverMenu4 = () => {
    setShowDropdown4(true)
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu4 = () => {
    setShowDropdown4(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const mouseOverMenu5 = () => {
    setShowDropdown5(true)
    document.querySelector('.main-body-container').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0.2)'
    document.querySelector('.main-body-container').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.filter = 'blur(5px) brightness(.8)'
    document.querySelector('.Footer').style.transition = 'background-color 0.5s ease, filter 0.5s ease'
  }
  const mouseOutMenu5 = () => {
    setShowDropdown5(false)
    document.querySelector('.main-body-container').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.main-body-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }

  useEffect(() => {
    setSearchStatus( <div className='twoIcons'>
    <div className='searchMenu'>
        <svg  class="searchIcon" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
        <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
        </path>
      </svg>
      
      <input type="text" class="searchBar" name="search" autocomplete="off" data-var="vsInput" tabindex="0" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false">
      </input>
    </div>
    <svg  aria-hidden="true" className="heart" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
      <svg   aria-hidden="true" className="cart" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
    </div>)
  }, [searchStatus === null])
  function onClick() {
    setSearchStatus((
      <div className='searchMorph'>
        <div className="nikeLogoContainer">
          <svg className="nikeLogo" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd">
                </path>
            </svg>
        </div>
        <div className='searchMenu morph'>
          <svg  class="searchIcon" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
          <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
          </path>
          </svg>
          <input type="text" class="searchBar" name="search" autocomplete="off" data-var="vsInput" tabindex="0" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false">
          </input>
        </div>
      </div>
    ))
  }

  return (
    <div className='Headerline2Container'>
      <div className='HeaderLine2'>
        <div className="nikeLogoContainer">
          <svg className="nikeLogo" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd">
                </path>
            </svg>
        </div>
        <div className='headermenu2'>
          <div onMouseOver={mouseOverMenu} onMouseOut={mouseOutMenu} className='menuitem2'>
            New & Featured
            <div onMouseOver={mouseOverMenu} onMouseOut={mouseOutMenu} className={`dropdownHeader2 ${showDropdown ? 'show' : ''}`}>
              <div>
                  <div className='dropdownSection'>
                    <div className='dropdownSectionHeader' >
                    New Arrivals
                    </div>
                    <div className='dropdownSectionBody'>
                      Shop all
                    </div>
                    <div className='dropdownSectionBody'>
                      SNKRS Launch Calendar
                    </div>
                    <div className='dropdownSectionBody'>
                      New & Upcoming Drops
                    </div>
                  </div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  Featured
                  </div>
                  <div className='dropdownSectionBody'>
                    80's Inspired Collection
                  </div>
                  <div className='dropdownSectionBody'>
                    Picks for Prom
                  </div>
                  <div className='dropdownSectionBody'>
                    USWNT Jerseys
                  </div>
                  <div className='dropdownSectionBody'>
                    New in Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Member Exclusive
                  </div>
              </div>
                
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    Drops
                    </div>
                    <div className='dropdownSectionBody'>
                      AJ1
                    </div>
                    <div className='dropdownSectionBody'>
                      Dunks
                    </div>
                    <div className='dropdownSectionBody'>
                      Get 'Em in SNKRS
                    </div>
                    <div className='dropdownSectionBody'>
                      Jordan Heat Check
                    </div>
                    <div className='dropdownSectionBody'>
                      Complete Your Look
                    </div>
                    <div className='dropdownSectionBody'>
                      Latest In Jordan Clothing
                    </div>
                    <div className='dropdownSectionBody'>
                      Nike Lab
                    </div>
                    <div className='dropdownSectionBody'>
                      Drops 101
                    </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    New For Men
                  </div>
                  <div className='dropdownSectionBody'>
                    Shoes
                  </div>
                  <div className='dropdownSectionBody'>
                    Clothing
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  New For Women
                  </div>
                  <div className='dropdownSectionBody'>
                    Shoes
                  </div>
                  <div className='dropdownSectionBody'>
                    Clothing
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  New For Kids
                  </div>
                   <div className='dropdownSectionBody'>
                    Shoes
                  </div>
                  <div className='dropdownSectionBody'>
                    Clothing
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onMouseOver={mouseOverMenu1} onMouseOut={mouseOutMenu1} className='menuitem2'>
            Men
            <div onMouseOver={mouseOverMenu1} onMouseOut={mouseOutMenu1} className={`dropdownHeader2 ${showDropdown1 ? 'show' : ''}`}>
              <div >
                  <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    New Arrivals
                    </div>
                    <div className='dropdownSectionBody'>
                      Shop All
                    </div>
                  </div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  Featured
                  </div>
                  <div className='dropdownSectionBody'>
                    Just I: Jordan Golf
                  </div>
                  <div className='dropdownSectionBody'>
                    New in Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Best Sellers
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Matching Sets
                  </div>
                  <div className='dropdownSectionBody'>
                    Customize with Nike by You
                  </div>
                  <div className='dropdownSectionBody'>
                    Sale: Up to 40% Off
                  </div>
              </div>
                
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    All Shoes
                    </div>
                    <div className='dropdownSectionBody'>
                      Lifestyle
                    </div>
                    <div className='dropdownSectionBody'>
                      Jordan
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Max
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Force 1
                    </div>
                    <div className='dropdownSectionBody'>
                      Blazer
                    </div>
                    <div className='dropdownSectionBody'>
                      Basketball
                    </div>
                    <div className='dropdownSectionBody'>
                      Running
                    </div>
                    <div className='dropdownSectionBody'>
                      Soccer
                    </div>
                    <div className='dropdownSectionBody'>
                      Golf
                    </div>
                    <div className='dropdownSectionBody'>
                      SB
                    </div>
                    <div className='dropdownSectionBody'>
                      Training & Gym
                    </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    All Clothing
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Big & Tall
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  All Tops
                  </div>
                  <div className='dropdownSectionBody'>
                    Tops & T-Shirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Hoodies & Sweatshirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Jackets & Vests
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  All Bottoms
                  </div>
                   <div className='dropdownSectionBody'>
                    Pants & Tights
                  </div>
                  <div className='dropdownSectionBody'>
                    Shorts
                  </div>
                  <div className='dropdownSectionBody'>
                    Underwear
                  </div>
                  <div className='dropdownSectionBody'>
                    Socks
                  </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    Shop By Sports
                  </div>
                  <div className='dropdownSectionBody'>
                    All Sport
                  </div>
                  <div className='dropdownSectionBody'>
                    Basketball
                  </div>
                  <div className='dropdownSectionBody'>
                    Golf
                  </div>
                  <div className='dropdownSectionBody'>
                    Soccer
                  </div>
                  <div className='dropdownSectionBody'>
                    Football
                  </div>
                  <div className='dropdownSectionBody'>
                    Tennis
                  </div>
                  <div className='dropdownSectionBody'>
                    Baseball
                  </div>
                  <div className='dropdownSectionBody'>
                    Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Training & Gym
                  </div>
                  <div className='dropdownSectionBody'>
                    Track & Field
                  </div>
                  <div className='dropdownSectionBody'>
                    Lacrosse
                  </div>
                  <div className='dropdownSectionBody'>
                    Yoga
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onMouseOver={mouseOverMenu2} onMouseOut={mouseOutMenu2} className='menuitem2'>
            Women
            <div onMouseOver={mouseOverMenu2} onMouseOut={mouseOutMenu2} className={`dropdownHeader2 ${showDropdown2 ? 'show' : ''}`}>
            <div >
                  <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    New Arrivals
                    </div>
                    <div className='dropdownSectionBody'>
                      Shop All
                    </div>
                  </div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  Featured
                  </div>
                  <div className='dropdownSectionBody'>
                    Trending Color: Lemonade
                  </div>
                  <div className='dropdownSectionBody'>
                    New in Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Best Sellers
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Matching Sets
                  </div>
                  <div className='dropdownSectionBody'>
                    Customize with Nike by You
                  </div>
                  <div className='dropdownSectionBody'>
                    Sale: Up to 40% Off
                  </div>
              </div>
                
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    All Shoes
                    </div>
                    <div className='dropdownSectionBody'>
                      Lifestyle
                    </div>
                    <div className='dropdownSectionBody'>
                      Jordan
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Max
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Force 1
                    </div>
                    <div className='dropdownSectionBody'>
                      Dunks & Blazer
                    </div>
                    <div className='dropdownSectionBody'>
                      Running
                    </div>
                    <div className='dropdownSectionBody'>
                      Trianing & Gym
                    </div>
                    <div className='dropdownSectionBody'>
                      Basketball
                    </div>
                    <div className='dropdownSectionBody'>
                      Shoes $100 & Under
                    </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    All Clothing
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Plus Size
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  All Tops
                  </div>
                  <div className='dropdownSectionBody'>
                    Bras
                  </div>
                  <div className='dropdownSectionBody'>
                    Tops & T-Shirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Hoodies & Sweatshirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Jackets & Vests
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  All Bottoms
                  </div>
                   <div className='dropdownSectionBody'>
                    Leggings
                  </div>
                  <div className='dropdownSectionBody'>
                    Pants
                  </div>
                  <div className='dropdownSectionBody'>
                    Shorts
                  </div>
                  <div className='dropdownSectionBody'>
                    Socks
                  </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    Shop By Sports
                  </div>
                  <div className='dropdownSectionBody'>
                    All Sport
                  </div>
                  <div className='dropdownSectionBody'>
                    Yoga
                  </div>
                  <div className='dropdownSectionBody'>
                    Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Training
                  </div>
                  <div className='dropdownSectionBody'>
                    Basketball
                  </div>
                  <div className='dropdownSectionBody'>
                    Golf
                  </div>
                  <div className='dropdownSectionBody'>
                    Soccer
                  </div>
                  <div className='dropdownSectionBody'>
                    Tennis
                  </div>
                  <div className='dropdownSectionBody'>
                    Track & Field
                  </div>
                  <div className='dropdownSectionBody'>
                    Lacrosse
                  </div>
                  <div className='dropdownSectionBody'>
                    Softball
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onMouseOver={mouseOverMenu3} onMouseOut={mouseOutMenu3} className='menuitem2'>
            Kids
            <div onMouseOver={mouseOverMenu3} onMouseOut={mouseOutMenu3} className={`dropdownHeader2 ${showDropdown3 ? 'show' : ''}`}>
              <div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  Featured
                  </div>
                  <div className='dropdownSectionBody'>
                    New Arrivals
                  </div>
                  <div className='dropdownSectionBody'>
                    Best Sellers
                  </div>
                  <div className='dropdownSectionBody'>
                    Summer Brights
                  </div>
                  <div className='dropdownSectionBody'>
                    New Styles for Play
                  </div>
                  <div className='dropdownSectionBody'>
                    New In Running
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Matching Sets
                  </div>
                  <div className='dropdownSectionBody'>
                    Sale: Up to 40% Off
                  </div>
              </div>
                
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    All Shoes
                    </div>
                    <div className='dropdownSectionBody'>
                      Big Kids (3.5Y - 7Y)
                    </div>
                    <div className='dropdownSectionBody'>
                      Little Kids (10.5C - 3Y)
                    </div>
                    <div className='dropdownSectionBody'>
                      Baby & Toddler (1C - 10C)
                    </div>
                    <div className='dropdownSectionBody'>
                      Jordan
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Force 
                    </div>
                    <div className='dropdownSectionBody'>
                      Air Max
                    </div>
                    <div className='dropdownSectionBody'>
                      Lifestyle
                    </div>
                    <div className='dropdownSectionBody'>
                      Basketball
                    </div>
                    <div className='dropdownSectionBody'>
                      Running
                    </div>
                    <div className='dropdownSectionBody'>
                      Shoes $70 & Under
                    </div>
                    <div className='dropdownSectionBody'>
                      Easy On & Off
                    </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    All Clothing
                  </div>
                  <div className='dropdownSectionBody'>
                    Big Kids (XS -XL)
                  </div>
                  <div className='dropdownSectionBody'>
                    Little Kids (4-7)
                  </div>
                  <div className='dropdownSectionBody'>
                    Baby & Toddler (0M - 4T)
                  </div>
                  <div className='dropdownSectionBody'>
                    Extended Sizing
                  </div>
                  <div className='dropdownSectionBody'>
                    Tops & T-Shirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Bras
                  </div>
                  <div className='dropdownSectionBody'>
                    Hoodies & Sweatshirts
                  </div>
                  <div className='dropdownSectionBody'>
                    Outerwear & Jackets
                  </div>
                  <div className='dropdownSectionBody'>
                    Pants & Tights
                  </div>
                  <div className='dropdownSectionBody'>
                    Shorts
                  </div>
                  <div className='dropdownSectionBody'>
                    Underwear
                  </div>
                  <div className='dropdownSectionBody'>
                    Socks
                  </div>
                </div>
                
              </div>
              <div className='dropdownSection'>
              <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  Shop by Age
                  </div>
                  <div className='dropdownSectionBody'>
                    Big Kids
                  </div>
                  <div className='dropdownSectionBody'>
                    Little Kids
                  </div>
                  <div className='dropdownSectionBody'>
                    Baby & Toddler
                  </div>
                </div>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                  Sport & Activity
                  </div>
                   <div className='dropdownSectionBody'>
                    All Sport
                  </div>
                  <div className='dropdownSectionBody'>
                    Play
                  </div>
                  <div className='dropdownSectionBody'>
                    Basketball
                  </div>
                  <div className='dropdownSectionBody'>
                    Soccer
                  </div>
                  <div className='dropdownSectionBody'>
                    Baseball
                  </div>
                  <div className='dropdownSectionBody'>
                    Softball
                  </div>
                  <div className='dropdownSectionBody'>
                    Football
                  </div>
                  <div className='dropdownSectionBody'>
                    Running
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onMouseOver={mouseOverMenu4} onMouseOut={mouseOutMenu4} className='menuitem2'>
            Accessories
            <div onMouseOver={mouseOverMenu4} onMouseOut={mouseOutMenu4} className={`dropdownHeader2 ${showDropdown4 ? 'show' : ''}`}>
              <div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  All Accessories
                  </div>
                  <div className='dropdownSectionBody'>
                    Jordan
                  </div>
                  <div className='dropdownSectionBody'>
                    Socks
                  </div>
                  <div className='dropdownSectionBody'>
                    Hats & Headwear
                  </div>
                  <div className='dropdownSectionBody'>
                    Sunglasses & Eyewear
                  </div>
                  <div className='dropdownSectionBody'>
                    Bags & Backbacks
                  </div>
                  <div className='dropdownSectionBody'>
                    Water Bottles & Hydration
                  </div>
                  <div className='dropdownSectionBody'>
                    Gloves
                  </div>
                  <div className='dropdownSectionBody'>
                    $25 & Under
                  </div>
                  <div className='dropdownSectionBody'>
                    Sale: Up to 40% Off
                  </div>
              </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    Gear Up by Sport
                    </div>
                    <div className='dropdownSectionBody'>
                      All Sport
                    </div>
                    <div className='dropdownSectionBody'>
                      Basketball
                    </div>
                    <div className='dropdownSectionBody'>
                      Golf
                    </div>
                    <div className='dropdownSectionBody'>
                      Soccer
                    </div>
                    <div className='dropdownSectionBody'>
                      Football
                    </div>
                    <div className='dropdownSectionBody'>
                      Baseball
                    </div>
                    <div className='dropdownSectionBody'>
                      Track & Field
                    </div>
                    <div className='dropdownSectionBody'>
                      Lacrosse
                    </div>
                    <div className='dropdownSectionBody'>
                      Softball
                    </div>
                    <div className='dropdownSectionBody'>
                      Running
                    </div>
                    <div className='dropdownSectionBody'>
                      Swim
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div onMouseOver={mouseOverMenu5} onMouseOut={mouseOutMenu5} className='menuitem2'>
            Sale
            <div onMouseOver={mouseOverMenu5} onMouseOut={mouseOutMenu5} className={`dropdownHeader2 ${showDropdown5 ? 'show' : ''}`}>
              <div>
                  <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    All Sale
                    </div>
                    <div className='dropdownSectionBody'>
                      Sale Shoes
                    </div>
                    <div className='dropdownSectionBody'>
                      Sale Clothing
                    </div>
                    <div className='dropdownSectionBody'>
                      Sale Acessories
                    </div>
                  </div>
              <div className='dropdownSection'>
                <div className='dropdownSectionHeader'>
                  Limited Time
                  </div>
                  <div className='dropdownSectionBody'>
                    Last Chance Sale
                  </div>
                  <div className='dropdownSectionBody'>
                    New Markdowns
                  </div>
              </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                    <div className='dropdownSectionHeader'>
                    Men
                    </div>
                    <div className='dropdownSectionBody'>
                      Shoes
                    </div>
                    <div className='dropdownSectionBody'>
                      Clothing
                    </div>
                    <div className='dropdownSectionBody'>
                      Accessories
                    </div>
                    <div className='dropdownSectionBody'>
                      Shop All
                    </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    Women
                  </div>
                  <div className='dropdownSectionBody'>
                    Shoes
                  </div>
                  <div className='dropdownSectionBody'>
                    Clothing
                  </div>
                  <div className='dropdownSectionBody'>
                    Accessories
                  </div>
                  <div className='dropdownSectionBody'>
                    Shop All
                  </div>
                </div>
              </div>
              <div className='dropdownSection'>
                <div className='dropdownSection'>
                  <div className='dropdownSectionHeader'>
                    Kids
                  </div>
                  <div className='dropdownSectionBody'>
                    Shoes
                  </div>
                  <div className='dropdownSectionBody'>
                    Clothing
                  </div>
                  <div className='dropdownSectionBody'>
                    Accessories
                  </div>
                  <div className='dropdownSectionBody'>
                    Shop All
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchStatus}
       
      </div>
    </div>
  );
};

export default HeaderLine2;
