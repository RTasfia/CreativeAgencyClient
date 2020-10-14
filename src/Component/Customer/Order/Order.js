import React, { useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import ServiceList from '../ServiceList/ServiceList';
import SideBar from '../SideBar/SideBar';

const Order = () => {
    const [listStatus, setListStatus] = useState(false);
    const [reviewStatus, setReviewStatus] = useState(false);
    const [orderStatus, setOrderStatus] = useState(true);
    const handleOrder = () => {
        setOrderStatus(true);
        setListStatus(false);
        setReviewStatus(false);

    }
    const handleServiceList = () =>{
        setListStatus(true);
        setReviewStatus(false);
        setOrderStatus(false);
    }
    const handleReview = () => {
        setReviewStatus(true);
        setListStatus(false);
        setOrderStatus(false);
    }
    return (
        <section className="row ">
            <div className="col-md-3 mb-4">
                <SideBar handleOrder={handleOrder} handleServiceList={handleServiceList} handleReview={handleReview}></SideBar>
            </div>
            <div className="col-md-9 mt-5" style={{backgroundColor: " #F4FDFB", height: "100vh"}}>
                {
                    orderStatus && <PlaceOrder></PlaceOrder>
                }
            
                {
                    listStatus && <ServiceList ></ServiceList> 
                }
                {
                    reviewStatus && <CustomerReview></CustomerReview> 
                }
                
                

            </div>
        </section>
    );
};

export default Order;