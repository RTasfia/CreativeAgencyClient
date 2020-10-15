import React, {  useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import FakeDataForServiceList from '../../../FakeDataForServiceList/FakeDataForServiceList';
import ServiceStatusCard from '../ServiceStatusCard/ServiceStatusCard';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [userService, setUserService] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/currentUser?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setUserService(data)
        })
    },[])
    console.log("allservice", userService);
    return (
        <div className="row">
            {
                userService.map(service => <ServiceStatusCard service={service}></ServiceStatusCard>)
            }
            
            
        </div>
    );
};

export default ServiceList;