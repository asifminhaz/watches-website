import React from 'react';

import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'


const Reviews = () => {
    
    const [reviews, setReviews] = useReviews();
      
    return (
        
        
            <div className='customer-reviews'>
            {
                reviews.map(review => <Review
                review={review}
                ></Review>) 
            }
            </div>
    
    );
};

export default Reviews;