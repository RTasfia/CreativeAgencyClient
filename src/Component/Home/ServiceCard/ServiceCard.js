import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({service}) => {
    return (
        
        <div className="col-md-4 mb-4">
            <Card style={{ width: '16rem', textAlign: "center" }}>
            <Card.Body>
                <img style={{height: "100px"}} src={require(`../../../images/icons/${service.icon}`)} alt=""/>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
            </Card.Body>
        </Card>

        </div>
        
    );
};

export default ServiceCard;