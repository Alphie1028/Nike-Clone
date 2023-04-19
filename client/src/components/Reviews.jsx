import React, { useState , useEffect } from 'react';
import "../styles/Reviews.css";
const Reviews = (props) => {
    const [active, setActive] = useState(false);
    function click() {

        if(!active) {
            setActive(true);
            document.querySelector('.review-header').style.borderBottom = 'none';
        }else{
            setActive(false);
            document.querySelector('.review-header').style.borderBottom = '2px solid rgba(0, 0, 0, 0.1)';
        } 
    }


    
    if(props.data) {
        const amtReviews = props.data.length;
        let starArray = [];
        for (let i = 0; i < amtReviews; i++) {
            starArray.push(props.data[i].stars)
        }
        const sumOfStars = starArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const avgStars = Math.round((sumOfStars / starArray.length) * 10) / 10;
        const avgOfStars = Math.ceil(sumOfStars / starArray.length);
        return (
            <div className ="reviewBlock">
                <div onClick={click} className="review-header">
                    <span>Reviews ({amtReviews})</span>
                    <div className="stars">
                        <span style={avgOfStars >= 1 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star">&#9733;</span>
                        <span style={avgOfStars >= 2 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star">&#9733;</span>
                        <span style={avgOfStars >= 3 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star">&#9733;</span>
                        <span style={avgOfStars >= 4 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star">&#9733;</span>
                        <span style={avgOfStars === 5 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star">&#9733;</span>
                    </div>
                    <div className={active ? "arrowup" : "arrowdown"}>
                        <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                            <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className={`review ${active ? 'show' : ''}`}>
                    <div className='reviewLine'>
                        <div className="stars1">
                            <span style={avgOfStars >= 1 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star1">&#9733;</span>
                            <span style={avgOfStars >= 2 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star1">&#9733;</span>
                            <span style={avgOfStars >= 3 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star1">&#9733;</span>
                            <span style={avgOfStars >= 4 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star1">&#9733;</span>
                            <span style={avgOfStars === 5 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star1">&#9733;</span>
                        </div>
                        <div className='reviewLineText'>{avgStars} Stars</div>
                    </div>
                    <div className='writeReview'>
                        Write a Review
                    </div>
                    <div className="reviewSingle">
                        <p className='reviewTitle'>
                        {props.data[0].title}
                        </p>
                        <div className='reviewLine1'>
                            <div className="stars2">
                                <span style={props.data[0].stars >= 1 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[0].stars >= 2 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[0].stars >= 3 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[0].stars >= 4 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[0].stars >= 5 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                            </div>
                            <div className='reviewText'>
                            {props.data[0].user_name} - {props.data[0].date_created}
                            </div>
                        </div>
                        <div className='reviewLine2'>
                            {props.data[0].summary}
                        </div>
                       
                    </div>
                    <div className="reviewSingle">
                        <p className='reviewTitle'>
                           {props.data[1].title}
                        </p>
                        <div className='reviewLine1'>
                            <div className="stars2">
                                <span style={props.data[1].stars >= 1 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[1].stars >= 2 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[1].stars >= 3 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[1].stars >= 4 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[1].stars >= 5 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                            </div>
                            <div className='reviewText'>
                            {props.data[1].user_name} - {props.data[1].date_created}
                            </div>
                        </div>
                        <div className='reviewLine2'>
                        {props.data[1].summary}
                        </div>
                    </div>
                    <div className="reviewSingle">
                        <p className='reviewTitle'>
                        {props.data[2].title}
                        </p>
                        <div className='reviewLine1'>
                            <div className="stars2">
                                <span style={props.data[2].stars >= 1 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[2].stars >= 2 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[2].stars >= 3 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                                <span style={props.data[2].stars >= 4 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}}className="star2">&#9733;</span>
                                <span style={props.data[2].stars >= 5 ? {color: 'black'} : {color: 'rgb(146, 146, 146)'}} className="star2">&#9733;</span>
                            </div>
                            <div className='reviewText'>
                            {props.data[2].user_name} - {props.data[2].date_created}
                            </div>
                        </div>
                        <div className='reviewLine2'>
                        {props.data[2].summary}
                        </div>
                    </div>
                    <div className='moreReviews'>
                        More Reviews
                    </div>
                </div>
            </div>
            
      );
    }
    
};

export default Reviews;