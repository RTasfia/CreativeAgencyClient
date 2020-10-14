import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTaxi, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
const SideBar = (props) => {
    return (
        <div className="ml-2 mt-5">
            <img className="logo" src={logo} alt=""/>
            <button onClick={props.handleOrder} className="mt-3 btn-brand"> <FontAwesomeIcon icon={faShoppingCart}/> Order</button>
            <button onClick={props.handleServiceList} className="mt-3 btn-brand"><FontAwesomeIcon icon={faTaxi} /> Service List</button>
            <button onClick={props.handleReview} className="mt-3 btn-brand"><FontAwesomeIcon icon={ faCommentAlt} /> Review</button>    
        </div>
    );
};

export default SideBar;