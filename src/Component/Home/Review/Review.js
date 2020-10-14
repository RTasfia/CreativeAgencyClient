import React, { useState } from 'react';
import FakeDataForReview from '../../../FakeDataForReview/FakeDataForReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [allReview, setAllReview] = useState(FakeDataForReview);
    return (
        <section className="mb-5">
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