import React, {  useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import FakeDataForServiceList from '../../../FakeDataForServiceList/FakeDataForServiceList';
import ServiceStatusCard from '../ServiceStatusCard/ServiceStatusCard';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allService, setAllService] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/currentUser?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setAllService(data)
        })
    },[])
    console.log("allservice", allService);
    return (
        <div className="row">
            {
                allService.map(service => <ServiceStatusCard service={service}></ServiceStatusCard>)
            }
            
            
        </div>
    );
};

export default ServiceList;