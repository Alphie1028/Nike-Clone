import React, { useState } from 'react';

const SizeGuide = (props) => {

    return (
        <>
            <div className='shoe-size-container'>
                <span className='select-size-text'>Select Size</span>
                <span className='size-guide-text'>Size Guide</span>
            </div>
            <div className='shoe-size-boxes-container'>
                <div className='shoe-size-boxes'>
                    {props.sizeArray.map((size, index) => (
                        <button className='shoe-size-select' key={index}>
                            <span>{size}</span>
                        </button>
                    ))}
                </div>
            </div>

        </>


    )
}

export default SizeGuide;