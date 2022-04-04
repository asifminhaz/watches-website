import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, ratings, review} = props.review;
    return (
        <div className='home-review'>
            <h4>{name}</h4>
            <p>{review}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;