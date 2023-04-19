import React from 'react';

const Interest = (props) => {

    return (
        <div className='interest'>
            <p className='interest-payments'>4 interest-free payments of {props.interest} with</p>
            <span className='klarna'>Klarna.</span>
            <button className='learn-more'>Learn More</button>
        </div>
    )
}

export default Interest;