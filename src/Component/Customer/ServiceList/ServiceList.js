import React, { useState } from 'react';
import FakeDataForServiceList from '../../../FakeDataForServiceList/FakeDataForServiceList';
import ServiceStatusCard from '../ServiceStatusCard/ServiceStatusCard';

const ServiceList = () => {
    const [allService, setAllService] = useState(FakeDataForServiceList);
    return (
        <div className="row">
            {
                allService.map(service => <ServiceStatusCard service={service}></ServiceStatusCard>)
            }
            
            
        </div>
    );
};

export default ServiceList;