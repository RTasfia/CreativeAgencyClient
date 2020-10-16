import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewCard = ({ review }) => {
    return (
        <div className="col-md-4 mb-4">
            <Card style={{ width: '16rem' }}>
                <Card.Body >
                    <div className="d-flex justify-content-center">
                        <div className="mr-3">
                            <img style={{ height: "50px" }} src={review.img} alt="" />
                        </div>
                        <div>
                            <h5>{review.name}</h5>
                            <h6>{review.designation}</h6>
                        </div>
                    </div>
                    <p style={{color: "gray"}}>{review.description}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;