import React, {  useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceStatusCard from '../ServiceStatusCard/ServiceStatusCard';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [userService, setUserService] = useState([]);
    useEffect(()=>{
        fetch("https://warm-shore-67382.herokuapp.com/currentUser?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setUserService(data)
        })
    },[])
    return (
        <div className="row">
            {
                userService.map(service => <ServiceStatusCard service={service}></ServiceStatusCard>)
            }
            
            
        </div>
    );
};

export default ServiceList;