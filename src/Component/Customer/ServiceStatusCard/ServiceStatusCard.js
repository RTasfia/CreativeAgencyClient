import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const ServiceStatusCard = ({service}) => {    
    console.log("ri", service.status);
    return (
        <div className="col-md-5 mb-4">
            <div style={{height: "200px", backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
                <div>
                    <img style={{ height: "50px" }} src={require(`../../../images/icons/${service.icon}`)} alt="" />
                    <Button className="ml-5" style={{backgroundColor:""}}>{service.status}</Button>
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceStatusCard;