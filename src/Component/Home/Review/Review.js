import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FakeDataForReview from '../../../FakeDataForReview/FakeDataForReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [allReview, setAllReview] = useState([]);

    // function for adding all reviews
    const handleClick = () => {
        fetch("http://localhost:5000/allReview", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(FakeDataForReview)
        })
    }
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setAllReview(data);
        })

    },[])
    return (
        <section className="mb-5">
            {/* to add all review
            <Button onClick={handleClick}>click</Button> */}
            <h2 className="mb-4" style={{textAlign: "center"}}>Clients <span style={{color: "olivedrab"}}>Feedback</span></h2>
            <div className="row offset-1">
            {
                allReview.map(review => <ReviewCard review={review}></ReviewCard>)
            }
            </div>
        </section>
    );
};

export default Review;