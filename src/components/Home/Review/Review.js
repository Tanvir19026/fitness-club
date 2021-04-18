import React, { useEffect, useState } from 'react';
import ReviewPortal from './ReviewPortal';


const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://floating-headland-81082.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="container">
            <h1 style={{textAlign: 'center',color:'blue',fontWeight:'600'}}>Reviews</h1>
        <div className=" row mt-5 d-flex justify-content-between" >
          
            {
                reviews.map(review => <ReviewPortal review={review}></ReviewPortal>)
            }
            
        </div>
        </div>
    );
};

export default Review;