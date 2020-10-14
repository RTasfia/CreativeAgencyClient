import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';



const Clients = () => {
    return (
        <div className="row offset-1">
            <div className="col-4 col-md-2 mb-3">
                <img style={{height: "40px", width: "80%"}} src={slack} alt="" />
            </div>
            <div className="col-4 col-md-2">
                <img style={{height: "40px", width: "80%"}} src={google} alt="" />
            </div>
            <div className="col-4 col-md-2">
                <img style={{height: "40px", width: "80%"}} src={uber} alt="" />
            </div>
            <div className="col-4 col-md-2">
                <img style={{height: "40px", width: "80%"}} src={netflix} alt="" />
            </div>
            <div className="col-4 col-md-2">
                <img style={{height: "40px", width: "80%"}} src={airbnb} alt="" /></div>
        </div>
    );
};

export default Clients;