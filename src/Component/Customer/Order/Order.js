import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import CustomerReview from '../CustomerReview/CustomerReview';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import ServiceList from '../ServiceList/ServiceList';
import SideBar from '../SideBar/SideBar';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [listStatus, setListStatus] = useState(false);
    const [reviewStatus, setReviewStatus] = useState(false);
    const [orderStatus, setOrderStatus] = useState(true);
    const handleOrder = () => {
        setOrderStatus(true);
        setListStatus(false);
        setReviewStatus(false);

    }
    const handleServiceList = () => {
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
            <div className="col-md-9 mt-5" style={{ backgroundColor: " #F4FDFB", height: "100vh" }}>
                <div className="d-flex justify-content-between mt-3">
                    <h5 className="text-brand">Order</h5>
                    <button className="btn-brand mr-3">{loggedInUser.name}</button>

                </div>
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