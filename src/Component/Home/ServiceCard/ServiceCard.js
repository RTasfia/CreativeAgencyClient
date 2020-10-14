import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const history = useHistory();
    const handleOrder = () => {
        history.push("/order");
    }
    return (

        <div className="col-md-4 mb-4">
            <Card onClick={handleOrder} style={{ width: '16rem', textAlign: "center" }}>
                <Card.Body>
                    <img style={{ height: "100px" }} src={require(`../../../images/icons/${service.icon}`)} alt="" />
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default ServiceCard;