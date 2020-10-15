import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTaxi, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
const SideBar = (props) => {
    const buttonStyle = {
        backgroundColor: "white",
         color: "black", 
         border: "none", 
         height: "50px",
         width: "170px",
         textAlign: "left"
    }
    return (
        <div className="ml-2 mt-5">
            <img className="logo" src={logo} alt=""/>
            <br/>
            <Button style={buttonStyle} onClick={props.handleOrder} className="mt-3 pl-3"> <FontAwesomeIcon icon={faShoppingCart}/> Order</Button>
            <Button style={buttonStyle} onClick={props.handleServiceList} className="mt-3 pl-3"><FontAwesomeIcon icon={faTaxi} /> Service List</Button>
            <Button style={buttonStyle} onClick={props.handleReview} className="mt-3 pl-3"><FontAwesomeIcon icon={ faCommentAlt} /> Review</Button>    
            
        </div>
    );
};

export default SideBar;