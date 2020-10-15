import React, { useState, useEffect  } from 'react';
import { Button } from 'react-bootstrap';
import FakeDataForService from '../../../FakeDataForService/FakeDataForService';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [allService, setAllService] = useState([]);

    // function for adding all service
    const handleClick = () => {
        fetch("http://localhost:5000/allService", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(FakeDataForService)
        })
    }
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setAllService(data);
        })

    },[])

    return (
        <section className="mt-5">
            
            {/* to add all service
             <Button onClick = {handleClick}>click</Button>
             */}

            <h2 style={{textAlign:"center"}}>Provide Awesome <span style={{color: "olivedrab"}}>Serivces</span></h2>
            <div className="row mt-4 offset-1">
                {
                    allService.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Service;