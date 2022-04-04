import React from 'react';
import useReviews from '../hooks/useReviews';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-item'>
            {
                reviews.map(review => 
                <h3>{review.name}
               <p>{review.review}</p>
               <p>Ratings: {review.ratings}</p>
                </h3>) 
            }
        </div>
    );
};

export default Reviews;