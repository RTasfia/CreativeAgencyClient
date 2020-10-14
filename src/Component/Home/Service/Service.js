import React, { useState } from 'react';
import FakeDataForService from '../../../FakeDataForService/FakeDataForService';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [allService, setAllService] = useState(FakeDataForService);
    return (
        <section className="mt-5">
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