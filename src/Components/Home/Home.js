import React from 'react';
import Reviews from '../Reviews/Reviews';
import useReviews from '../hooks/useReviews';


import './Home.css'
import Review from '../Review/Review';

const Home = () => {
    const  [reviews, setReviews] = useReviews();
    return (
    <div className='home-container'>
        <div  className='products-info'>
           <div className='headline'>
              <h1 >GET THE BEST VERSION</h1>
              <h1> OF YOUR LOOK STYLE</h1>
              <p>A new look for your watch.your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combination. </p>
          </div>
          <div>
              <img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80" alt=''></img>
          </div>
        </div>
        <h1 className='review-headline'>Customers Reviews</h1>
          <div className='customer-reviews'>
             
          
          { 
              reviews.slice(0, 3).map(review => <Review
              review={review}
              ></Review>)
          }
          </div>
          
     </div>
       
    );
};

export default Home;